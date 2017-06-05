<template>
	<div id="app">
		<el-row type="flex" class="container">
			<el-col :span="6" class="column">
				<painter-tree :node-select="onPainterTreeNodeSelect" :change="onPainterTreeChange"/>
			</el-col>
			<el-col :span="18" class="column">
				<!--<painter-view :page-config="pageConfig"></painter-view>-->
				<preview :config="config" @component-focus="onFocus"></preview>
			</el-col>
		</el-row>
		<aside class="component-editor-container">
			<editor :title="activeComponent.component" :initProps="activeComponentProps"></editor>
		</aside>
	</div>
</template>

<script>
	import Vue from 'vue';
	import ElementUI from 'element-ui';
	import 'element-ui/lib/theme-default/index.css';

	import Preview from './components/preview';
	import Editor from './components/props-editor';
	import PainterView from './components/painter-view';
	import PainterTree from './components/painter-tree';
	import PainterProperty from './components/painter-property';
	import propsScanner from 'dragon-pond/lib/vue-component-compilers/plugins/props-scanner';

	// TODO:activeComponent 将由 painter-tree 设置
	// import activeComponent from '../mock/active-component';
	// import pagesConfig from './resource';
	import config from '../mock/config';

	Vue.use(ElementUI);

	const extractProp = (objectArray, init, prop) =>

			objectArray.reduce((acc, component) => {

				acc.push(component);

				if (component[prop]) {
					extractProp(component[prop], acc, prop);
				}

				return acc;

			}, init);

	export default {
		name: 'app',
		components: {
			Preview,
			Editor,
			PainterView,
			PainterTree,
			PainterProperty
		},
		data() {
			return {
				// pageConfig: pagesConfig[0],
				config: config[0],
				activeComponent: {
					component: 'ElInput'
				}
			};
		},

		computed: {

			activeComponentProps() {

				const { component, attrs = {}} = this.activeComponent;

				const props = propsScanner(ElementUI[component.slice(2)].props);

				Object.keys(props).forEach(prop => {

					if (attrs[prop]) {
						props[prop].value = attrs[prop];
					}
				});

				return props;
			}
		},

		methods: {
			onPainterTreeNodeSelect(nodeData) {
				this.activeComponent = nodeData;
			},

			onPainterTreeChange(treeData) {
				this.config = { ...treeData[0] };
			},

			onFocus(cid) {
				const allComponents = extractProp([this.config], [], 'children');
				this.activeComponent = allComponents.find(v => v.cid === cid);
			}
		}
	};
</script>

<style scoped>
	html, body {
		height: 100%;
	}

	body {
		margin: 0;
	}

	#app {
		height: 100%;
	}

	#app > .container {
		height: 100%;
	}

	#app > .container > .column:nth-child(2) {
		margin-right: 400px;
		padding: 0 10px;
	}

	.component-editor-container {
		position: fixed;
		right: 0;
		top: 0;
		bottom: 0;
		width: 400px;
		z-index: 100;
		box-shadow: -1px 0px 0 #ddd;
		background-color: #f9f9f9;
	}
</style>
