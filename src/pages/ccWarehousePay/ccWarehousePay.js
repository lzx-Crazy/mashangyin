const content = require('./ccWarehousePay.ejs');

const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '仓单支付',
  
}


module.exports = layout.init({
  pf
}).run(content({}),'',);