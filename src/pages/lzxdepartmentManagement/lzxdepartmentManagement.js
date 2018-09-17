const content = require('./lzxdepartmentManagement.ejs');
const botSource = require('../../plugin/lzxdepartmentManagement.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '部门管理'
}


module.exports = layout.init({
  pf
}).run(content(),'',botSource());