const content = require('./ccFinancialVoucher.ejs');
const botSource = require('../../plugin/ccFinancialVoucher.ejs');
const voucher = require('../../template/tem-financia-voucher.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '财务凭证管理',
  rtBtn3: 'nav-yiwen'
}


module.exports = layout.init({
  pf
}).run(content({voucher}),'',botSource());