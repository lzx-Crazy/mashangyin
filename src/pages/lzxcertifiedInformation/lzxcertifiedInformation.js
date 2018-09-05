const content = require('./lzxcertifiedInformation.ejs');
const botSource = require('../../plugin/lzxcertifiedInformation.ejs');
const tcm = require('../../template/title-count-more.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '企业已认证资料',
  isFoot: true,
  rtBtn1: 'nav-xiu',
  rtStr1: '修改'
}


module.exports = layout.init({
  pf
}).run(content({tcm}),'',botSource());