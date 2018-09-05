const content = require('./lzxcodeConfirmation.ejs');
const botSource = require('../../plugin/lzxcodeConfirmation.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '码单确认',
  rtBtn3: 'nav-yiwen'
}


module.exports = layout.init({
  pf
}).run(content(),'',botSource());