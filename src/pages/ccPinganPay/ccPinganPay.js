const content = require('./ccPinganPay.ejs');
const botSource = require('../../plugin/ccPinganPay.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '平安支付管理',
  rtBtn3: 'nav-yiwen'
}


module.exports = layout.init({
  pf
}).run(content({}),'',botSource());