import { createRouter, createWebHistory } from "vue-router";
import List from "./components/list.vue";
import Babel from "./components/babel.vue";

const route = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Babel },
    { path: "/getdata", meta: { auth: true }, name: "name", component: List },
  ],
});
export default route;
