import './painter-tree.scss';
import template from './painter-tree.html';

export default {
	name: 'PainterTree',
	template,
	data() {
		return {
			data: [
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
		};
	}
};
