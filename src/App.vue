<template>
	<div id="app">
    <el-row>
			<el-col :span="18">
				<painter-view />
			</el-col>
			<el-col :span="6">
				<painter-tree />
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
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
