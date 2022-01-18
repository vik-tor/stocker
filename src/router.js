import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add_product",
    name: "new_product",
    component: () => import(/* webpackChunkName: "new" */ "../views/New"),
  },
  {
    path: "/edit_product/:id",
    name: "edit_product",
    component: () => import(/* webpackChunkName: "edit" */ "../views/Edit"),
  },
  {
    path: '/signin',
    name: 'signin',
    props: route => ({ dest: route.query.dest }),
    component: () => import(/* webpackChunkName: "login" */ '../views/auth/SignIn')
  },
  {
    path: '/signup',
    name: 'signup',
    props: route => ({ dest: route.query.dest }),
    component: () => import(/* webpackChunkName: "signup" */ '../views/auth/SignUp')
  },
  {
    path: "/profile",
    name: "profile",
    redirect: "/profile/ads",
    component: () => import(/* webpackChunkName: "profile" */ "../views/Profile"),
  },
  {
    path: "/stock",
    name: "results",
    props: true,
    component: () =>
      import(/* webpackChunkName: "results" */ "../views/Results"),
    children: [
      {
        path: "search",
        name: "filter",
        props: true,
        component: () =>
          import(/* webpackChunkName: "filter" */ "../views/Search"),
      },
    ],
  },
  {
    path: "/sales",
    name: "sold",
    props: true,
    component: () => import(/* webpackChunkName: "ad" */ "../views/Sales"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    meta: { requiresAuth: false },
    component: () => import(/* webpackChunkName: 'NotFound' */ "../views/404"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
  routes,
});

export default router;