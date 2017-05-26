/*
 * @Author: Picker
 * @Date: 2017-05-25 10:49:16
 * @Last Modified by: Picker
 * @Last Modified time: 2017-05-26 16:46:17
 */

import component from 'element-ui/lib/form-item';
import { PROPS_MAPPING } from './constants';
import { getDefaultAttrsFromProps, mergePropsMapping } from '../utils';

function convertNodeToModel(node) {
	const defaultProps = getDefaultAttrsFromProps(component.props);

	const attrs = mergePropsMapping(defaultProps, PROPS_MAPPING);

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