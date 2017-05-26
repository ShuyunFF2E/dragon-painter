/*
 * @Author: Picker
 * @Date: 2017-05-25 18:11:14
 * @Last Modified by: Picker
 * @Last Modified time: 2017-05-26 16:23:25
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
			{ title: '正常大小' },
			{ title: '偏大', value: 'large' },
			{ title: '偏小', value: 'small' },
			{ title: '迷你', value: 'mini' }]
	},
	resize: {
		title: '控制是否能被用户缩放 (textarea only)',
		editor: 'SELECT',
		options: [
			{ title: '不允许缩放', value: 'none' },
			{ title: '允许缩放', value: 'both' },
			{ title: '仅允许水平缩放', value: 'horizontal' },
			{ title: '仅允许垂直缩放', value: 'vertical' }
		],
		default: 'none'
	},
	rows: {
		title: '输入框行数 (textarea only)',
		editor: 'NUMBER',
		placeholder: 'e.g. 2'
	},
	autosize: {
		title: '自适应内容高度 (textarea only)',
		editor: 'BOOLEAN_PLUS',
		plus: '',
		/* eslint no-template-curly-in-string: "off" */
		plusPlaceholder: 'e.g. ${ minRows: 2, maxRows: 5 }',
		default: '$false'
	},
	disabled: {
		title: '是否禁用',
		editor: 'BOOLEAN_PLUS',
		plus: '',
		plusPlaceholder: 'e.g. $!query.isActive',
		default: '$false'
	},
	readonly: {
		title: '是否只读',
		editor: 'BOOLEAN',
		placeholder: 'e.g. $true/$false',
		default: '$false'
	},
	onIconClick: {
		title: '点击 Input 内的图标的钩子函数 (icon only)',
		editor: 'FUNCTION',
		placeholder: 'e.g. \nfunction() {\n    console.log(123);\n }',
		autosize: {
			minRows: 2,
			maxRows: 5
		}
	}
};
