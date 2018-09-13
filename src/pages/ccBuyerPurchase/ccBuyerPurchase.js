const content = require('./ccBuyerPurchase.ejs');
const botSource = require('../../plugin/ccBuyerPurchase.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '采购大厅',
  rtBtn3: 'nav-yiwen'
}


module.exports = layout.init({
  pf
}).run(content(),'',botSource());