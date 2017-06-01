import components from '@/models/component-map';
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
			components
		};
	}
};
