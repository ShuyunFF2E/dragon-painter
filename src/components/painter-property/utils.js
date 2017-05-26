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
			// attrs[key] = value.hasOwnProperty('default') ? value.default : getBaseData(value.type);
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
 * 节点配置中的属性如果为`:`开头，则需要将冒号去掉
 * @param {Object} attrs
 */
export function resumeNodeAttrs(attrs) {
	const newAttrs = {};

	for (const attr in attrs) {
		if (attrs.hasOwnProperty(attr)) {
			const attrVal = attrs[attr];
			if (attr.startsWith(':')) {
				newAttrs[attr.substr(1)] = attrVal;
			} else {
				newAttrs[attr] = attrVal;
			}
		}
	}

	return newAttrs;
}

/**
 * 将组件的扩展属性合并到属性数据中
 * @param {Object} props 组件的属性
 * @param {Object} mappings 组件的扩展属性
 */
export function mergePropsMapping(props, mappings) {
	for (const prop in mappings) {
		if (mappings.hasOwnProperty(prop)) {
			let element = mappings[prop];

			element = Object.assign(element, props[prop]);

			if (element.title === undefined) {
				element.title = prop;
			}

			if (element.value === undefined) {
				element.value = element.default;
			}
		}
	}
	return mappings;
}
