const content = require('./ccCheckAccount.ejs');
const botSource = require('../../plugin/ccCheckAccount.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '结算详情',
  
}


module.exports = layout.init({
  pf
}).run(content({}),'',botSource());