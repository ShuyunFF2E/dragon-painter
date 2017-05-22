<template>
	<div class="hello">
		<select v-model="selectedComponent">
			<option v-for="val in components" :value="val">{{val}}</option>
		</select>

		<div>

			<p style="width: 40%;display: inline-block;vertical-align: top">props: {{selectedComponentProps}}</p>
			<ul style="width: 40%;text-align: left;display: inline-block">
				<li v-for="(value, key) in selectedComponentProps">
					<span :text-content.prop="key"></span>
					<span>:</span>
					<span :text-content.prop="value.type"></span>
					<span :text-content.prop="value.required ? '*' : ''"></span>
					<input type="text" :placeholder="value.default">
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import * as components from 'element-ui';
	import _ from 'lodash';

	/**
	 * Use function string name to check built-in types,
	 * because a simple equality check will fail when running
	 * across different vms / iframes.
	 */
	function getType(fn) {
		const match = fn && fn.toString().match(/^\s*function (\w+)/);
		return match ? match[1] : '';
	}

	function getProps(originProps) {

		const props = {};

		Object.keys(originProps).forEach(prop => {

			const value = originProps[prop];

			if (_.isFunction(value)) {
				props[prop] = {
					type: getType(value)
				};
			} else if (_.isFunction(value.type)) {
				value.type = getType(value.type);
				props[prop] = value;
			} else if (_.isArray(value)) {
				props[prop] = {
					// eslint-disable-next-line no-extra-parens
					type: value.map(v => (_.isFunction(v) ? getType(v) : v))
				};
			} else if (_.isArray(value.type)) {
				// eslint-disable-next-line no-extra-parens
				value.type = value.type.map(v => (_.isFunction(v) ? getType(v) : v));
				props[prop] = value;
			} else {
				props[prop] = value;
			}

			if (_.isFunction(props[prop].default)) {
				props[prop].default = props[prop].default();
			}

		});

		return props;
	}

	export default {
		name: 'hello',
		data() {
			return {

				selectedComponent: '',

				get selectedComponentProps() {
					const props = this.selectedComponent ? components[this.selectedComponent.slice(2)].props || {} : '';
					return getProps(props);
				},

				components: Object.keys(components).map(key => components[key].name)
			};
		}

	};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1, h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>
