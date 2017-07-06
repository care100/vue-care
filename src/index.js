// import Vue from 'vue';
import progressBar from './components/progress-bar';
console.log(999)
const components = [progressBar];

const install = function(Vue, opts = {}) {
	if (Vue._components_installed) return;
	Vue._components_installed = true;

	//register components
	components.map(component => {
	    Vue.component(component.name, component);
	});
};

var progressBar = {
	version: 0.0.1,
	install
}

Vue.use(progressBar)
Vue.component('progress-bar', progressBar);

export default progressBar