const content = require('./ccRefundableDetails.ejs');

const layout = require('../../template/layout.js');
const pf = {
 
  pageTitle: '退换预付款详情',
}


module.exports = layout.init({
  pf
}).run(content(), '',);