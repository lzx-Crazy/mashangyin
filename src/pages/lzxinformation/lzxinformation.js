const content = require('./lzxinformation.ejs');
const botSource = require('../../plugin/lzxinformation.ejs');
const layout = require('../../template/layout.js');
const tcm = require('../../template/title-count-more.ejs');
const zixun = require('../../template/tem-page-zixun.ejs');
const pf = {
  pageTitle: '资讯',
  isFoot: true
}


module.exports = layout.init({
  pf
}).run(content({
  tcm,
  zixun: zixun()
}),'',botSource());