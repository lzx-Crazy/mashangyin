const layout = require('./layout.ejs');
const header = require('./header.ejs');
const footer = require('./footer.ejs');

let pf = {
	pageTitle: "马上银",
	ltBtn1: 'back-to',
	ltStr1: '返回',
	ltBtn2: false,
	ltStr2: '',
	rtBtn1: false,
	rtStr1: '',
	rtBtn2: false,
	rtStr2: '',
	rtBtn3: false,
	rtStr3: '有疑问？',
	search: false,
	searchStr: '请输入地区、品名、价格、仓库等搜索',
	headerBg: 'bg-normal',
	showTitle: true,
	isHead: true,
	isFoot: false,
	footType: 'account', // 默认 account
	navList:false,
	rtTxt2:false,
	switchBtn: '',
	switchStr: '',
}

const moduleExports = {
	/* 处理需要在公共页面用到的参数 */
	init(res) {
		for (let ev in res.pf) {
			pf[ev] = res.pf[ev]
		}
		return this;
	},

	/* 拼接公共组件与实际内容 */
	run(content, topsource, botsource) {
		let ctopsource = !topsource ? '' : topsource;
		let cbotsource = !botsource ? '' : botsource;
		let renderData = {
			pageTitle: pf.pageTitle,
			topsource: ctopsource,
			botsource: cbotsource,
			header: header(pf),
			footer: footer(pf),
			content,
			pf
		}
		console.log(renderData)
		return layout(renderData);
	}
}

module.exports = moduleExports