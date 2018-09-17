const content = require('./ccSecuritySetting.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '安全管理',
  rtBtn3: 'nav-yiwen'
}


module.exports = layout.init({
  pf
}).run(content({}),'',);