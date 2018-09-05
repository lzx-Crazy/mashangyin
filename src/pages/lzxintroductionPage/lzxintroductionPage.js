const content = require('./lzxintroductionPage.ejs');
const botSource = require('../../plugin/lzxintroductionPage.ejs');
const layout = require('../../template/layout.js');
const pf = {
  isHead: false
}


module.exports = layout.init({
  pf
}).run(content(),'',botSource());