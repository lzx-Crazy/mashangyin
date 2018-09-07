const content = require('./ccBuyerDelivery.ejs');
//const botSource = require('../../plugin/ccBuyerDelivery.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '提货申请信息',
  rtBtn3: 'nav-yiwen'
}


module.exports = layout.init({
  pf
}).run(content({}),'',);