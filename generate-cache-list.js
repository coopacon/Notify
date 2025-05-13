const fs = require('fs');
const path = require('path');

const BASE_DIR = './';
const TARGET_DIRS = [
  'js/widgets',
  'style',
  'js',
  'assets/icons',
];
const STATIC_FILES = [
  'index.html',
  'manifest.json',
  'js/router.js', // optional
];

let filesToCache = new Set();

function collectFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectFiles(fullPath);
    } else if (entry.isFile()) {
      const relativePath = fullPath.replace(BASE_DIR, './').replace(/\\/g, '/');
      filesToCache.add(relativePath);
    }
  }
}

TARGET_DIRS.forEach(collectFiles);
STATIC_FILES.forEach(file => filesToCache.add('./' + file));

const sorted = [...filesToCache].sort();
const cacheList = `const FILES_TO_CACHE = [\n  ${sorted.map(f => `'${f}'`).join(',\n  ')}\n];`;

const serviceWorkerPath = './service-worker.js';
let swContent = fs.readFileSync(serviceWorkerPath, 'utf-8');

swContent = swContent.replace(
  /const FILES_TO_CACHE = \[[\s\S]*?\];/,
  cacheList
);

fs.writeFileSync(serviceWorkerPath, swContent);
console.log('✅ FILES_TO_CACHE updated in service-worker.js');