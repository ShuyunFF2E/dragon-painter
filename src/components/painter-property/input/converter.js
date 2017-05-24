/*
 * @Author: Picker
 * @Date: 2017-05-24 16:39:08
 * @Last Modified by: Picker
 * @Last Modified time: 2017-05-24 17:09:03
 */

/**
 * convert original Input node info to a full component Model.
 * @param node [original Input node info]
 */
function convertNodeToModel(node) {

	const attrs = {
		type: 'text',
		placeholder: '',
		vModel: '',
		size: 'normal',
		icon: '',
		disabled: undefined,
		maxlength: undefined,
		minlength: undefined,
		rows: 3,
		autosizeOpts: {
			// auto,fixed,autoWithLimit
			type: 'auto',
			rows: 3,
			minRows: 2,
			maxRows: 5
		},
		...node.attrs
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
