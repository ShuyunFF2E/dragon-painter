<template>
	<div id="app">
    <el-row type="flex" class="container">
      <el-col :span="5" class="column"><painter-tree /></el-col>
			<el-col :span="13" class="column">
				<painter-view />
			</el-col>
			<el-col :span="6" class="column">
				<painter-property />
			</el-col>
    </el-row>
	</div>
</template>

<script>
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

import PainterView from './components/PainterView';
import PainterTree from './components/PainterTree';
import PainterProperty from './components/PainterProperty';

Vue.use(ElementUI);

export default {
	name: 'app',
	components: {
		PainterView,
		PainterTree,
		PainterProperty
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
