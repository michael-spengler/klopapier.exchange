import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Whipepaper from "@/views/Whipepaper.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/whipepaper",
    name: "Whipepaper",
    component: Whipepaper,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;