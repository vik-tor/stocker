import { createRouter, createWebHistory } from "vue-router";
import { isAdmin, isLoggedIn } from './utils/auth';

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { requiresAuth: true, admin: false },
    component: () =>
      import(/* webpackChunkName: "devices" */ "./views/Home"),
  },
  {
    path: "/devices",
    name: "devices",
    props: true,
    meta: { requiresAuth: true, admin: false },
    component: () =>
      import(/* webpackChunkName: "devices" */ "./views/Devices"),
  },
  {
    path: "/accessories",
    name: "accessories",
    props: true,
    meta: { requiresAuth: true, admin: false },
    component: () =>
      import(/* webpackChunkName: "accessories" */ "./views/Accessories"),
  },
  {
    path: "/repairs",
    name: "repairs",
    props: true,
    meta: { requiresAuth: true, admin: false },
    component: () =>
      import(/* webpackChunkName: "repairs" */ "./views/Repairs"),
  },
  {
    path: "/new/import",
    name: "import",
    meta: { requiresAuth: true, admin: false },
    component: () => import(/* webpackChunkName: "import" */ "./views/Import"),
  },
  {
    path: "/new/device",
    name: "new_device",
    meta: { requiresAuth: true, admin: false },
    component: () => import(/* webpackChunkName: "new_device" */ "./views/NewDevice"),
  },
  {
    path: "/new/accessory",
    name: "new_accessory",
    meta: { requiresAuth: true, admin: false },
    component: () => import(/* webpackChunkName: "new_accessory" */ "./views/NewAccessory"),
  },
  {
    path: "/search",
    name: "search",
    props: true,
    meta: { requiresAuth: true, admin: false },
    component: () =>
      import(/* webpackChunkName: "search" */ "./views/Results"),
  },
  {
    path: "/sales",
    name: "sales",
    props: true,
    meta: { requiresAuth: true, admin: false },
    component: () => import(/* webpackChunkName: "sales" */ "./views/Sales"),
  },
  {
    path: "/profile",
    name: "profile",
    meta: { requiresAuth: true, admin: false },
    component: () => import(/* webpackChunkName: "profile" */ "./views/Profile"),
  },
  {
    path: "/users",
    name: "users",
    props: true,
    meta: { requiresAuth: true, admin: true },
    component: () => import(/* webpackChunkName: "users" */ "./views/Users"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    meta: { requiresAuth: false, admin: false },
    component: () => import(/* webpackChunkName: 'NotFound' */ "./views/404"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.admin && !isAdmin()) {
    router.addRoute({
      path: '/unauthorised',
      name: '401',
      component: () => import(/* webpackChunkName: 'Unauthorised' */ './views/401')
    })
    next({
      name: '401'
    });
  }
  else {
    next();
  }
});

export default router;