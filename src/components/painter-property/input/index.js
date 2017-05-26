// import './index.scss';

import template from './../editor.html';

export default {
	name: 'InputComponentEditor',
	template,

	props: {
		component: Object
	},

	data() {
		return {
			name: '输入框',
			form: this.component.attrs
		};
	}
};
