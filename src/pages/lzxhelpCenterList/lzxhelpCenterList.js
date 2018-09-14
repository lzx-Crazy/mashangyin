const content = require('./lzxhelpCenterList.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '帮助中心',
  rtBtn3: 'nav-yiwen'
}


module.exports = layout.init({
  pf
}).run(content());