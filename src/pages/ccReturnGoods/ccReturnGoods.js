const content = require('./ccReturnGoods.ejs');

const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '退货申请',
  rtBtn3: 'nav-yiwen'
}


module.exports = layout.init({
  pf
}).run(content({}),'',);