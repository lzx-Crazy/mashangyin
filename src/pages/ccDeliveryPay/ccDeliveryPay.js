const content = require('./ccDeliveryPay.ejs');

const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '支付',
  
}


module.exports = layout.init({
  pf
}).run(content({}),'',);