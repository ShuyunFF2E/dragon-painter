/*
 * @Author: Picker
 * @Date: 2017-05-26 15:35:42
 * @Last Modified by: Picker
 * @Last Modified time: 2017-05-26 21:55:28
 */

import component from 'element-ui/lib/input';
import { PROPS_MAPPING } from './constants';
import { getDefaultAttrsFromProps, mergePropsMapping } from '../utils';


function transformNodeToModel(node) {

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
	transformNodeToModel
};
