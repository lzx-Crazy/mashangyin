const content = require('./ccTwoSettlement.ejs');
const botSource = require('../../plugin/ccTwoSettlement.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '费用确认',
  
}


module.exports = layout.init({
  pf
}).run(content({}),'',botSource());