/*
 * @Author: Picker
 * @Date: 2017-05-26 15:35:42
 * @Last Modified by: Picker
 * @Last Modified time: 2017-05-27 14:21:43
 */

import component from 'element-ui/lib/date-picker';
import { PROPS_MAPPING } from './constants';
import { getDefaultAttrsFromProps, mergePropsMapping } from '../utils';


function transformNodeAttrs(node) {

	const defaultProps = getDefaultAttrsFromProps(component.props);

	const attrs = mergePropsMapping(defaultProps, PROPS_MAPPING, node.attrs);

	return attrs;
}


export default {
	transformNodeAttrs
};
