import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/BackToHome',
    name: 'BackToHome',
    component: () => import('../views/BackToOne.vue')
  },
  {
    path: '/BackToTwo',
    name: 'BackToTwo',
    component: () => import('../views/BackToTwo.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
