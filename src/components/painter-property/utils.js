function getBaseData(type) {
	if (type === Boolean) {
		return false;
	} else if (type === String) {
		return '';
	} else if (type === Number) {
		return 0;
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

		if (Object.prototype.toString.call(value) === '[object Object]') {
			attrs[key] = value.hasOwnProperty('default') ? value.default : getBaseData(value.type);
		} else if (Object.prototype.toString.call(value) === '[object Array]') {
			attrs[key] = '';
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
