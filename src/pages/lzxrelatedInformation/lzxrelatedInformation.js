const content = require('./lzxrelatedInformation.ejs');
const botSource = require('../../plugin/lzxrelatedInformation.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '查看相关订单信息'
}


module.exports = layout.init({
  pf
}).run(content(),'',botSource());