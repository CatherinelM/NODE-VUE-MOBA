import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main'
import CategroyEdit from '../views/CategoryEdit'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children:[
      {
        path: '/categories/create',
        component: CategroyEdit
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
