/*
 * @Author: Picker
 * @Date: 2017-05-25 10:40:17
 * @Last Modified by: Picker
 * @Last Modified time: 2017-05-25 11:42:13
 */

import component from 'element-ui/lib/form';
import { getDefaultAttrsFromProps, resumeNodeAttrs } from '../utils';

function convertNodeToModel(node) {
	const attrs = {
		...getDefaultAttrsFromProps(component.props),
		...resumeNodeAttrs(node.attrs)
	};

	const model = {
		component: node.component,
		name: node.name,
		children: node.children,
		attrs
	};

	return model;
}


export default {
	convertNodeToModel
};
