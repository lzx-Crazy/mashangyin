const content = require('./ccUnionPay.ejs');

const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '银联支付',
}


module.exports = layout.init({
  pf
}).run(content({}),'',);