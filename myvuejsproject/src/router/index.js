import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import DetailUser from '../views/Detail.vue';
import Api from '../views/Api.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/detailsUser/:id',
    name: 'Details',
    component: DetailUser,
  },
  {
    path: '/api',
    name: 'Api',
    component: Api,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
