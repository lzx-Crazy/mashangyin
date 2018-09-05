const content = require('./lzxcontactUs.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '联系我们',
  isFoot: true,
  rtBtn3: 'nav-yiwen'
}


module.exports = layout.init({
  pf
}).run(content());