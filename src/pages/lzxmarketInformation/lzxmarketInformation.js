const content = require('./lzxmarketInformation.ejs');
const botSource = require('../../plugin/lzxmarketInformation.ejs');
const layout = require('../../template/layout.js');
const tcm = require('../../template/title-count-more.ejs');
const pf = {
  pageTitle: '行情信息',
  isFoot: true
}

module.exports = layout.init({
  pf
}).run(content({
  tcm
}),'',botSource());