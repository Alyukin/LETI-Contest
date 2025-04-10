import { createRouter, createWebHistory } from 'vue-router'
import Travel from './components/Travel.vue'
import HomePage from './HomePage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage, name: 'Home' },
    { path: '/travel', component: Travel, name: 'Travel' },
  ],
})

export default router
