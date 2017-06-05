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
		nodeSelect: Function,
		change: Function
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
				<TreeNode node={node} data={data} store={store} change={this.change}></TreeNode>
			);
		}
	}
};
