import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import Login from '@/views/Login'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {path: '/fx', component: Fx, name: 'fx'},
        {path: '/star', component: Star, name: '星光'},
        {path: '/coc', component: Coc, name:'COC'},
        {path: '/speak', component: Speak, name:'口胡'},
        {Path: '/run', component:Run, name: '跑团'},
        {path: '/Start', component: Start, name: '开团'},
        {path: '/Mng', component: Mng, name: '管理'}
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

export default router
