import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/headphones",
    name: "Headphones",
    component: () => import("../views/Headphones.vue"),
  },
  {
    path: "/speakers",
    name: "Speakers",
    component: () => import("../views/Speakers.vue"),
  },
  {
    path: "/earphones",
    name: "Earphones",
    component: () => import("../views/Earphones.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
