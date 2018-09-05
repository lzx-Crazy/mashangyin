const content = require('./lzxinformationDetails.ejs');
const layout = require('../../template/layout.js');
const nifoDetails = require('../../template/tem-page-zxetails.ejs');
const pf = {
  pageTitle: '行情资讯'
}


module.exports = layout.init({
  pf
}).run(content({
  nifoDetails
}));