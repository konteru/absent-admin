import Vue from 'vue'
import App from './App.vue'
import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'
import VueRouter from 'vue-router'
import home from '@/components/index/Home.vue'
import login from '@/components/index/IndexFormLogin.vue'
import employee from '@/components/employee/employee-index.vue'
import vueHeadful from 'vue-headful'

Vue.component('vue-headful', vueHeadful)
Vue.use(VueRouter)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false
Vue.use(require('vue-cookies'))

const router = new VueRouter({
  routes:[
    {path:'/',component:home,name:'Home'},
    {path: '/login', component: login ,name:'Login'},
    {path: '/employee', component: employee ,name:'Employee'}
  ]
})
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
}).$mount('#app')