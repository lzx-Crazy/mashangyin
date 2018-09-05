const content = require('./lzxgeneration.ejs');
const botSource = require('../../plugin/lzxgeneration.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '码单生成中',
}


module.exports = layout.init({
  pf
}).run(content(),'',botSource());