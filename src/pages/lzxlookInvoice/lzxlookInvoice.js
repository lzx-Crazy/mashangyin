const content = require('./lzxlookInvoice.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '查看发票信息',
}

module.exports = layout.init({
  pf
}).run(content());