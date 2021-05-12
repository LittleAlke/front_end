import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import About from '../views/About.vue'
// import User from '../views/User.vue'

const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
const User = () => import('../views/User.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: About
    component: About
  },{
    path: '/user/:userId',
    name: 'User',
    // component: User 
    component: User
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
