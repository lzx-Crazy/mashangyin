const content = require('./ccToReview.ejs');

const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '我要复核',
  rtBtn3: 'nav-yiwen'
}


module.exports = layout.init({
  pf
}).run(content({}),'',);