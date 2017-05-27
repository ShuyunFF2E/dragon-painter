// Form Component
import transformer from '@/components/painter-property/form/transformer';
export default {
	component: 'ElForm',
	attrs: transformer.transformNodeAttrs({
	})
};

// FormItem Component
// import transformer from '@/components/painter-property/form-item/transformer';
// export default transformer.transformNodeAttrs({
// 	component: 'ElFormItem',
// 	attrs: {
// 	}
// });


// Input Component
// import transformer from '@/components/painter-property/input/transformer';
// export default transformer.transformNodeAttrs({
// 	component: 'ElInput',
// 	attrs: {}
// });

// DatePicker Component
// import transformer from '@/components/painter-property/date-picker/transformer';
// export default transformer.transformNodeAttrs({
// 	component: 'ElDatePicker',
// 	attrs: {
// 		placeholder: '',
// 		vModel: '',
// 		type: 'date',
// 		clearable: true,
// 		defaultValueOpts: {
// 			type: 'none',
// 			value: '',
// 			offset: 0
// 		},
// 		defaultValue: ''
// 	}
// });
