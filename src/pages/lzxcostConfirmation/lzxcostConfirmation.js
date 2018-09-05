const content = require('./lzxcostConfirmation.ejs');
const botSource = require('../../plugin/lzxcostConfirmation.ejs');
const tcm = require('../../template/title-count-more.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '费用确认'
}


module.exports = layout.init({
  pf
}).run(content({tcm}),'',botSource());