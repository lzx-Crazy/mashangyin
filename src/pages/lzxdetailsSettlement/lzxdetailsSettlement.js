const content = require('./lzxdetailsSettlement.ejs');
const botSource = require('../../plugin/lzxdetailsSettlement.ejs');
const tcm = require('../../template/title-count-more.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '结算详情'
}


module.exports = layout.init({
  pf
}).run(content({tcm}),'',botSource());