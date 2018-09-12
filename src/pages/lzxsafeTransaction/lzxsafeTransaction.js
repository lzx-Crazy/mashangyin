const content = require('./lzxsafeTransaction.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '平安支付',
}


module.exports = layout.init({
  pf
}).run(content());