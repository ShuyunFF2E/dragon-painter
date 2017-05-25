/*
 * @Author: Picker
 * @Date: 2017-05-25 18:11:14
 * @Last Modified by: Picker
 * @Last Modified time: 2017-05-25 18:49:10
 */


// 输入框组件扩展属性
export const PROPS_MAPPING = {
	type: {
		title: '输入框类型',
		editor: 'SELECT',
		options: [
			{ name: '普通输入框', value: 'text' },
			{ name: '多行输入框', value: 'textarea' }]
	},
	vModel: {
		title: '绑定的数据字段',
		editor: 'INPUT',
		placeholder: 'e.g. $eventName'
	},
	placeholder: {
		editor: 'INPUT',
		title: '为空时显示的提示信息',
		placeholder: 'e.g. 活动名称'
	},
	icon: {
		editor: 'INPUT',
		title: '输入框尾部图标',
		placeholder: 'e.g. search'
	},
	size: {
		title: '输入框尺寸 (text only)',
		editor: 'SELECT',
		options: [
			{ name: '正常大小', value: undefined },
			{ name: '偏大', value: 'large' },
			{ name: '偏小', value: 'small' },
			{ name: '迷你', value: 'mini' }]
	},
	resize: {
		title: '控制是否能被用户缩放 (textarea only)',
		editor: 'SELECT',
		options: [
			{ name: '不允许缩放', value: 'none' },
			{ name: '允许缩放', value: 'both' },
			{ name: '仅允许水平缩放', value: 'horizontal' },
			{ name: '仅允许垂直缩放', value: 'vertical' }
		]
	},
	rows: {
		title: '输入框行数 (textarea only)',
		editor: 'INPUT',
		placeholder: 'e.g. 2'
	},
	autosize: {
		title: '自适应内容高度 (textarea only)',
		editor: 'INPUT',
		/* eslint no-template-curly-in-string: "off" */
		placeholder: 'e.g. $true/$false/${ minRows: 2, maxRows: 5 }'
	},
	onIconClick: {
		title: '点击 Input 内的图标的钩子函数 (icon only)',
		editor: 'TEXTAREA',
		placeholder: 'e.g. \nfunction() {\n    console.log(123);\n }',
		autosize: {
			minRows: 2,
			maxRows: 5
		}
	},
	disabled: {
		title: '是否禁用',
		editor: 'INPUT',
		placeholder: 'e.g. $true'
	},
	readonly: {
		title: '是否只读',
		editor: 'INPUT',
		placeholder: 'e.g. $true/$false'
	}
};
