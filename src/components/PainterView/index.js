import template from './index.html';

export default {
	name: 'PainterView',
	template,
	props: {
		pageConfig: Object
	},
	created() {
		/* eslint no-console: "off" */
		// console.log(this.pageConfig);
	}
};
