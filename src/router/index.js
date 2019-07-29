import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/home/Home'
// import City from '../pages/city/City'
const Home = () => import('@/pages/home/Home')
const City = () => import('../pages/city/City')
const Detail = () => import('@/pages/detail/Detail')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/city',
      name: 'City',
      component: City
    },{
      path: '/detail/:id',
      name: Detail,
      component: Detail
    }
  ],scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
