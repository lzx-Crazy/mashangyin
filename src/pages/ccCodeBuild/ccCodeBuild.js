const content = require('./ccCodeBuild.ejs');

const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '码单生成中',
  rtBtn3: 'nav-yiwen'
}


module.exports = layout.init({
  pf
}).run(content(),'',);