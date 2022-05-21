import { createRouter, createWebHistory } from 'vue-router';
import HomeCart from '../views/HomeCart.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeCart,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
