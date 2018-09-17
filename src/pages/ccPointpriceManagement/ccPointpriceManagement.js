const content = require('./ccPointpriceManagement.ejs');
const botSource = require('../../plugin/ccPointpriceManagement.ejs');
const pointmanage = require('../../template/tem-pointprice-manage.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '点价审核管理',
  rtBtn3: 'nav-yiwen'
}


module.exports = layout.init({
  pf
}).run(content({pointmanage}),'',botSource());