const content = require('./ccOrderDetails.ejs');
const botSource = require('../../plugin/ccOrderDetails.ejs');
const layout = require('../../template/layout.js');
const pf = {
 
  pageTitle: '订单详情',
}


module.exports = layout.init({
  pf
}).run(content(), '',botSource() );