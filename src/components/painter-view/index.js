import './painter-view.scss';
import template from './painter-view.html';

export default {
	name: 'PainterView',
	template,
	props: {
		pageConfig: Object
	},
	data() {
		return {
			query: {
				name: '',
				address: '',
				startDate: '',
				endDate: new Date()
			}
		};
	},
	created() {
		/* eslint no-console: "off" */
		console.log(this.pageConfig);
	}
};
