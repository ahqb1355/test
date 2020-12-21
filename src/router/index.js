import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/home.vue'

//这是路由懒加载
const home=()=>import("../views/home/home.vue")
const cart=()=>import("../views/cart/cart.vue")
const profile=()=>import("../views/profile/profile.vue")
const category=()=>import("../views/category/category.vue")

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: home
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/cart',
    component: cart
  },
  {
    path: '/profile',
    component: profile
  },
  {
    path: '/category',
    component: category
  }
  
    // path: '/about',
    // name: 'About',
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  
]

const router = new VueRouter({
  routes
})

export default router
