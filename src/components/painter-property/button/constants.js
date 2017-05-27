/*
 * @Author: Picker
 * @Date: 2017-05-27 16:46:01
 * @Last Modified by: Picker
 * @Last Modified time: 2017-05-27 17:39:49
 */

// 按钮组件扩展属性
export const PROPS_MAPPING = {
	size: {
		title: '尺寸',
		editor: 'SELECT',
		options: [
			{ title: '正常大小' },
			{ title: '偏大', value: 'large' },
			{ title: '偏小', value: 'small' },
			{ title: '迷你', value: 'mini' }]
	},
	type: {
		title: '类型',
		editor: 'SELECT',
		options: [
			{ name: 'primary', value: 'primary' },
			{ name: 'success', value: 'success' },
			{ name: 'warning', value: 'warning' },
			{ name: 'danger', value: 'danger' },
			{ name: 'info', value: 'info' },
			{ name: 'text', value: 'text' }]
	},
	plain: {
		title: '是否朴素按钮',
		editor: 'BOOLEAN',
		placeholder: 'e.g. $true/$false',
		default: '$false'
	},
	loading: {
		title: '是否加载中状态',
		editor: 'INPUT',
		placeholder: 'e.g. $isLoading'
	},
	disabled: {
		title: '是否禁用',
		editor: 'BOOLEAN_PLUS',
		plus: '',
		plusPlaceholder: 'e.g. $isLoading',
		default: '$false'
	},
	icon: {
		editor: 'INPUT',
		title: '图标',
		desc: '已有的图标库中的图标名',
		placeholder: 'e.g. search'
	},
	autofocus: {
		title: '是否默认聚焦',
		editor: 'BOOLEAN',
		placeholder: 'e.g. $true/$false',
		default: '$false'
	}
};
