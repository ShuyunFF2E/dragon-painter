import './index.scss';

import template from './index.html';

import FormComponentEditor from './form';
import FormItemComponentEditor from './form-item';
import InputComponentEditor from './input';
import DatePickerComponentEditor from './date-picker';

export default {
	name: 'PainterProperty',
	template,
	components: {
		FormComponentEditor,
		FormItemComponentEditor,
		InputComponentEditor,
		DatePickerComponentEditor
	},

	props: {
		component: Object
	},

	data() {
		return {

		};
	}
};
