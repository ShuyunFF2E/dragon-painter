// Form Component
// export default {
// 	component: 'ElForm',
// 	attrs: {
// 		inline: true,
// 		labelPosition: 'right'
// 	}
// };

// FormItem Component
// export default {
// 	component: 'ElFormItem',
// 	attrs: {
// 		prop: '',
// 		label: '',
// 		required: false,
// 		error: '',
// 		labelWidth: 0,
// 		rules: ''
// 	}
// };

import inputConverter from '@/components/painter-property/input/converter';
// Input Component
export default inputConverter.convertNodeToModel({
	component: 'ElInput',
	attrs: {}
});

// DatePicker Component
// export default {
// 	component: 'ElDatePicker',
// 	attrs: {
// 		placeholder: '',
// 		vModel: '',
// 		type: 'date',
// 		clearable: true,
// 		defaultValueOpts: {
// 			type: 'none',
// 			value:'',
// 			offset:0
// 		},
// 		defaultValue: ''
// 	}
// };
