import './index.scss';

import template from './index.html';

export default {
	name: 'FormItemComponentEditor',
	template,

	props: {
		component: Object
	},

	data() {
		return {
			form: this.component.attrs
		};
	}
};
