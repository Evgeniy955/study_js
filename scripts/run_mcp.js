#!/usr/bin/env node
// Скрипт запускает MCP-сервер, описанный в mcp.json.

const fs = require('fs');
const path = require('path');
const { spawn, execSync } = require('child_process');

function findConfigPaths() {
  const candidates = [];
  // project local
  candidates.push(path.resolve(process.cwd(), 'mcp.json'));

  // Windows AppData (Roaming) and LocalAppData
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

  // also look in user's home
  if (process.env.HOME) candidates.push(path.join(process.env.HOME, 'mcp.json'));

  // also check user's profile on Windows
  if (process.env.USERPROFILE) candidates.push(path.join(process.env.USERPROFILE, 'mcp.json'));

  return candidates;
}

function loadConfig() {
  const paths = findConfigPaths();
  console.log('Checking config paths:', paths.join('; '));
  for (const p of paths) {
    try {
      if (!fs.existsSync(p)) continue;
      const raw = fs.readFileSync(p, 'utf8');
      try {
        const cfg = JSON.parse(raw);
        console.log('Using config:', p);
        return cfg;
      } catch (parseErr) {
        console.error('Failed to parse JSON at', p, parseErr.message);
        continue;
      }
    } catch (e) {
      console.error('Error reading candidate config', p, e.message);
      continue;
    }
  }
  return null;
}

function pickServer(cfg, name) {
  if (!cfg || !cfg.servers) return null;
  if (name && cfg.servers[name]) return { name, cfg: cfg.servers[name] };
  const keys = Object.keys(cfg.servers);
  if (keys.length === 0) return null;
  return { name: keys[0], cfg: cfg.servers[keys[0]] };
}

function escapeArgForShell(arg) {
  if (!arg) return '';
  // Простое экранирование: если есть пробел или спецсимволы — обернуть в двойные кавычки
  if (/\s|"|'/.test(arg)) {
    return '"' + arg.replace(/"/g, '\\"') + '"';
  }
  return arg;
}

function runCommandWindows(command, args) {
  const cmdStr = [command, ...args].map(escapeArgForShell).join(' ');
  console.log('Spawning through shell (Windows):', cmdStr);
  return spawn(cmdStr, { stdio: 'inherit', shell: true });
}

function trySpawn(command, args, options) {
  return spawn(command, args, options);
}

function npmFallbackArgs(originalArgs) {
  // transform: npx -y pkg ...  -> npm exec --yes pkg ...
  const args = originalArgs.slice();
  const filtered = args.filter(a => a !== '-y' && a !== '--yes');
  return ['exec', '--yes', ...filtered];
}

// helper: pid file path based on server name
function pidFilePath(serverName) {
  const safe = serverName.replace(/[^a-z0-9_.-]/gi, '_');
  return path.resolve(process.cwd(), `mcp-${safe}.pid`);
}

function writePidFile(file, pid) {
  try {
    fs.writeFileSync(file, String(pid), { encoding: 'utf8' });
    console.log('Wrote PID file:', file);
  } catch (e) {
    console.error('Failed to write PID file', file, e.message);
  }
}

function removePidFile(file) {
  try {
    if (fs.existsSync(file)) fs.unlinkSync(file);
    console.log('Removed PID file:', file);
  } catch (e) {
    console.error('Failed to remove PID file', file, e.message);
  }
}

// --- BEGIN: lightweight status-check utilities copied from status_mcp.js ---
// These are added so `run_mcp.js` can show status without spawning the separate script.

// color support detection: --color / --no-color flags or NO_COLOR env
const _argsForColor = process.argv.slice(2);
const _forceColorOn = _argsForColor.includes('--color');
const _forceColorOff = _argsForColor.includes('--no-color') || !!process.env.NO_COLOR;
let _supportsColor = false;
if (_forceColorOn) _supportsColor = true;
else if (_forceColorOff) _supportsColor = false;
else _supportsColor = (typeof process.stdout !== 'undefined' && !!process.stdout.isTTY);

const COLOR_CODES = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
};

function color(text, colorName) {
  if (!_supportsColor || !colorName || !COLOR_CODES[colorName]) return text;
  return COLOR_CODES[colorName] + text + COLOR_CODES.reset;
}

