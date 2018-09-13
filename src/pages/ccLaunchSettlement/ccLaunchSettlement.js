const content = require('./ccLaunchSettlement.ejs');
const botSource = require('../../plugin/ccLaunchSettlement.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '费用确认',
  
}


module.exports = layout.init({
  pf
}).run(content({}),'',botSource());