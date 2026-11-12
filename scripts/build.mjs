import { mkdir, copyFile, cp } from 'node:fs/promises';
await mkdir('dist/vendor', { recursive: true });
for (const file of ['index.html', 'styles.css', 'script.js']) await copyFile(file, `dist/${file}`);
await cp('assets', 'dist/assets', { recursive: true });
for (const file of ['gsap.min.js', 'ScrollTrigger.min.js']) await copyFile(`node_modules/gsap/dist/${file}`, `dist/vendor/${file}`);
console.log('Static site built in dist/');
