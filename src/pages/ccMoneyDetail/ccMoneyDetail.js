const content = require('./ccMoneyDetail.ejs');
const botSource = require('../../plugin/ccMoneyDetail.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '出入金明细',
  rtBtn3: 'nav-yiwen'
}


module.exports = layout.init({
  pf
}).run(content({}),'',botSource());