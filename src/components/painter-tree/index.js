import './painter-tree.scss';
import template from './painter-tree.html';

export default {
	name: 'PainterTree',
	template,
	data() {
		return {
			data: [
				{
					label: 'root',
					children: [
						{
							label: '1111',
							children: [
								{ label: '222' }
							]
						},
						{
							label: '1111',
							children: [
								{ label: '222' }
							]
						},
						{
							label: '1111',
							children: [
								{ label: '222' }
							]
						},
						{
							label: '1111',
							children: [
								{ label: '222' }
							]
						}
					]
				}
			]
		};
	},
	methods: {
		renderContent(h, { node, data, store }) {
			return (
				<span>
					<span>
						<span>{node.label}</span>
					</span>
					<span style="float: right; margin-right: 10px">
						<el-button size="mini" icon="plus" on-click={ () => this.append(store, data) }></el-button>
						<el-button size="mini" icon="delete" on-click={ () => this.remove(store, data) }></el-button>
					</span>
				</span>
			);
		},

		append(store, data) {
			console.log('append:', store, data); // eslint-disable-line
		},

		remove(store, data) {
			console.log('remove:', store, data); // eslint-disable-line
		},

		nodeClickHandler(...args) {
			console.log(args); // eslint-disable-line
		}
	}
};
