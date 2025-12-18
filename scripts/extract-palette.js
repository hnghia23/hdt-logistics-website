// Simple palette extractor using sharp
// Usage: npm install sharp && node scripts/extract-palette.js

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imgPath = path.join(__dirname, '..', 'public', 'logo.png');

if (!fs.existsSync(imgPath)) {
  console.error('logo.png not found at', imgPath);
  process.exit(2);
}

async function avgColor() {
  try {
    const buffer = await sharp(imgPath).resize(1, 1).raw().toBuffer();
    const [r, g, b, a] = buffer;
    const hex = rgbToHex(r, g, b);
    console.log('Average color (resize 1x1):', hex);
  } catch (err) {
    console.error(err);
  }
}

function rgbToHex(r, g, b) {
  return (
    '#' + [r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('')
  );
}

async function palette() {
  try {
    const { data, info } = await sharp(imgPath).resize(20, 20).raw().toBuffer({ resolveWithObject: true });
    const counts = {};
    for (let i = 0; i < data.length; i += info.channels) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const hex = rgbToHex(r, g, b);
      counts[hex] = (counts[hex] || 0) + 1;
    }
    const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    console.log('Top colors:');
    entries.slice(0, 6).forEach(([hex, count]) => console.log(hex, count));
  } catch (err) {
    console.error(err);
  }
}

(async () => {
  await avgColor();
  await palette();
})();
