const content = require('./ccFillQuotation.ejs');
const botSource = require('../../plugin/ccFillQuotation.ejs');
const layout = require('../../template/layout.js');
const keypad = require('../../template/tmp-keypad.ejs');
const pf = {
  pageTitle: '议价流程',
  rtBtn3: 'nav-yiwen'
}


module.exports = layout.init({
  pf
}).run(content({keypad}),'',botSource());