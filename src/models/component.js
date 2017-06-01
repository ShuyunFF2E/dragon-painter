/*
 * @Author: Picker
 * @Date: 2017-05-27 11:04:54
 * @Last Modified by: Picker
 * @Last Modified time: 2017-05-27 15:27:33
 */

import { v4 } from 'uuid';

/**
 * 基础组件模型
 * 其他组件模型均需要继承自该模型
 */
export default class BaseComponent {

	constructor(options) {
		this.cid = v4();
		this.attrs = {
			'@click.native.stop': `__onFocus('${this.cid}')`
		};

		// this.component=options.component;
		// this.attrs= options.attrs;
		// this.children=options.children;

		// 将配置注册到 CNode 实例中
		Object.assign(this, options);
	}

	// 根据当前节点的信息，输出最终配置结构
	transformToData() {
		throw new Error('Function [ transformToData ] should be overwrited!');
	}
}
