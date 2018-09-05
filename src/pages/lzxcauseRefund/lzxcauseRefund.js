const content = require('./lzxcauseRefund.ejs');
const botSource = require('../../plugin/lzxcauseRefund.ejs');
const tcm = require('../../template/title-count-more.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '退票申请'
}


module.exports = layout.init({
  pf
}).run(content({tcm}),'',botSource());