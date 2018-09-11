const content = require('./ccSettlementDetails.ejs');
const botSource = require('../../plugin/ccSettlementDetails.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '结算详情',
  
}


module.exports = layout.init({
  pf
}).run(content({}),'',botSource());