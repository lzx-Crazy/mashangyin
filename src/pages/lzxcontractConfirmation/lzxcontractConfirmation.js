const content = require('./lzxcontractConfirmation.ejs');
const botSource = require('../../plugin/lzxcontractConfirmation.ejs');
const tcm = require('../../template/tmp-negotiated.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '购销合同'
}


module.exports = layout.init({
  pf
}).run(content({tcm}),'',botSource());