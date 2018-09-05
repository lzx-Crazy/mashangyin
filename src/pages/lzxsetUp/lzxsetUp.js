const content = require('./lzxsetUp.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '设置'
}


module.exports = layout.init({
  pf
}).run(content());