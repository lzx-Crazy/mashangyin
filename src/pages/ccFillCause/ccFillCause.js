const content = require('./ccFillCause.ejs');

const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '填写审核原因',
  
}


module.exports = layout.init({
  pf
}).run(content({}),'',);