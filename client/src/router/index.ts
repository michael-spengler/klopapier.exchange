import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Whipepaper from "@/views/Whipepaper.vue";
import SellWipepaper from "@/views/SellWipePaper.vue";
import Education from "@/views/Education.vue";

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
  },
  {
    path: "/sellWipePaper",
    name: "SellWhipepaper",
    component: SellWipepaper,
  },
  {
    path: "/education",
    name: "Edcation",
    component: Education,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;