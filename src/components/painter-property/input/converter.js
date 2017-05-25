/*
 * @Author: Picker
 * @Date: 2017-05-24 16:39:08
 * @Last Modified by: Picker
 * @Last Modified time: 2017-05-25 14:37:19
 */

import component from 'element-ui/lib/input';
import { getDefaultAttrsFromProps, resumeNodeAttrs } from '../utils';

/**
 * convert original Input node info to a full component Model.
 * @param node [original Input node info]
 */
function convertNodeToModel(node) {

	const attrs = {
		...getDefaultAttrsFromProps(component.props),
		...resumeNodeAttrs(node.attrs),
		autosizeOpts: {
			// auto,fixed,autoWithLimit
			type: 'auto',
			rows: 3,
			minRows: 2,
			maxRows: 5
		}
	};

	if (!attrs.size) {
		attrs.size = 'normal';
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
