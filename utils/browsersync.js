/**
 * BrowserSyncの設定
 * @constructor
 */
const figlet = require('figlet');

module.exports = {
  files: './public',
  server: './public/',
  open: false,
};

figlet('Start Development', (err, data) => {
  if (err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
  }
  console.log(data);
});
