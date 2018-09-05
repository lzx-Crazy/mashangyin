const content = require('./lzxconcentrateManagement.ejs');
const botSource = require('../../plugin/lzxconcentrateManagement.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '订单中心',
  isFoot: true,
  switchStr: '销售',
  switchBtn: 'switchBtn',
  ltBtn1: 'lt-seca'
}


module.exports = layout.init({
  pf
}).run(content(),'',botSource());