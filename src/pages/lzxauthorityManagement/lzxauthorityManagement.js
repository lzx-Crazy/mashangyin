const content = require('./lzxauthorityManagement.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '权限管理',
  rtBtn3: 'nav-yiwen'
}


module.exports = layout.init({
  pf
}).run(content());