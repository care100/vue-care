import Vue from 'vue'
import 'es6-promise/auto'
import care from './index'

Vue.use(care)

// main component
import App from './App'

const app = new Vue({
	el: 'app',
  // router,
  // store,
  render: h => h(App) // Object spread copying everything from App.vue
})

// actually mount to DOM
// app.$mount('app')
