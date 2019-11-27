import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'

Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './style.css'

Vue.use(ElementUI);


// 把http加载到vue实例属性原型上 任何地方都可以访问http属性接口
import http from './http'
Vue.prototype.$http = http

Vue.mixin({
  methods:{
    getAuthHeaders(){
      return{
          Authorization:`Bearer ${localStorage.token || ''}`
      }
    }
  }

})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
