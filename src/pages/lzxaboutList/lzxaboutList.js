const content = require('./lzxaboutList.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '',
  showTitle: false,
  isHead: false
}


module.exports = layout.init({
  pf
}).run(content());