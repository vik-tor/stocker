import { createRouter, createWebHistory } from "vue-router";
import { isAdmin, isLoggedIn } from './utils/auth';

const routes = [
  {
    path: "/authentication",
    name: "auth",
    meta: { auth: false },
    component: () => import(/* webpackChunkName: "authentication" */ "./views/layouts/Auth"),
  },
  {
    path: "/home",
    name: "dashboard",
    meta: { auth: true },
    component: () => import(/* webpackChunkName: "dashboard" */ "./views/layouts/Dashboard"),
    children: [
      {
        path: "/",
        name: "home",
        component: () =>
          import(/* webpackChunkName: "devices" */ "./views/Home"),
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
        path: "/new/import",
        name: "import",
        meta: { admin: true },
        component: () => import(/* webpackChunkName: "import" */ "./views/Import"),
      },
      {
        path: "/new/device",
        name: "new_device",
        meta: { admin: true },
        component: () => import(/* webpackChunkName: "new_device" */ "./views/NewDevice"),
      },
      {
        path: "/new/accessory",
        name: "new_accessory",
        meta: { admin: true },
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
        meta: { admin: true },
        component: () => import(/* webpackChunkName: "sales" */ "./views/Sales"),
      },
      {
        path: "/profile",
        name: "profile",
        component: () => import(/* webpackChunkName: "profile" */ "./views/Profile"),
      },
      {
        path: "/users",
        name: "users",
        props: true,
        meta: { admin: true },
        component: () => import(/* webpackChunkName: "users" */ "./views/Users"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    meta: { auth: false },
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
  if (to.meta.auth && !isLoggedIn()) {
    next({
      name: 'auth',
    });
  }
  else if (to.meta.admin && !isAdmin()) {
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