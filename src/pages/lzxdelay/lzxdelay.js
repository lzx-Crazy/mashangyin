const content = require('./lzxdelay.ejs');
const botSource = require('../../plugin/lzxdelay.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '委托函延期',
  rtBtn3: 'nav-yiwen'
}


module.exports = layout.init({
  pf
}).run(content(),'',botSource());