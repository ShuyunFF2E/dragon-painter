/*
 * @Author: Picker
 * @Date: 2017-05-24 16:39:08
 * @Last Modified by: Picker
 * @Last Modified time: 2017-05-26 22:05:33
 */

import component from 'element-ui/lib/input';
import { PROPS_MAPPING } from './constants';
import { getDefaultAttrsFromProps, mergePropsMapping } from '../utils';

/**
 * convert original Input node info to a full component Model.
 * @param node [original Input node info]
 */
function transformNodeToModel(node) {

	const defaultProps = getDefaultAttrsFromProps(component.props);

	if (defaultProps.autosize.default === false) {
		defaultProps.autosize.default = '$false';
	}
	if (defaultProps.autosize.value === false) {
		defaultProps.autosize.value = '$false';
	}

	const attrs = mergePropsMapping(defaultProps, PROPS_MAPPING, node.attrs);

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
