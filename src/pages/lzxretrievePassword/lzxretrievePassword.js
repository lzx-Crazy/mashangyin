const content = require('./lzxretrievePassword.ejs');
const botSource = require('../../plugin/lzxretrievePassword.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '找回密码'
}


module.exports = layout.init({
  pf
}).run(content(),'',botSource());