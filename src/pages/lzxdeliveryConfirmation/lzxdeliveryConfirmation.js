const content = require('./lzxdeliveryConfirmation.ejs');
const botSource = require('../../plugin/lzxdeliveryConfirmation.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '提货信息确认',
  rtBtn3: 'nav-yiwen'
}


module.exports = layout.init({
  pf
}).run(content(),'',botSource());