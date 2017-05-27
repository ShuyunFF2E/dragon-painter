import template from './component-selector.html';

export default {
	name: 'ComponentSelector',
	template,
	props: {
		select: Function
	},
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
	},
	methods: {
	}
};
