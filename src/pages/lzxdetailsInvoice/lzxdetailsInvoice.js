const content = require('./lzxdetailsInvoice.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '发票详情',
  rtBtn3: 'nav-yiwen'
}


module.exports = layout.init({
  pf
}).run(content());