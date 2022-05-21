import { createRouter, createWebHistory } from 'vue-router';
import HomeCart from '../views/HomeCard.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeCart,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../components/AboutCard.vue'),
  },
  {
    path: '/photo',
    name: 'photo',
    component: () => import('../components/PhotosCard.vue'),
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: () => import('../components/CatalogCard.vue'),
  },
  {
    path: '/coment',
    name: 'coment',
    component: () => import('../components/ComentCard.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../components/ContactCard.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
