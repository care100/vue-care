import progressBar from './src/components/progress-bar';

const components = {'progress-bar': progressBar};

const install = function(Vue, opts = {}) {
	if (Vue._components_installed) return;
	Vue._components_installed = true;

	//register components
	for (var component in components) {
		Vue.component(component, components[component]);
		// debugger
	}
};

export default {
	version: '0.0.1',
	install: install
}