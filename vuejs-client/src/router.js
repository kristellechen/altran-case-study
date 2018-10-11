import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AddProject from '@/views/AddProject.vue'
import UpdateProject from '@/views/UpdateProject.vue'
import ExportSettings from '@/views/ExportSettings.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
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
      path: '/updateproject/:study',
      name: 'updateproject',
      props: true,
      component: UpdateProject
    },
    {
      path: '/exportsettings',
      name: 'exportsettings',
      component: ExportSettings
    }
  ]
})
