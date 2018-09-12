const content = require('./lzxonlineSignature.ejs');
const botSource = require('../../plugin/lzxonlineSignature.ejs');
const tcm = require('../../template/tmp-negotiated.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '合同'
}


module.exports = layout.init({
  pf
}).run(content({tcm}),'',botSource());