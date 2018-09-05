const content = require('./lzxenterpriseIntroduction.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '企业介绍',
  isFoot: true,
  rtBtn3: 'nav-yiwen',
  rtStr3: '有疑问？'
}


module.exports = layout.init({
  pf
}).run(content());