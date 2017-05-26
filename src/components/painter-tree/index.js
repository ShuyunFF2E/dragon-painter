import './painter-tree.scss';
import template from './painter-tree.html';
import TreeNode from './tree-node';
import ComponentSelector from './component-selector';

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
				<TreeNode node={node} data={data} store={store}>
					<ComponentSelector slot="component-selector"></ComponentSelector>
				</TreeNode>
			);
		},

		nodeClickHandler(data, node) {
			console.log('select:', node);
		}
	}
};
