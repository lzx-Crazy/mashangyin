const content = require('./lzxcodePDF.ejs');
const botSource = require('../../plugin/lzxcodePDF.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: 'PDF查看'
}


module.exports = layout.init({
  pf
}).run(content(),'',botSource());