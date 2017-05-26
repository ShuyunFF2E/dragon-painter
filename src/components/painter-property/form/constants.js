/*
 * @Author: Picker
 * @Date: 2017-05-26 14:33:44
 * @Last Modified by: Picker
 * @Last Modified time: 2017-05-26 16:47:13
 */

// 表单组件扩展属性
export const PROPS_MAPPING = {
	ref: {
		title: '表单唯一标识（变量名格式）',
		editor: 'INPUT',
		placeholder: 'e.g. queryForm'
	},
	model: {
		title: '表单数据对象',
		editor: 'INPUT',
		placeholder: 'e.g. query'
	},
	inline: {
		title: '是否为行内表单模式',
		editor: 'BOOLEAN',
		default: '$false'
	},
	labelPosition: {
		title: '表单域标签的位置',
		editor: 'SELECT',
		placeholder: 'e.g. 右对齐（默认）',
		options: [
			{ title: '左对齐', value: 'left' },
			{ title: '右对齐', value: 'right' },
			{ title: '顶部对齐', value: 'top' }],
		default: 'right'
	},
	labelWidth: {
		title: '表单域标签的宽度',
		desc: '不要忘记单位',
		editor: 'INPUT',
		placeholder: 'e.g. 100px'
	},
	rules: {
		title: '表单验证规则',
		editor: 'TEXTAREA',
		placeholder: 'e.g. {}',
		autosize: { minRows: 2, maxRows: 5 }
	}
};
