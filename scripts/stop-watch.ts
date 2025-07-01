import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const pidFile = path.resolve('.watch.pid');

if (!fs.existsSync(pidFile)) {
  console.log('[INFO] No watcher PID found.');
  process.exit(0);
}

const pid = Number(fs.readFileSync(pidFile, 'utf-8'));
if (!pid || isNaN(pid)) {
  console.error('[ERR] Invalid PID file.');
  process.exit(1);
}

try {
  process.kill(pid);
  console.log(`[INFO] Terminated watcher process PID ${pid}`);
  fs.unlinkSync(pidFile);
} catch (err) {
  console.error(`[ERR] Failed to kill watcher PID ${pid}:`, err);
}
