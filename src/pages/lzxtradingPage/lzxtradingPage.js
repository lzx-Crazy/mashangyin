const content = require('./lzxtradingPage.ejs');
const tcm = require('../../template/tmp-negotiated.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '提交报价',
  rtBtn3: 'nav-yiwen'
}


module.exports = layout.init({
  pf
}).run(content({tcm}));