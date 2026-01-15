#!/usr/bin/env node
// Скрипт проверяет статус MCP-сервера по PID-файлу mcp-<server>.pid

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Поддержка принудительного флага цвета: --color / --no-color
const args = process.argv.slice(2);
const forceColorOn = args.includes('--color');
const forceColorOff = args.includes('--no-color') || !!process.env.NO_COLOR;

// Добавляем простые утилиты для цвета в терминале без внешних зависимостей
let supportsColor = false;
if (forceColorOn) supportsColor = true;
else if (forceColorOff) supportsColor = false;
else supportsColor = (typeof process.stdout !== 'undefined' && !!process.stdout.isTTY);

const COLOR_CODES = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
};

function color(text, colorName) {
  if (!supportsColor || !colorName || !COLOR_CODES[colorName]) return text;
  return COLOR_CODES[colorName] + text + COLOR_CODES.reset;
}

function pidFilePath(serverName) {
  const safe = (serverName || 'microsoft_playwright_mcp').replace(/[^a-z0-9_.-]/gi, '_');
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
      // use tasklist to check
      const out = execSync(`tasklist /FI "PID eq ${pid}" /NH`, { encoding: 'utf8' });
      return out && !/No tasks are running/.test(out) && !/INFO: No tasks are running/.test(out);
    } else {
      // POSIX: kill 0
      process.kill(pid, 0);
      return true;
    }
  } catch (e) {
    return false;
  }
}

function main() {
  const serverArgIndex = process.argv.indexOf('--server');
  const serverName = serverArgIndex !== -1 ? process.argv[serverArgIndex + 1] : 'microsoft/playwright-mcp';
  const pidPath = pidFilePath(serverName);
  const pid = readPid(pidPath);
  if (!pid) {
    console.log(color('No PID file found at ' + pidPath, 'yellow'));
    console.log(color('Server appears to be not running (or was started externally).', 'yellow'));
    console.log(color('Tip: run with --color to force colored output or --no-color to disable.', 'blue'));
    process.exit(1);
  }

  const running = isProcessRunning(pid);
  if (running) {
    console.log(color(`Server ${serverName} is running (PID: ${pid}).`, 'green'));
    process.exit(0);
  } else {
    console.log(color(`PID file exists but process ${pid} is not running.`, 'red'));
    console.log(color(`You may remove stale PID file: ${pidPath}`, 'yellow'));
    process.exit(2);
  }
}

main();
