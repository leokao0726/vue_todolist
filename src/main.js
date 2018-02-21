// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld'
import TodoList from './pages/todo'
import store from './store'


Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: HelloWorld
    },
    {
      path: '/todo',
      name: 'todo',
      component: TodoList
    },
    { path: '/*', redirect: '/hello' }
  ]
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
