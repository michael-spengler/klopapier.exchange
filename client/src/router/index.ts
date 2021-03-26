import { createRouter, createWebHashHistory } from "vue-router";
import Home from  "@/views/home/home.vue";
import BuyWipePaper from "@/views/buyWipePaper/buyWipePaper.vue";
import SellWipepaper from "@/views/sellWipePaper/sellWipePaper.vue";
import Coin from "@/views/coin/coin.vue";
import Education from "@/views/education/education.vue";
import DepositEther from "@/views/depositEther/depositEther.vue";
import BorrowWipePaper from "@/views/borrowWipePaper/borrowWipePaper.vue";
import Play from "@/views/play/play.vue";
import EducationInsight from '@/views/educationInsight/educationInsight.vue';

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
  },
  {
    path:"/educationInsight/:education",
    name:"EducationInsight",
    component:EducationInsight,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;