
import template from './../editor.html';

export default {
	name: 'DatePickerComponentEditor',
	template,

	props: {
		component: Object
	},

	data() {

		return {
			name: '日期组件',
			form: this.component.attrs
		};
	}
};
