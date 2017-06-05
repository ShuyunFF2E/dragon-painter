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

		onPropsChange: {
			type: Function,
			default: () => {}
		}
	}

};
