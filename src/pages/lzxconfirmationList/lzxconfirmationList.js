const content = require('./lzxconfirmationList.ejs');
const botSource = require('../../plugin/lzxconfirmationList.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '开票确认清单',
  isFoot: false,
  rtBtn1: 'nav-xiu',
  rtStr1: '编辑'
}


module.exports = layout.init({
  pf
}).run(content(),'',botSource());