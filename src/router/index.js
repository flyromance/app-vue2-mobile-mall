import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/Goods'
import Ratings from '@/components/Ratings'
import Seller from '@/components/Seller'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/goods'
    }, {
      path: '/goods',
      // alias: '/',
      name: 'goods',
      component: Goods
    }, {
      path: '/ratings',
      name: 'ratings',
      component: Ratings
    }, {
      path: '/seller',
      name: 'seller',
      component: Seller
    }
  ],
  // linkActiveClass: '',
  linkExactActiveClass: 'active',
  mode: 'history' // 'hash', 'abstract'
})

// router.push('/goods')

export default router
