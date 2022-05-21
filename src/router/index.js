import { createRouter, createWebHistory } from 'vue-router';
import HomeCart from '../views/HomeCart.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeCart,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../components/AboutCart.vue'),
  },
  {
    path: '/photo',
    name: 'photo',
    component: () => import('../components/PhotosCart.vue'),
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: () => import('../components/CatalogCart.vue'),
  },
  {
    path: '/coment',
    name: 'coment',
    component: () => import('../components/ComentCart.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../components/ContactCart.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
