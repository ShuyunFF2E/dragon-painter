/*
 * @Author: Picker
 * @Date: 2017-05-27 11:38:40
 * @Last Modified by: Picker
 * @Last Modified time: 2017-06-01 14:12:31
 */

import BaseComponent from '@/models/component';
import transformer from './transformer';

export default class InputComponent extends BaseComponent {

	constructor(options) {

		super(options);

		this.component = 'ElInput';
		this.name = this.component;

		Object.assign(this.attrs, transformer.transformNodeAttrs(this));
	}

}
