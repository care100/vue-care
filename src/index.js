import Vue from 'vue';
import progressBar from './components/progress-bar';
const components = [progressBar];

const install = function(Vue, opts = {}) {
	if (Vue._components_installed) return;
	Vue._components_installed = true;

	//register components
	components.map(component => {
	    Vue.component(component.name, component);
	});
};
export default {
	version: 0.0.1,
	install
}