function readPid(file) {
  try {
    if (!fs.existsSync(file)) return null;
    const raw = fs.readFileSync(file, 'utf8').trim();
    const pid = Number.parseInt(raw, 10);
    if (Number.isNaN(pid)) return null;
    return pid;
  } catch (e) {
    return null;
  }
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
  } catch (e) {
    return false;
  }
}

function printStatusForPidPath(pidPath, serverName) {
  const pid = readPid(pidPath);
  if (!pid) {
    console.log(color('No PID file found at ' + pidPath, 'yellow'));
    console.log(color('Server appears to be not running (or was started externally).', 'yellow'));
    console.log(color("Tip: run with --color to force colored output or --no-color to disable.", 'blue'));
    return;
  }
  const running = isProcessRunning(pid);
  if (running) {
    console.log(color(`Server ${serverName} is running (PID: ${pid}).`, 'green'));
  } else {
    console.log(color(`PID file exists but process ${pid} is not running.`, 'red'));
    console.log(color(`You may remove stale PID file: ${pidPath}`, 'yellow'));
  }
}
// --- END: status-check utilities ---

function run() {
  const cfg = loadConfig();
  if (!cfg) {
    console.error('mcp.json not found in expected locations. Create one or pass explicit config.');
    process.exit(2);
  }

  const serverNameArgIndex = process.argv.indexOf('--server');
  const serverName = serverNameArgIndex !== -1 ? process.argv[serverNameArgIndex + 1] : undefined;

  const picked = pickServer(cfg, serverName);
  if (!picked) {
    console.error('No servers found in mcp.json');
    process.exit(3);
  }

  const s = picked.cfg;

  // show status before attempting to start
  try {
    const pidPath = pidFilePath(picked.name);
    printStatusForPidPath(pidPath, picked.name);
  } catch (e) {
    // ignore status-check errors
  }

  if (!s.command) {
    console.error('Server config must contain "command"');
    process.exit(4);
  }

  const command = s.command;
  const args = Array.isArray(s.args) ? s.args.slice() : [];

  console.log('Launching server', picked.name, command, args.join(' '));

  let child;

  // On Windows prefer spawning through shell to avoid ENOENT/EINVAL for .cmd/.exe wrappers
  if (process.platform === 'win32') {
    // If command is npx, try npm exec fallback string first (npm exec uses npm binary)
    if (command === 'npx') {
      const npmArgs = npmFallbackArgs(args);
      const npmCmdStr = ['npm', ...npmArgs].map(escapeArgForShell).join(' ');
      console.log('Windows: trying `', npmCmdStr, '`');
      try {
        child = runCommandWindows('npm', npmArgs);
      } catch (e) {
        console.error('Windows npm exec attempt failed:', e && e.message ? e.message : String(e));
      }
      if (!child) {
        // fallback to npx via shell
        child = runCommandWindows(command, args);
      }
    } else {
      child = runCommandWindows(command, args);
    }
  } else {
    // Non-Windows: try direct spawn first
    try {
      child = trySpawn(command, args, { stdio: 'inherit', shell: false });
    } catch (err) {
      console.error('Synchronous spawn error:', err && err.message ? err.message : String(err));
      console.log('Falling back to shell spawn');
      try {
        child = spawn([command, ...args].map(escapeArgForShell).join(' '), { stdio: 'inherit', shell: true });
      } catch (e) {
        console.error('Failed to spawn via shell as fallback:', e && e.message ? e.message : String(e));
        process.exit(5);
      }
    }
  }

  if (!child) {
    console.error('Unable to start child process; no child returned');
    process.exit(7);
  }

  // write pid file so user can check status
  const pidPath = pidFilePath(picked.name);
  try {
    writePidFile(pidPath, child.pid || '');
  } catch (e) {
    // ignore
  }

  child.on('close', (code, signal) => {
    console.log('Child process closed. Code:', code, 'Signal:', signal);
    removePidFile(pidPath);
    if (signal) console.log(`Process terminated with signal ${signal}`);
    else console.log(`Process exited with code ${code}`);
    process.exit(code);
  });

  child.on('error', (err) => {
    console.error('Failed to start process (async error):', err && err.message ? err.message : String(err));
    removePidFile(pidPath);
    console.error('Make sure the command is installed and available in PATH (e.g., install Node.js to get npx/npm).');
    process.exit(6);
  });

  // ensure pid file removed if wrapper is killed
  process.on('exit', () => removePidFile(pidPath));
  process.on('SIGINT', () => process.exit(0));
  process.on('SIGTERM', () => process.exit(0));
}

run();
