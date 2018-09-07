const content = require('./ccPlatformPrice.ejs');
const botSource = require('../../plugin/ccPlatformPrice.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '平台点价',
  rtBtn3: 'nav-yiwen'
}


module.exports = layout.init({
  pf
}).run(content({}),'',botSource());