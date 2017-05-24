import './index.scss';

import template from './index.html';

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
		// return {
		// 	form: {
		// 		labelName: this.labelName,
		// 		placeholder: this.placeholder,
		// 		vModel: this.vModel
		// 	}
		// };

		return {
			form: this.component.attrs
		};
	}
};
