import template from './tree-node.html';

import componentSelector from '../component-selector';

export default {
	name: 'TreeNode',
	template,
	props: {
		node: Object,
		data: Object,
		store: Object,
		addChild: Function
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
		},

		onComponentSelecotorShown() { },

		select(component) {
			console.log('Selected ', component);
			this.showComponentSelector = false;
			this.addChild(component);
		},
		open() {
			this.showComponentSelector = true;
		}
	}
};
