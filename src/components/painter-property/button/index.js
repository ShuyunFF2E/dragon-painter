import template from './../editor.html';

export default {
	name: 'ButtonComponentEditor',
	template,

	props: {
		component: Object
	},

	data() {
		return {
			name: '按钮',
			form: this.component.attrs
		};
	}
};
