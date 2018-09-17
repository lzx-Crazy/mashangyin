const content = require('./ccToRegister.ejs');
const botSource = require('../../plugin/ccToRegister.ejs');
const keypad = require('../../template/tmp-keypad.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '我要挂单-填写信息',
  rtBtn3: 'nav-yiwen'
}


module.exports = layout.init({
  pf
}).run(content({keypad}),'',botSource());