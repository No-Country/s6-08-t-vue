import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/CFHomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CFAboutView.vue"),
    },
    {
      path: "/detail",
      name: "detail",
      component: () => import("../views/CFDetailView.vue"),
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("../views/CFProjectsView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/CFLoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/CFRegisterView.vue"),
    },
  ],
});

export default router;
