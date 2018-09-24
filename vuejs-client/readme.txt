npm install -g @vue/cli
vue create my-project
Select options manually [add router and vuex at a minimum]

npm i bootstrap-vue
add this to main.js
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

npm install @fortawesome/fontawesome-free
add this to main.js
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader

npm install axios
const axios = require('axios');