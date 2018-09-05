const content = require('./lzxjktransactionInformation.ejs');
const botSource = require('../../plugin/lzxjktransactionInformation.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '最新成交信息',
  rtBtn3: 'nav-yiwen'
}


module.exports = layout.init({
  pf
}).run(content(),'',botSource());