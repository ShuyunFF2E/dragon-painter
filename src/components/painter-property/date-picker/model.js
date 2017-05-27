/*
 * @Author: Picker
 * @Date: 2017-05-27 11:38:40
 * @Last Modified by: Picker
 * @Last Modified time: 2017-05-27 15:40:19
 */

import BaseComponent from '@/models/component';
import transformer from './transformer';

export default class DatePickerComponent extends BaseComponent {

	constructor(options) {

		super(options);

		this.attrs = transformer.transformNodeAttrs(this);
	}

}
