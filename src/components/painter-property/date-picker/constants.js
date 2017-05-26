export const PROPS_MAPPING = {
	vModel: {
		title: '表单数据对象',
		editor: 'INPUT',
		placeholder: 'e.g. startDate'
	},
	placeholder: {
		title: '提示信息',
		editor: 'INPUT',
		placeholder: 'e.g. 开始时间不能为空'
	},
	type: {
		title: '选择器类型',
		placeholder: '请选择日期选择器类型',
		default: 'date',
		editor: 'SELECT',
		options: [
			{ title: '日期', value: 'date' },
			{ title: '日期范围', value: 'daterange' },
			{ title: '日期时间', value: 'datetime' },
			{ title: '日期时间范围', value: 'datetimerange' },
			{ title: '年', value: 'year' },
			{ title: '月', value: 'month' },
			{ title: '周', value: 'week' }
		]
	},
	editable: {
		title: '文本框是否可输入',
		editor: 'BOOLEAN',
		default: '$true'
	},
	readonly: {
		title: '完全只读',
		editor: 'BOOLEAN',
		default: '$false'
	},
	disabled: {
		title: '文本框是否禁用',
		editor: 'BOOLEAN',
		default: '$false'
	},
	clearable: {
		title: '是否显示清除按钮',
		editor: 'BOOLEAN',
		default: '$true'
	},
	size: {
		title: '输入框尺寸',
		editor: 'SELECT',
		options: [{ title: '正常大小' }, { title: '偏大', value: 'large' }, { title: '偏小', value: 'small' }, { title: '迷你', value: 'mini' }]
	},
	format: {
		title: '时间日期格式',
		editor: 'INPUT',
		placeholder: '时间日期格式',
		required: true,
		default: 'yyyy-MM-dd'
	},
	align: {
		title: '对齐方式',
		default: 'left',
		editor: 'SELECT',
		options: [{ title: '左对齐', value: 'left' }, { title: '右对齐', value: 'right' }, { title: '居中对齐', value: 'center' }]
	},
	rangeSeparator: {
		title: '选择范围时的分隔符',
		editor: 'INPUT',
		default: '-'
	},
	// picker-options
	disabledDate: {
		title: '设置禁用状态',
		desc: '参数为当前日期，要求返回 Boolean',
		editor: 'FUNCTION',
		placeholder: 'e.g. \nfunction(date) {\n	return date > new Date();\n}',
		autosize: { minRows: 2, maxRows: 5 }
	},
	// picker-options
	onPick: {
		title: '选中日期后会执行的回调',
		desc: '只有当 daterange 或 datetimerange 才生效',
		editor: 'FUNCTION',
		placeholder: 'e.g. \nfunction({ maxDate, minDate }) {\n	console.log(maxDate, minDate);\n}',
		autosize: { minRows: 2, maxRows: 5 }
	}
};
