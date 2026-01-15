#!/usr/bin/env node
// Останавливает MCP-сервер на основе PID-файла mcp-<server>.pid

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

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

function killProcess(pid) {
  if (process.platform === 'win32') {
    try {
      execSync(`taskkill /PID ${pid} /T /F`);
      return true;
    } catch (e) {
      return false;
    }
  } else {
    try {
      process.kill(pid, 'SIGTERM');
      return true;
    } catch (e) {
      try { process.kill(pid, 'SIGKILL'); return true; } catch (e2) { return false; }
    }
  }
}

function main() {
  const serverArgIndex = process.argv.indexOf('--server');
  const serverName = serverArgIndex !== -1 ? process.argv[serverArgIndex + 1] : 'microsoft/playwright-mcp';
  const pidPath = pidFilePath(serverName);
  const pid = readPid(pidPath);

  if (!pid) {
    console.error(`No PID file found at ${pidPath}`);
    process.exit(1);
  }

  if (!isProcessRunning(pid)) {
    console.error(`Process ${pid} is not running. Removing stale PID file.`);
    try { fs.unlinkSync(pidPath); } catch (e) {}
    process.exit(2);
  }

  const ok = killProcess(pid);
  if (!ok) {
    console.error(`Failed to stop process ${pid}. You may need elevated privileges.`);
    process.exit(3);
  }

  // Удаляем PID-файл
  try { fs.unlinkSync(pidPath); } catch (e) {}
  console.log(`Stopped process ${pid} and removed PID file ${pidPath}`);
  process.exit(0);
}

main();

