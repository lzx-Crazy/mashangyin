const content = require('./ccSetPassword.ejs');
const botSource = require('../../plugin/ccSetPassword.ejs');

const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '设置支付密码',
  rtBtn3: 'nav-yiwen'
}


module.exports = layout.init({
  pf
}).run(content({}),'',botSource());