/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2017-05-31
 */

import template from './template.html';

export default {

	template,
	props: {

		title: {
			type: String,
			required: true
		},

		initProps: {
			type: Object,
			default: {},
			required: true
		},

		onChange: {
			type: Function,
			default: () => {}
		}
	},

	methods: {

		save(props) {

			const config = {};

			// TODO 将各属性从 UI 输入的字符串转换为配置的 type 类型
			// 如 'true' --> Boolean, 'function() {return a+b}' ---> Function
			Object.keys(props).forEach(prop => {
				config[prop] = props[prop].value || '';
			});

			this.onChange(config);
		}

	}

};
