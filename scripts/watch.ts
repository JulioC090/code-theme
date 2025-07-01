import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const entry = path.resolve('scripts/generate.ts');
const pidFile = path.resolve('.watch.pid');

console.log('[INFO] Starting Watching Mode');

if (fs.existsSync(pidFile)) {
  console.log('[ERR]: There is already an instance of watch');
  console.log('[INFO] Finishing Watching Mode');
  process.exit();
}

try {
  const child = spawn('tsx', ['watch', entry], {
    stdio: ['inherit', 'pipe', 'pipe'],
    shell: true,
  });

  fs.writeFileSync(pidFile, String(child.pid), { encoding: 'utf-8' });

  child.on('spawn', () => {
    console.log('[INFO] Watching for file change');
  });

  child.stdout.on('data', () => {
    console.clear();
    console.log('[INFO] Watching for file change');
  });

  child.stderr.on('data', (data) => {
    console.log(`[ERR]: ${data}`);
  });

  child.on('exit', (code) => {
    console.log(`[INFO] Process end with ${code} code`);
    process.exit();
  });
} catch {
  if (fs.existsSync(pidFile)) fs.unlinkSync(pidFile);
  console.log('[ERR]: Error starting process');
}

process.on('exit', () => {
  if (fs.existsSync(pidFile)) fs.unlinkSync(pidFile);
  console.log('[INFO] Finishing Watching Mode');
});
