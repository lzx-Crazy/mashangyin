const content = require('./lzxaddInvoice.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '新增发票信息',
}

module.exports = layout.init({
  pf
}).run(content());