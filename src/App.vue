<template>
	<div id="app">
    <el-row type="flex" class="container">
      <el-col :span="5" class="column"><painter-tree /></el-col>
			<el-col :span="13" class="column">
				<painter-view :page-config="pageConfig" />
			</el-col>
			<el-col :span="6" class="column">
				<painter-property :component="activeComponent" />
			</el-col>
    </el-row>
	</div>
</template>

<script>
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

import PainterView from './components/PainterView';
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
#app > .container > .column:nth-child(1) {
}
</style>
