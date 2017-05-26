/*
 * @Author: Picker
 * @Date: 2017-05-26 17:07:14
 * @Last Modified by: Picker
 * @Last Modified time: 2017-05-26 17:49:28
 */

import formConverter from '@/components/painter-property/form/transformer';
import formItemConverter from '@/components/painter-property/form-item/transformer';
import inputConverter from '@/components/painter-property/input/transformer';
import datePickerConverter from '@/components/painter-property/date-picker/transformer';


// 组件-组件转换器 对照表
const componentTransformerMap = {
	ElForm: formConverter,
	ElFormItem: formItemConverter,
	ElInput: inputConverter,
	ElDatePicker: datePickerConverter
};

function transformNodeConfigToModel(node) {
	if (node.children && node.children.length) {
		node.children = node.children.map(subNode => transformNodeConfigToModel(subNode));
	}

	return componentTransformerMap[node.component] || node;
}

/**
 * 将最终配置数据转化为本项目可使用的数据模型
 * 1、初始化每个组件节点的属性（attrs）
 * 2、为每个组件添加唯一的 ID 属性
 * @param {Object|Array} config 原始节点配置集
 */
export function transformConfigToModel(config) {
	config.map(node => transformNodeConfigToModel(node));
	return config;
}

