const content = require('./ccTransaceDetail.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '交易明细',
  rtBtn3: 'nav-yiwen'
}


module.exports = layout.init({
  pf
}).run(content({}),'',);