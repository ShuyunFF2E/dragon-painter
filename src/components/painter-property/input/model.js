/*
 * @Author: Picker
 * @Date: 2017-05-27 11:38:40
 * @Last Modified by: Picker
 * @Last Modified time: 2017-05-27 15:39:10
 */

import BaseComponent from '@/models/component';
import transformer from './transformer';

export default class InputComponent extends BaseComponent {

	constructor(options) {

		super(options);

		this.attrs = transformer.transformNodeAttrs(this);
	}

}
