
const content = require('./lzxsettlementInformation.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '查看结算信息',
  rtBtn3: 'nav-yiwen'
}

module.exports = layout.init({
  pf
}).run(content());