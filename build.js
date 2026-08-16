const fs = require('fs');
const path = require('path');

const browser = process.argv[2];

if (browser !== 'chrome') {
  console.error('Usage: node build.js chrome');
  process.exit(1);
}

const distDir = path.join('dist', browser);

fs.rmSync(distDir, { recursive: true, force: true });
fs.mkdirSync(path.join(distDir, 'icons'), { recursive: true });

function copyDir(src, dest) {
  fs.readdirSync(src).forEach(file => {
    fs.copyFileSync(path.join(src, file), path.join(dest, file));
  });
}

copyDir('src/shared', distDir);
fs.copyFileSync(path.join('src', browser, 'manifest.json'), path.join(distDir, 'manifest.json'));
copyDir('icons', path.join(distDir, 'icons'));

console.log(`Built ${browser} extension → ${distDir}/`);
