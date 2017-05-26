/*
 * @Author: Picker
 * @Date: 2017-05-26 15:05:42
 * @Last Modified by: Picker
 * @Last Modified time: 2017-05-26 16:46:25
 */

// 表单域组件扩展属性
export const PROPS_MAPPING = {
	prop: {
		title: '表单域 model 字段（prop）',
		editor: 'INPUT',
		placeholder: 'e.g. name'
	},
	label: {
		title: '标签文本（label）',
		editor: 'INPUT',
		placeholder: 'e.g. 活动名称'
	},
	required: {
		title: '是否必填',
		desc: '如不设置，则会根据校验规则自动生成',
		editor: 'BOOLEAN',
		default: '$false'
	},
	error: {
		title: '表单域验证错误信息（error）',
		editor: 'INPUT',
		placeholder: 'e.g. 输入格式有误！'
	},
	labelWidth: {
		title: '表单域标签的宽度',
		desc: '不要忘记单位',
		editor: 'INPUT',
		placeholder: 'e.g. 100px'
	},
	rules: {
		title: '表单域验证规则',
		editor: 'TEXTAREA',
		placeholder: 'e.g. {}',
		autosize: { minRows: 2, maxRows: 5 }
	}
};
