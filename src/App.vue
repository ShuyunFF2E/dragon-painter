<template>
	<div id="app">
		<el-row type="flex" class="container">
			<el-col :span="6" class="column"><painter-tree /></el-col>
			<el-col :span="18" class="column">
				<painter-view :page-config="pageConfig" />
			</el-col>
		</el-row>
		<aside class="component-editor-container">
			<painter-property :component="activeComponent" />
		</aside>
	</div>
</template>

<script>
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

import PainterView from './components/painter-view';
import PainterTree from './components/painter-tree';
import PainterProperty from './components/painter-property';

// TODO:以下两个数据为测试使用数据
import defaultConfig from '../mock/config';
import activeComponent from '../mock/active-component';

Vue.use(ElementUI);

export default {
	name: 'app',
	components: {
		PainterView,
		PainterTree,
		PainterProperty
	},
	data() {
		return {
			pageConfig: defaultConfig,
			activeComponent
		};
	}
};
</script>

<style>
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
	margin-right:400px;
	padding:0 10px;
}

.component-editor-container{
	position:fixed;
	right:0;
	top:0;
	bottom:0;
	width:400px;
	z-index:100;
	box-shadow: -1px 1px 0 #ddd;
	background-color: #f9f9f9;
}
</style>
