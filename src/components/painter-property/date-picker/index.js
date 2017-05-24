import './index.scss';

import template from './index.html';

export default {
	name: 'DatePickerComponentEditor',
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
