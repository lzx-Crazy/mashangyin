const content = require('./ccApplicateDelivery.ejs');
const botSource = require('../../plugin/ccApplicateDelivery.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '提货信息确认',
  rtBtn3: 'nav-yiwen'
}


module.exports = layout.init({
  pf
}).run(content({}),'',botSource());