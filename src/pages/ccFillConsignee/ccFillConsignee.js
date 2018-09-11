const content = require('./ccFillConsignee.ejs');
const botSource = require('../../plugin/ccFillConsignee.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '委托提货',
  rtBtn3: 'nav-yiwen'
  
}


module.exports = layout.init({
  pf
}).run(content({}),'',botSource());