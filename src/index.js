import progressBar from './components/progress-bar';
const components = [progressBar];

const install = function(Vue, opts = {}) {
	if (Vue._care_installed) {
		return;
	}
	Vue._care_installed = true;

	//register components
	components.map(function(component) {
		Vue.component(component.name, component);
	})
};

export default {
	version: '0.0.1',
	install
}