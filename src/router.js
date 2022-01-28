import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";

const routes = [
  {
    path: '/signin',
    name: 'signin',
    props: route => ({ dest: route.query.dest }),
    component: () => import(/* webpackChunkName: "login" */ './views/Signin')
  },
  {
    path: '/signup',
    name: 'signup',
    props: route => ({ dest: route.query.dest }),
    component: () => import(/* webpackChunkName: "signup" */ './views/Signup')
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/devices",
    name: "devices",
    props: true,
    component: () =>
      import(/* webpackChunkName: "devices" */ "./views/Devices"),
  },
  {
    path: "/accessories",
    name: "accessories",
    props: true,
    component: () =>
      import(/* webpackChunkName: "accessories" */ "./views/Accessories"),
  },
  {
    path: "/repairs",
    name: "repairs",
    props: true,
    component: () =>
      import(/* webpackChunkName: "repairs" */ "./views/Repairs"),
  },
  {
    path: "/device",
    name: "new_device",
    component: () => import(/* webpackChunkName: "new_device" */ "./views/NewDevice"),
  },
  {
    path: "/accessory",
    name: "new_accessory",
    component: () => import(/* webpackChunkName: "new_accessory" */ "./views/NewAccessory"),
  },
  {
    path: "/search",
    name: "search",
    props: true,
    component: () =>
      import(/* webpackChunkName: "search" */ "./views/Results"),
  },
  {
    path: "/sales",
    name: "sales",
    props: true,
    component: () => import(/* webpackChunkName: "sales" */ "./views/Sales"),
  },
  {
    path: "/profile",
    name: "profile",
    redirect: "/profile",
    component: () => import(/* webpackChunkName: "profile" */ "./views/Profile"),
  },
  {
    path: "/users",
    name: "users",
    props: true,
    component: () => import(/* webpackChunkName: "users" */ "./views/Users"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    meta: { requiresAuth: false },
    component: () => import(/* webpackChunkName: 'NotFound' */ "./views/404"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
  routes,
});

export default router;