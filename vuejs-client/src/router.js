import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AddProject from '@/views/AddProject.vue'
import ExportSettings from '@/views/ExportSettings.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/addproject',
      name: 'addproject',
      component: AddProject
    },
    {
      path: '/exportsettings',
      name: 'exportsettings',
      component: ExportSettings
    }
  ]
})
