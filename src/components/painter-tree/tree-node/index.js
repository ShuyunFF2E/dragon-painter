import template from './tree-node.html';

import componentSelector from '../component-selector';

export default {
	name: 'TreeNode',
	template,
	props: {
		node: Object,
		data: Object,
		store: Object,
		change: Function
	},

	components: {
		componentSelector
	},

	data() {
		return {
			showComponentSelector: false
		};
	},
	methods: {
		remove() {
			const { node } = this;
			node.store.remove(node.data);
			this.change(node.store.data);
		},

		addChild(component) {
			const { node } = this;
			const componentDisplayName = component.constructor.name.replace(/Component$/, '');
			Object.assign(component, { component: componentDisplayName });
			node.store.append(component, node.data);
			this.change(node.store.data);
		},

		select(Component) {
			this.showComponentSelector = false;
			this.addChild(new Component());
		},

		open() {
			this.showComponentSelector = true;
		}
	}
};
