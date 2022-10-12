<template>
  <div>
    <div class="container">
      <button id="btn" v-on:click="LoadData">
        <div v-if="!getPreloader">Загрузить данные</div>
        <div v-if="getPreloader" class="loader"></div>
      </button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  methods: {
    ...mapActions({
      LoadData: "LoadData",
    }),
  },
  computed: {
    ...mapGetters({
      getPreloader: "getPreloader",
    }),
  },
};
</script>

<style>
.btn_disabled:hover {
  background-color: rgb(241, 154, 60) !important;
  cursor: not-allowed;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  width: 90%;
  margin-right: auto;
  margin-left: auto;
}
.loader {
  display: block;
  margin: 0 auto;
  border: 3px solid #ffffff;
  border-radius: 50%;
  border-top: 3px solid rgba(100, 100, 100, 0);
  width: 20px;
  height: 20px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  cursor: not-allowed;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
button {
  width: 30%;
  display: block;
  margin: 0 auto;
  background-color: rgb(241, 154, 60);
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: block;
  font-family: Gilroy, Arial, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 22px;
  line-height: 20px;
  border-radius: 40px;
}
@media screen and (min-width: 475px) and (max-width: 680px) {
  button {
    width: 80%;
  }
}
@media screen and (min-width: 320px) and (max-width: 475px) {
  button {
    width: 100%;
  }
}

button:hover {
  background-color: black;
}
button:hover:after {
  background-color: #575757;
}
button:active {
  background-color: #575757;
}
</style>
