import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import Login from '@/views/Login'
import Fx from '@/views/Fx'
import Star from '@/views/Star'
import COC from '@/views/COC'
import Speak from '@/views/Speak'
import Game from '@/views/Game'
import Start from '@/views/Start'
import Mng from '@/views/Mng'

import Main from '@/components/Main/index'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect:'/Main',
      component: HelloWorld,
      children:[
        {path: '/Fx', component: Fx, name: 'fx'},
        {path: '/Star', component: Star, name: '星光'},
        {path: '/Coc', component: COC, name:'COC'},
        {path: '/Speak', component: Speak, name:'口胡'},
        {path: '/Game', component: Game, name:'跑团'},
        {path: '/Start', component: Start, name: '开团'},
        {path: '/Mng', component: Mng, name: '管理'}
      ]
    },
    {
      path: 'Main',
      name: 'Main',
      component: Main
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

export default router
