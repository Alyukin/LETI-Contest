import { createRouter, createWebHistory } from 'vue-router'
import TravelTour from './Pages/TravelTour.vue'
import HomePage from './Pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage, name: 'Home' },
    { path: '/travel', component: TravelTour, name: 'TravelTour' },
  ],
})

export default router
