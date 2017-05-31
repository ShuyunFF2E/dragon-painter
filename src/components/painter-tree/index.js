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
	props: {
		nodeSelect: Function
	},
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

		onNodeClick(data, node) {
			const getTreeNodeData = treeNode => {
				const { id, children, ...nodeData } = treeNode; // eslint-disable-line no-unused-vars
				return Object.assign(nodeData, {
					children: (children || []).map(_treeNode => getTreeNodeData(_treeNode))
				});
			};
			const treeData = node.store.data.map(treeNode => getTreeNodeData(treeNode));
			this.nodeSelect(data, treeData);
		}
	}
};
