const { Jimp } = require('jimp');

async function main() {
  for (const size of [16, 48, 128]) {
    const image = new Jimp({ width: size, height: size, color: 0xFF4500FF });
    await image.write(`icons/${size}.png`);
    console.log(`icons/${size}.png written`);
  }
}

main().catch(console.error);
