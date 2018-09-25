const content = require('./lzxsigningSuccess.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '委托函签署成功'
}


module.exports = layout.init({
  pf
}).run(content());