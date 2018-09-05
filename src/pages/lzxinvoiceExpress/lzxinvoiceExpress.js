const content = require('./lzxinvoiceExpress.ejs');
const botSource = require('../../plugin/lzxinvoiceExpress.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '发票快递管理',
  rtBtn1: 'right-search',
  rtStr1: '搜索'
}


module.exports = layout.init({
  pf
}).run(content(),'',botSource());