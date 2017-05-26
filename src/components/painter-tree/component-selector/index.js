import template from './component-selector.html';

export default {
	name: 'ComponentSelector',
	template,
	data() {
		return {
			value: null,
			components: [
				{ component: 'ElForm' },
				{ component: 'ElFormItem' },
				{ component: 'ElInput' },
				{ component: 'ElButton' }
			]
		};
	}
};
