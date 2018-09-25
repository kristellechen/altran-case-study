import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'

import Multiselect from 'vue-multiselect'
import Toasted from 'vue-toasted'

import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import 'vue-multiselect/dist/vue-multiselect.min.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(Toasted)
Vue.use(Multiselect)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
