const content = require('./ccGolden.ejs');

const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '我要入金',
  rtBtn3: 'nav-yiwen'
}


module.exports = layout.init({
  pf
}).run(content({}),'',);