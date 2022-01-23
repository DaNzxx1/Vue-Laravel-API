import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import list from '../views/list.vue'
import edit from '../views/edit.vue'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: '/lista',
    name: 'lista',
    component: list
  },
  {
    path: '/editar/:usuario',
    name: 'editar',
    component: edit
  },
];

const router = new VueRouter({
  routes,
});

export default router;
