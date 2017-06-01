/*
 * @Author: Picker
 * @Date: 2017-05-27 11:38:40
 * @Last Modified by: Picker
 * @Last Modified time: 2017-06-01 14:11:53
 */

import BaseComponent from '@/models/component';
import transformer from './transformer';

export default class FormComponent extends BaseComponent {

	constructor(options) {

		super(options);

		this.component = 'ElForm';
		this.name = this.component;

		Object.assign(this.attrs, transformer.transformNodeAttrs(this));
	}

}
