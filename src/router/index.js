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
      component: HelloWorld,
      redirect: '/main',
      children:[
        {path: '/fx', component: Fx, name: 'fx'},
        {path: '/star', component: Star, name: '星光'},
        {path: '/coc', component: COC, name:'COC'},
        {path: '/speak', component: Speak, name:'口胡'},
        {path: '/game', component: Game, name:'跑团'},
        {path: '/start', component: Start, name: '开团'},
        {path: '/mng', component: Mng, name: '管理'},
        {path: '/main', component: Main, name: '主页'}
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
