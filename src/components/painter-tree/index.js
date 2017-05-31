import { v4 } from 'uuid';

import './painter-tree.scss';
import template from './painter-tree.html';
import TreeNode from './tree-node';

// TODO: fix the path
import mockData from '../../../mock/config';
import recursivelyAddId from './recursivelyAddId';

export default {
	name: 'PainterTree',
	template,
	data() {
		recursivelyAddId(mockData);
		return {
			data: mockData,
			props: {
				label: 'component',
				children: 'children'
			}
		};
	},
	methods: {
		renderContent(h, { node, data, store }) {
			return (
				<TreeNode node={node} data={data} store={store} add-child={
					component => {
						this.addChild(component, node);
					}
				}></TreeNode>
			);
		},

		addChild(component, node) {
			node.store.append(
				{
					id: v4(),
					component
				},
				node.data
			);
		},

		nodeClickHandler(data, node) {
			console.log('select:', node);
		}
	}
};
