import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import About from '../views/About.vue'
// import User from '../views/User.vue'

const Home = () => import('../views/Home.vue')
const HomeNews = () => import('../views/HomeNews.vue')
const HomeMessage = () => import('../views/HomeMessage.vue')

const About = () => import('../views/About.vue')
const User = () => import('../views/User.vue')
const Profile = () => import('../views/Profile.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: About
    component: About,
    meta: {
      title: '关于'
    },
  },
  {
    path: '/user/:userId',
    name: 'User',
    component: User,
    meta: {
      title: '用户'
    },
  },
  {
    path: '/prof',
    name: 'Profile',
    component: Profile,
    meta: {
      title: '档案'
    },
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// 全局守卫
// 前置守卫（guard）
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})
// 后置钩子（hook）
router.afterEach()

export default router
