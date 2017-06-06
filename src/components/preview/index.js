/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2017-05-26
 */

import template from './template.html';
import bone from 'dragon-pond/lib/vue-component-compilers/generator/bone';
import muscle from 'dragon-pond/lib/vue-component-compilers/generator/muscle';

export default {

	name: 'preview',
	template,
	props: {
		config: {
			type: Object,
			required: true
		}
	},

	computed: {

		// 动态组件
		component() {
			// compute 不支持收集 异步/回调 中的依赖，所以这里将依赖声明提前
			const tpl = bone(this.config);
			return async () => {
				const ModelClassModule = await import(`@/models/${this.config.model}`);
				const muscles = muscle(ModelClassModule.default);
				return {
					template: tpl,
					...{
						...muscles,
						methods: {
							...muscles.methods,
							__onFocus: cid => {
								this.$emit('component-focus', cid);
							}
						}
					}
				};
			};
		}
	}
};
