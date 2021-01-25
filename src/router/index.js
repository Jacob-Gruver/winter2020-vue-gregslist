import { createRouter, createWebHashHistory } from 'vue-router'
// @ts-ignore
import CarDetailsPage from '../pages/CarDetailsPage.vue'
// @ts-ignore
import CarsPage from '../pages/CarsPage.vue'
// @ts-ignore
import HousePage from '../pages/HousePage.vue'

const routes = [
  {
    path: '/cars',
    name: 'Cars',
    component: CarsPage
  }, {
    path: '/cars/:id',
    name: 'CarDetails',
    component: CarDetailsPage
  }, {
    path: '/:catchAll(.*)*',
    redirect: '/cars',
    component: null
  }, {
    path: '/houses',
    name: 'House',
    component: HousePage
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
