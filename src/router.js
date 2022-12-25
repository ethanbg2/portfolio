import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Home from './views/home'
import Work from './views/work'
import About from './views/about'
import ProjectPage from './components/project-page'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: "About",
      path: '/about',
      component: About
    },
    {
      name: "Work",
      path: '/work',
      component: Work
    },
    {
      name: 'Project',
      path: '/project/:id',
      component: ProjectPage
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})
