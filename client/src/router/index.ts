import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import BuyWipePaper from "@/views/BuyWipePaper.vue";
import SellWipepaper from "@/views/SellWipePaper.vue";
import Coin from "@/views/Coin.vue";
import Education from "@/views/Education.vue";
import DepositEther from "@/views/DepositEther.vue";
import BorrowWipePaper from "@/views/BorrowWipePaper.vue";
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
    path: "/depositEther",
    name: "DepositEther",
    component: DepositEther,
  },
  {
    path: "/borrowWipePaper",
    name: "BorrowWipePaper",
    component: BorrowWipePaper,
  },
  {
    path: "/sellWipePaper",
    name: "SellWipePaper",
    component: SellWipepaper,
  },
  {
    path: "/coins",
    name: "Coin",
    component: Coin,
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
  history: createWebHashHistory(),
  routes,
});

export default router;