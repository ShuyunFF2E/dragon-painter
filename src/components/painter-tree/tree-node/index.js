import { v4 } from 'uuid';

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
		append() {
			const { node } = this;
			node.store.append(
				{
					id: v4(),
					label: 'new node'
				},
				node.data
			);
		},

		remove() {
			const { node } = this;
			node.store.remove(node.data);
		}
	},
	created() {
		console.log(this.node);
	}
};
