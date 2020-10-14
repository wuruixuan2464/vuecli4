import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import(/* webpackChunkName: "Home" */ '../views/home/Home.vue')
const Fenlei = () => import(/* webpackChunkName: "Fenlei" */ '../views/fenlei/Fenlei.vue')
const Shop = () => import(/* webpackChunkName: "Shop" */ '../views/shop/Shop.vue')
const Profile = () => import(/* webpackChunkName: "Profile" */ '../views/profile/Profile.vue')
const Detail = () => import(/* webpackChunkName: "Profile" */ '../views/detail/Detail.vue')
const routes = [
  {
    path: '',
    redirect: "/home"
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }, {
    path: '/fenlei',
    name: 'Fenlei',
    component: Fenlei
  }, {
    path: '/shop',
    name: 'Shop',
    component: Shop
  }, {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }, {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
