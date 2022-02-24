import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'
import Signup from '../views/SignupView.vue'
import Feed from '../views/FeedView.vue'
import Profil from '../views/ProfilView.vue'


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
  {
    path:'/feed',
    name: 'Feed',
    component: Feed
  },
  {
    path:'/profil',
    name: 'Profil',
    component: Profil
  }
  ]

const router = new VueRouter({
  routes
})

export default router
