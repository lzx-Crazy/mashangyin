const content = require('./ccGoldenOut.ejs');
const botSource = require('../../plugin/ccGoldenOut.ejs');

const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '我要出金',
  rtBtn3: 'nav-yiwen'
}


module.exports = layout.init({
  pf
}).run(content({}),'',botSource());