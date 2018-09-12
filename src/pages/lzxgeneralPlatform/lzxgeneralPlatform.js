const content = require('./lzxgeneralPlatform.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '马上银产业互联网交易总则'
}


module.exports = layout.init({
  pf
}).run(content());