const content = require('./ccFundManagement.ejs');
const botSource = require('../../plugin/ccFundManagement.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '资金明细',
  rtBtn3: 'nav-yiwen'
}


module.exports = layout.init({
  pf
}).run(content({}),'',botSource());