import { createStore } from "vuex";
import { moduleStore } from "./moduleStore";
export default createStore({
  modules: {
    post: moduleStore,
  },
});
