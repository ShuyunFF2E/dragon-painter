/*
 * @Author: Picker
 * @Date: 2017-05-27 11:38:40
 * @Last Modified by: Picker
 * @Last Modified time: 2017-06-01 14:12:19
 */

import BaseComponent from '@/models/component';
import transformer from './transformer';

export default class FormItemComponent extends BaseComponent {

	constructor(options) {

		super(options);

		this.component = 'ElFormItem';
		this.name = this.component;

		this.attrs = transformer.transformNodeAttrs(this);
	}

}
