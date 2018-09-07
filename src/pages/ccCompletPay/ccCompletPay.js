const content = require('./ccCompletPay.ejs');

const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '部分货款支付',
  rtBtn3: 'nav-yiwen'
}


module.exports = layout.init({
  pf
}).run(content({}),'',);