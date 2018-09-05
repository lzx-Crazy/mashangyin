const content = require('./lzxpersonalData.ejs');
const botSource = require('../../plugin/lzxpersonalData.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '个人资料管理',
  rtBtn1: 'btn-string',
  rtStr1: '保存'
}


module.exports = layout.init({
  pf
}).run(content(),'',botSource());