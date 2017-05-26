// import './index.scss';

import template from './../editor.html';

export default {
	name: 'InputComponentEditor',
	template,

	props: {
		// labelName: String,
		// placeholder: String,
		// vModel: String

		component: Object
	},

	data() {
		return {
			name: '输入框',
			form: this.component.attrs
		};
	}
};
