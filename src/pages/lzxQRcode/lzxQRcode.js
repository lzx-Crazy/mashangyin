const content = require('./lzxQRcode.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '委托函二维码'
}

module.exports = layout.init({
  pf
}).run(content());