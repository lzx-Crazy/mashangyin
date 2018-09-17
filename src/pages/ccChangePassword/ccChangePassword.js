const content = require('./ccChangePassword.ejs');
const botSource = require('../../plugin/ccChangePassword.ejs');

const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '修改支付密码',
  rtBtn3: 'nav-yiwen'
}


module.exports = layout.init({
  pf
}).run(content({}),'',botSource());