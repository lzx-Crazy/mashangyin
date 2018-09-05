const content = require('./lzxcontrolInvoices.ejs');
const botSource = require('../../plugin/lzxcontrolInvoices.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '发票管理',
  isFoot: false,
  rtBtn1: 'nav-xiu',
  rtStr1: '去开发票'
}


module.exports = layout.init({
  pf
}).run(content(),'',botSource());