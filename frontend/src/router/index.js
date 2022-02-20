import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'
import Signup from '../views/SignupView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
]

const router = new VueRouter({
  routes
})

export default router
