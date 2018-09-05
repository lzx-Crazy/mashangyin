const content = require('./lzxopenOrder.ejs');
const botSource = require('../../plugin/lzxopenOrder.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '可开票订单',
  isFoot: false,
  rtBtn1: 'nav-xiu',
  rtStr1: '查看开票信息'
}


module.exports = layout.init({
  pf
}).run(content(),'',botSource());