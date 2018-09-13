const content = require('./ccConfirmReceive.ejs');
const botSource = require('../../plugin/ccConfirmReceive.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '确认收款',
  
}


module.exports = layout.init({
  pf
}).run(content({}),'',botSource());