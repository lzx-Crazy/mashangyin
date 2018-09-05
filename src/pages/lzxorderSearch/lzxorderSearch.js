const content = require('./lzxorderSearch.ejs');
const botSource = require('../../plugin/lzxorderSearch.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '',
  showTitle: false,
  search: 'nav-search-main'
}


module.exports = layout.init({
  pf
}).run(content(),'',botSource());