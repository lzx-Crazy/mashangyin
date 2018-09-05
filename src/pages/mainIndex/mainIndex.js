const content = require('./mainIndex.ejs');
const botSource = require('../../plugin/mainIndex.ejs');
const layout = require('../../template/layout.js');
const scrollWall = require('../../template/scrollWall.ejs');
const pf = {
  pageTitle: '',
  ltBtn1: false,
  showTitle: false,
  search: 'nav-search-main',
  rtBtn1: 'nav-right-scan',
  rtBtn2: 'nav-msg-l',
  rtTxt2: '99',
  isFoot: true
}


module.exports = layout.init({
  pf
}).run(content({
  scrollWall: scrollWall({
      w: 750,
      h: 290
  })
}),'',botSource());