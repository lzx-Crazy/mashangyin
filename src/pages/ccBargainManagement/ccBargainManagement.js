const content = require('./ccBargainManagement.ejs');
const botSource = require('../../plugin/ccBargainManagement.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '议价管理',
  switchStr: '销售',
  switchBtn: 'switchBtn',
}


module.exports = layout.init({
  pf
}).run(content(),'',botSource());