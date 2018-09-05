const content = require('./lzxapplicationOpening.ejs');
const botSource = require('../../plugin/lzxapplicationOpening.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '申请开票',
  rtBtn3: 'nav-yiwen'
}


module.exports = layout.init({
  pf
}).run(content(),'',botSource());