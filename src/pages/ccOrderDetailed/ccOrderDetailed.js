const content = require('./ccOrderDetailed.ejs');
const botSource = require('../../plugin/ccOrderDetailed.ejs');
const layout = require('../../template/layout.js');
const pf = {
 
  pageTitle: '订单明细',
}


module.exports = layout.init({
  pf
}).run(content(), '', botSource());