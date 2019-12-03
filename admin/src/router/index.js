import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Main from '../views/Main'

import CategroyEdit from '../views/CategoryEdit'
import CategroyList from '../views/CategoryList'

import ItemEdit from '../views/ItemEdit'
import ItemList from '../views/ItemList'

import StudentEdit from '../views/StudentEdit'
import StudentList from '../views/StudentList'

import ArticleEdit from '../views/ArticleEdit'
import ArticleList from '../views/ArticleList'

import AdEdit from '../views/AdEdit'
import AdList from '../views/AdList'

import AdminUserEdit from '../views/AdminUserEdit'
import AdminUserList from '../views/AdminUserList'

Vue.use(VueRouter)

const router = new VueRouter({
  routes : [
    {path:'/login',name:'login',component:Login,meta:{isPublic:true}},
    {
      path: '/',
      name: 'main',
      component: Main,
      children:[
        {
          path: '/categories/create',
          component: CategroyEdit
        },
        {
          path: '/categories/edit/:id',
          component: CategroyEdit,props:true
        },
        {
          path: '/categories/list',
          component: CategroyList
        },

        {path:'/items/create',component:ItemEdit},
        {path:'/items/edit/:id',component:ItemEdit,props:true},
        {path:'/items/list',component:ItemList},

        {path:'/students/create',component:StudentEdit},
        {path:'/students/edit/:id',component:StudentEdit,props:true},
        {path:'/students/list',component:StudentList},

        {path:'/articles/create',component:ArticleEdit},
        {path:'/articles/edit/:id',component:ArticleEdit,props:true},
        {path:'/articles/list',component:ArticleList},

        {path:'/ads/create',component:AdEdit},
        {path:'/ads/edit/:id',component:AdEdit,props:true},
        {path:'/ads/list',component:AdList},

        {path:'/admin_users/create',component:AdminUserEdit},
        {path:'/admin_users/edit/:id',component:AdminUserEdit,props:true},
        {path:'/admin_users/list',component:AdminUserList},
      ]
    },
  ]
})

// 客户端的限制
router.beforeEach((to, from ,next) => {
  if (!to.meta.isPublic && !localStorage.token) {
    return next('/login')
  }
  next()
})
export default router
