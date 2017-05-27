import template from './tree-node.html';

export default {
	name: 'TreeNode',
	template,
	props: {
		node: Object,
		data: Object,
		store: Object
	},
	methods: {
		remove() {
			const { node } = this;
			node.store.remove(node.data);
		}
	}
};
