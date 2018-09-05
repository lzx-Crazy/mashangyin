const content = require('./lzxconcentrateProducts.ejs');
const botSource = require('../../plugin/lzxconcentrateProducts.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '',
  // ltBtn1: false,
  showTitle: false,
  search: 'nav-search-main',
  rtBtn1: 'nav-right-scan',
  rtBtn2: 'nav-msg-l',
  rtTxt2: '99',
  isFoot: true
}


module.exports = layout.init({
  pf
}).run(content(), '', botSource());