import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import loading from '@/components/loading'
import load from '@/components/module/load'
import sync from '@/components/sync'



Vue.use(Router)

export default new Router({
  // 使用路由的模式 这种模式充分利用了history.pushState API
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/loading',
      name: 'loading',
      component: loading
    },
    {
      path: '/load',
      name: 'load',
      component: load
    },
    {
      path: '/sync',
      name: 'sync',
      component: sync
    }
  ]
})
