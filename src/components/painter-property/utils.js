function getBaseData(type) {
	if (type === Boolean) {
		return {
			type: 'Boolean',
			required: false,
			value: undefined
		};
	} else if (type === String) {
		return {
			type: 'String',
			required: false,
			value: undefined
		};
	} else if (type === Number) {
		return {
			type: 'Number',
			required: false,
			value: undefined
		};
	} else if (type === Object) {
		return {
			type: 'Object',
			required: false,
			value: undefined
		};
	}

	return undefined;
}

/**
 * TODO:这个函数只是暂时的，最终以刘奎提供的替代函数为准
 * 根据组件的props属性，获取组件所需默认的数据
 * TODO:如果全部返回undefined会如何？
 * @param {Object} props
 */
export function getDefaultAttrsFromProps(props = {}) {
	const attrs = {};
	for (const key in props) {
		if (!props.hasOwnProperty(key)) {
			continue;
		}

		const value = props[key];
		const valueType = Object.prototype.toString.call(value);
		// console.log(valueType);


		if (valueType === '[object Object]') {
			attrs[key] = {
				required: false,
				...value,
				value: value.hasOwnProperty('default') ? value.default : undefined
			};
		} else if (valueType === '[object Array]') {
			attrs[key] = {
				type: 'String',
				required: false,
				value: undefined
			};
		} else if (value === Function) {
			attrs[key] = {
				type: 'Function',
				required: false,
				value: undefined
			};
		} else {
			attrs[key] = getBaseData(value);
		}
	}

	return attrs;
}


/**
 * 将组件的扩展属性合并到属性数据中
 * @param {Object} props 组件的属性
 * @param {Object} mappings 组件的扩展属性
 */
export function mergePropsMapping(props, mappings, nodeAttrs = {}) {
	const newProps = {};
	for (const prop in mappings) {
		if (mappings.hasOwnProperty(prop)) {

			const element = Object.assign({}, mappings[prop], props[prop]);

			if (element.title === undefined) {
				element.title = prop;
			}

			element.value = nodeAttrs[prop] || element.default;

			newProps[prop] = element;
		}
	}

	return newProps;
}
