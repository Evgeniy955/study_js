#!/usr/bin/env node
// Показывает информацию о MCP-конфигурации, PID-файле и предполагаемом WS endpoint/порту.

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function findConfigPaths() {
  const candidates = [];
  candidates.push(path.resolve(process.cwd(), 'mcp.json'));
  const appData = process.env.APPDATA || path.join(process.env.HOME || '', 'AppData', 'Roaming');
  const localAppData = process.env.LOCALAPPDATA || path.join(process.env.HOME || '', 'AppData', 'Local');
  if (appData) {
    candidates.push(path.join(appData, 'github-copilot', 'intellij', 'mcp.json'));
    candidates.push(path.join(appData, 'mcp.json'));
  }
  if (localAppData) {
    candidates.push(path.join(localAppData, 'github-copilot', 'intellij', 'mcp.json'));
    candidates.push(path.join(localAppData, 'mcp.json'));
  }
  if (process.env.HOME) candidates.push(path.join(process.env.HOME, 'mcp.json'));
  if (process.env.USERPROFILE) candidates.push(path.join(process.env.USERPROFILE, 'mcp.json'));
  return candidates;
}

function loadConfig() {
  const paths = findConfigPaths();
  for (const p of paths) {
    try {
      if (!fs.existsSync(p)) continue;
      const raw = fs.readFileSync(p, 'utf8');
      try { return { path: p, json: JSON.parse(raw) }; } catch (e) { console.error('Failed parse', p, e.message); }
    } catch (e) { /* ignore */ }
  }
  return null;
}

function pidFilePath(serverName) {
  const safe = (serverName || 'microsoft/playwright-mcp').replace(/[^a-z0-9_.-]/gi, '_');
  return path.resolve(process.cwd(), `mcp-${safe}.pid`);
}

function readPid(file) {
  try {
    if (!fs.existsSync(file)) return null;
    const raw = fs.readFileSync(file, 'utf8').trim();
    const pid = Number.parseInt(raw, 10);
    if (Number.isNaN(pid)) return null;
    return pid;
  } catch (e) { return null; }
}

function isProcessRunning(pid) {
  if (!pid) return false;
  try {
    if (process.platform === 'win32') {
      const out = execSync(`tasklist /FI "PID eq ${pid}" /NH`, { encoding: 'utf8' });
      return out && !/No tasks are running/.test(out) && !/INFO: No tasks are running/.test(out);
    } else {
      process.kill(pid, 0);
      return true;
    }
  } catch (e) { return false; }
}

function printJSON(obj) { console.log(JSON.stringify(obj, null, 2)); }

function main() {
  const cfg = loadConfig();
  if (!cfg) {
    console.log('No mcp.json found in common locations.');
  } else {
    console.log('Found mcp.json at:', cfg.path);
    // print high level structure
    if (cfg.json.servers) {
      console.log('Servers in config:');
      for (const k of Object.keys(cfg.json.servers)) {
        const s = cfg.json.servers[k];
        console.log(`- ${k}`);
        console.log('  command:', s.command);
        if (s.args) console.log('  args:', s.args.join(' '));
        // heuristic: ws endpoint or port fields
        const maybe = {};
        if (s.port) maybe.port = s.port;
        if (s.ws) maybe.ws = s.ws;
        if (s.wsEndpoint) maybe.wsEndpoint = s.wsEndpoint;
        if (s.connect) maybe.connect = s.connect;
        if (Object.keys(maybe).length) console.log('  endpoint hints:', maybe);
      }
    } else {
      console.log('mcp.json has no "servers" key. Full content:');
      printJSON(cfg.json);
    }
  }

  // Also check default pid path
  const serverArgIndex = process.argv.indexOf('--server');
  const serverName = serverArgIndex !== -1 ? process.argv[serverArgIndex + 1] : 'microsoft/playwright-mcp';
  const pidPath = pidFilePath(serverName);
  console.log('PID file path checked:', pidPath);
  const pid = readPid(pidPath);
  if (!pid) {
    console.log('No PID file found or invalid PID.');
  } else {
    console.log('PID read from file:', pid, 'Running:', isProcessRunning(pid));
  }

  console.log('\nHints:');
  console.log('- If config contains a port or wsEndpoint, use that to connect as ws://host:port or the ws endpoint provided.');
  console.log('- If no config found, inspect your run_mcp.js or start script that prints a ws endpoint on startup.');
}

main();

