import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Example1 from "@/views/Example1.vue";
import Example2 from "@/views/Example2.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/1",
    name: "Example1",
    component: Example1,
  },
  {
    path: "/2",
    name: "Example2",
    component: Example2,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;