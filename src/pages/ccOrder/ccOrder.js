const content = require('./ccOrder.ejs');
const botSource = require('../../plugin/ccOrder.ejs');
const layout = require('../../template/layout.js');
const pf = {
  ltBtn1: 'lt-seca',
  pageTitle: '订单中心',
  switchStr: '销售',
  switchBtn: 'switchBtn',
  isFoot: true
}


module.exports = layout.init({
  pf
}).run(content(), '', botSource());