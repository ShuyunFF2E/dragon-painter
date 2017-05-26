import './index.scss';

import template from './../editor.html';

export default {
	name: 'FormItemComponentEditor',
	template,

	props: {
		component: Object
	},

	data() {
		return {
			name: '表单域',
			form: this.component.attrs
		};
	}
};
