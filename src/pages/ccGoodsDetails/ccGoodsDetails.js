const content = require('./ccGoodsDetails.ejs');

const layout = require('../../template/layout.js');
const pf = {
 
  pageTitle: '商品详情',
}


module.exports = layout.init({
  pf
}).run(content(), '',);