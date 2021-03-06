import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }],
  },
  {
    path: '/user/:username',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Profile.vue') }],
  },
  {
    path: '/character',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/CharacterProfile.vue') }],
  },
  {
    path: '/articles',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Articles.vue') }],
  },
  {
    path: '/auth',
    component: () => import('layouts/MinimalisticLayout.vue'),
    children: [{ path: '', component: () => import('pages/Auth.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
