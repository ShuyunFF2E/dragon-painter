/*
 * @Author: Picker
 * @Date: 2017-05-26 17:07:14
 * @Last Modified by: Picker
 * @Last Modified time: 2017-05-26 21:55:13
 */

import formTransformer from '@/components/painter-property/form/transformer';
import formItemTransformer from '@/components/painter-property/form-item/transformer';
import inputTransformer from '@/components/painter-property/input/transformer';
import datePickerTransformer from '@/components/painter-property/date-picker/transformer';


// 组件-组件转换器 对照表
const componentTransformerMap = {
	ElForm: formTransformer,
	ElFormItem: formItemTransformer,
	ElInput: inputTransformer,
	ElDatePicker: datePickerTransformer
};

function transformNodeConfigToModel(node) {
	if (node.children && node.children.length) {
		node.children = node.children.map(subNode => transformNodeConfigToModel(subNode));
	}

	// 获取当前组件类型的数据转换器
	const transformer = componentTransformerMap[node.component];

	return transformer ? transformer.transformNodeToModel(node) : node;
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

