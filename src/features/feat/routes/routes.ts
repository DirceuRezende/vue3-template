import type { RouteRecordRaw } from 'vue-router';
import Home from '../pages/Home';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
];

export default routes;
