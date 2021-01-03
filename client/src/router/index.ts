import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import BuyWipePaper from "@/views/BuyWipePaper.vue";
import SellWipepaper from "@/views/SellWipePaper.vue";
import Education from "@/views/Education.vue";
import Play from "@/views/Play.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/buyWipePaper",
    name: "BuyWipePaper",
    component: BuyWipePaper,
  },
  {
    path: "/sellWipePaper",
    name: "SellWipePaper",
    component: SellWipepaper,
  },
  {
    path: "/play",
    name: "Play",
    component: Play,
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