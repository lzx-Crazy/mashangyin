const content = require('./lzxconfirmationReceivables.ejs');
const botSource = require('../../plugin/lzxconfirmationReceivables.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '上传凭证',
}

module.exports = layout.init({
  pf
}).run(content(), '', botSource());