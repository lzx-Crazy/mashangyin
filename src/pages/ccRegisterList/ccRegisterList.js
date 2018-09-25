const content = require('./ccRegisterList.ejs');
const botSource = require('../../plugin/ccRegisterList.ejs');

const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '挂单列表',
  rtBtn1: 'qgdBtn',
  rtStr1: '去挂单',
  rtBtn2: 'nav-xiu',
  rtStr2: '修改',

}


module.exports = layout.init({
  pf
}).run(content({}),'',botSource());