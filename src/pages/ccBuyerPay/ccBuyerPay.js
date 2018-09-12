const content = require('./ccBuyerPay.ejs');

const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '支付',
  
}


module.exports = layout.init({
  pf
}).run(content({}),'',);