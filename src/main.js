// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import goods from './components/goods/goods'
import seller from './components/seller/seller'
import ratings from './components/ratings/ratings'

import './common/scss/index.scss'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  {
    path: '/',
    redirect: {path: '/goods'}
  },
  {
    path: '/goods',
    component: goods
  },
  {
    path: '/seller',
    component: seller,
  },
  {
    path: '/ratings',
    component: ratings
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
