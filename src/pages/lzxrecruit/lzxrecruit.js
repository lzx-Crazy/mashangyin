const content = require('./lzxrecruit.ejs');
const botSource = require('../../plugin/lzxrecruit.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '招贤纳士',
  isFoot: true,
  rtBtn3: 'nav-yiwen'
}


module.exports = layout.init({
  pf
}).run(content(),'',botSource());