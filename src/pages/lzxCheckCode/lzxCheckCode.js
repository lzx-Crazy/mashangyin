const content = require('./lzxCheckCode.ejs');
const botSource = require('../../plugin/lzxCheckCode.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '查看码单',
}


module.exports = layout.init({
  pf
}).run(content({}),'',botSource());