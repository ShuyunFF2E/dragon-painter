import './index.scss';

import template from './index.html';

import FormComponentEditor from './form';
import FormItemComponentEditor from './form-item';
import InputComponentEditor from './input';
import DatePickerComponentEditor from './date-picker';
import ButtonComponentEditor from './button';

export default {
	name: 'PainterProperty',
	template,
	components: {
		FormComponentEditor,
		FormItemComponentEditor,
		InputComponentEditor,
		DatePickerComponentEditor,
		ButtonComponentEditor
	},

	props: {
		component: Object
	},

	data() {
		return {

		};
	}
};
