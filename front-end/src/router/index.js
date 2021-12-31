import { createRouter, createWebHashHistory } from "vue-router";
import Log from "../views/Log.vue";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";

const routes = [
  {
    path: "/",
    name: "Log",
    component: Log,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
