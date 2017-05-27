import template from './../editor.html';

export default {
	name: 'FormComponentEditor',
	template,

	props: {
		component: Object
	},

	data() {
		return {
			name: '表单',
			form: this.component.attrs
		};
	}
};
