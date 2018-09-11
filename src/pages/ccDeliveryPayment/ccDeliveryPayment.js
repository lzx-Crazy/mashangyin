const content = require('./ccDeliveryPayment.ejs');

const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '线下支付',
  rtBtn3: 'nav-yiwen'
}


module.exports = layout.init({
  pf
}).run(content({}),'',);