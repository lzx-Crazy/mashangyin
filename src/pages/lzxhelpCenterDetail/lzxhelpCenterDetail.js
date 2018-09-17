const content = require('./lzxhelpCenterDetail.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '法律声明'
}


module.exports = layout.init({
  pf
}).run(content());