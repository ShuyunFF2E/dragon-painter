/*
 * @Author: Picker
 * @Date: 2017-05-24 16:39:08
 * @Last Modified by: Picker
 * @Last Modified time: 2017-05-25 18:46:29
 */

import component from 'element-ui/lib/input';
import { PROPS_MAPPING } from './constants';
import { getDefaultAttrsFromProps, mergePropsMapping } from '../utils';

/**
 * convert original Input node info to a full component Model.
 * @param node [original Input node info]
 */
function convertNodeToModel(node) {

	const defaultProps = getDefaultAttrsFromProps(component.props);

	const attrs = mergePropsMapping(defaultProps, PROPS_MAPPING);

	// autosize 属性默认为false
	if (attrs.autosize.value === false) {
		attrs.autosize.value = '$false';
	}

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
