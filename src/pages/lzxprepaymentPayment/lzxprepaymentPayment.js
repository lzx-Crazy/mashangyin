const content = require('./lzxprepaymentPayment.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '支付',
  rtBtn3: 'nav-yiwen'
}


module.exports = layout.init({
  pf
}).run(content());