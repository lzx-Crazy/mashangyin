const content = require('./lzxpersonalCenter.ejs');
const layout = require('../../template/layout.js');
const tcm = require('../../template/title-count-more.ejs');
const pf = {
  pageTitle: '个人中心',
  isHead: false,
  isFoot: true
}


module.exports = layout.init({
  pf
}).run(content({
  tcm
}));