import './painter-view.scss';
import template from './painter-view.html';

export default {
	name: 'PainterView',
	template,
	props: {
		pageConfig: Array
	},
	created() {
		/* eslint no-console: "off" */
		// console.log(this.pageConfig);
	}
};
