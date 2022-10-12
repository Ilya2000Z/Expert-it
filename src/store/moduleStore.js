//***********************This stor module VUEX**************************** */
// Hear exsist state whith data, getters state, mutation state, action who has Louder function.

import router from "@/router";
import { SortArr } from "@/SortFunction"; //function call in action when user push button
export const moduleStore = {
  state: () => ({
    data: [],
    chartArr: [],
    preloader: false,
  }),
  getters: {
    SortObject(state) {
      return state.data;
    },
    getPreloader(state) {
      return state.preloader;
    },
    getChartArr(state) {
      return state.chartArr;
    },
  },
  mutations: {
    setData(state, resault) {
      state.data.push(resault);
    },
    setpreloader(state, loader) {
      state.preloader = loader;
    },
    setChartArr(state, chartArr) {
      state.chartArr = chartArr;
    },
  },
  actions: {
    //**************Action get data from server*************** */
    LoadData({ commit }) {
      commit("setpreloader", true);
      fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((result) => {
          // Hear we get data and commit it to state (it usased in this task, instead we can use localStorage, or anything else)
          commit("setData", SortArr(result));
          commit("setpreloader", false);
          router.push("/getdata");
        });
    },
    SortChartArr({ commit }) {
      if (this.getters.SortObject.length === 0) {
        router.push("/");
      } else {
        var arr = Object.values(this.getters.SortObject[0]);
        var Chart = [];
        for (var i = 0; i < arr.length; i++) {
          Chart.push({
            userId: arr[i][1][1].userId,
            completedTrue: Math.trunc(arr[i][0]),
            completedFalse: arr[i][1].length - Math.trunc(arr[i][0]),
          });
        }
        commit("setChartArr", Chart);
      }
    },
  },
};
