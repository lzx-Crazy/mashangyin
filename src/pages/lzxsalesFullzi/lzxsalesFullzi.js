const content = require('./lzxsalesFullzi.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '合同详情'
}

module.exports = layout.init({
  pf
}).run(content());