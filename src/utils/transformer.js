/*
 * @Author: Picker
 * @Date: 2017-05-26 17:07:14
 * @Last Modified by: Picker
 * @Last Modified time: 2017-05-27 15:58:57
 */

import BaseComponent from '@/models/component';
import componentModelMap from '@/models/component-map';


/**
 * 将一个完整的页面配置转化为一棵组件树
 * @param {Object} node 根节点配置信息
 */
function transformNodeToModel(node) {
	if (node.children && node.children.length) {
		node.children = node.children.map(subNode => transformNodeToModel(subNode));
	}

	const Component = componentModelMap[node.component];

	// TODO: 最终每个 node 都会有一个对应的 ComponentModel
	return Component ? new Component(node) : new BaseComponent(node);
}


/**
 * 将最终配置数据转化为本项目可使用的数据模型
 * 1、初始化每个组件节点的属性（attrs）
 * 2、为每个组件添加唯一的 ID 属性
 * @param {Object|Array} config 原始节点配置集
 */
export function transformConfigToComponentTree(config) {

	return config.map(node => transformNodeToModel(node));

}

