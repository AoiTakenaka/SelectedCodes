/**
 * 画像を圧縮するタスク
 * @constructor
 */
const imageCompress = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminSvgo = require('imagemin-svgo');
const figlet = require('figlet');

const outputPath = 'public/img';

(async () => {
  console.log(`
画像圧縮を開始しました...
  `)
  const files = await imageCompress(['src/img/**/*.{jpg,png}'], {
    destination: outputPath,
    plugins: [
      imageminMozjpeg({ quality: 80 }),
      imageminPngquant({
        quality: [0.6, 0.8]
      }),
      imageminGifsicle(),
      imageminSvgo()
    ],
  });
  console.log(`${files.map((item) => item.destinationPath.split(`${outputPath}/`)[1])}
================================
${files.length}ファイル圧縮成功しました！
  `);
  figlet('Success Compressed!!!', (err, data) => {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
    console.log(data)
  });
})();
