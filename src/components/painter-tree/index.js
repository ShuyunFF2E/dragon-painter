import Vue from 'vue';

import './painter-tree.scss';
import template from './painter-tree.html';
import TreeNode from './tree-node';

// TODO: fix the path
import mockData from '../../../mock/config';
import recursivelyAddId from './recursivelyAddId';

/* eslint no-console: "off"	*/
// const TreeNodeConstuctor = Vue.extend(TreeNode);

Vue.component('tree-node-c', TreeNode);

export default {
	name: 'PainterTree',
	template,
	data() {
		recursivelyAddId(mockData);
		return {
			data: mockData,
			props: {
				label: 'component',
				children: 'children'
			}
		};
	},
	methods: {
		renderContent(h, { node, data, store }) {
			return <tree-node-c node={node} data={data} store={store}></tree-node-c>;
			// eslint-disable-next-line
			// const instance = new TreeNodeConstuctor();
			// instance.$mount(document.getElementById('app'));
			// console.log(instance);
			/* eslint no-underscore-dangle: "off" */
			// return instance._render;

			// const instance = new Vue(TreeNode);

			// console.log(instance);


			// document.body.appendChild(_this.$parent.$el);
			// const vvv = h('span', {
			// 	// Component props
			// 	props: {
			// 		msg: 'hi'
			// 	},
			// 	// normal HTML attributes
			// 	attrs: {
			// 		id: 'foo'
			// 	},
			// 	// DOM props
			// 	domProps: {
			// 		innerHTML: 'bar'
			// 	},
			// 	// Event handlers are nested under "on", though
			// 	// modifiers such as in v-on:keyup.enter are not
			// 	// supported. You'll have to manually check the
			// 	// keyCode in the handler instead.
			// 	on: {
			// 	},
			// 	// For components only. Allows you to listen to
			// 	// native events, rather than events emitted from
			// 	// the component using vm.$emit.
			// 	nativeOn: {
			// 	},
			// 	// class is a special module, same API as `v-bind:class`
			// 	class: {
			// 		foo: true,
			// 		bar: false
			// 	},
			// 	// style is also same as `v-bind:style`
			// 	style: {
			// 		color: 'red',
			// 		fontSize: '14px'
			// 	},
			// 	// other special top-level properties
			// 	key: 'key',
			// 	ref: 'ref',
			// 	// assign the `ref` is used on elements/components with v-for
			// 	refInFor: true,
			// 	slot: 'slot'
			// });
			// console.log(vvv);


			// return instance;
		},

		nodeClickHandler(data, node) {
			console.log('select:', node); // eslint-disable-line
		}
	}
};
