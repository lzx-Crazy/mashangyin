const content = require('./lzxsubmitNegotiated.ejs');
const botSource = require('../../plugin/lzxsubmitNegotiated.ejs');
const tcm = require('../../template/tmp-negotiated.ejs');
const keypad = require('../../template/tmp-keypad.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '提交议价',
  rtBtn3: 'nav-yiwen'
}


module.exports = layout.init({
  pf
}).run(content({tcm,keypad}),'',botSource());