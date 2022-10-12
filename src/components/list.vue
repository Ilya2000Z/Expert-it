<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="container" v-for="item in SortObject[0]" :key="item">
          <div class="row rowCompleted">
            <div class="user">Пользователь: {{ item[1][1].userId }}</div>
            <div class="row user">
              <div class="completedTrue">{{ Math.trunc(item[0]) }}</div>
              <div>/</div>
              <div class="completedFalse">
                {{ item[1].length - Math.trunc(item[0]) }}
              </div>
            </div>
          </div>
          <ul class="lines">
            <li class="listItem cutItem" v-for="title in item[1]" :key="title">
              {{ title.title }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <chart></chart>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import chart from "./chart.vue";
export default {
  name: "ListProps",
  computed: {
    ...mapGetters({
      SortObject: "SortObject",
    }),
  },
  components: { chart },
};
</script>
<style scoped>
.container-fluid {
  width: 90%;
  margin-right: auto;
  margin-left: auto;
}
.container {
  width: 28%;
  margin-right: auto;
  margin-left: auto;
  background-color: antiquewhite;
  margin: 10px;
  position: relative;
  border-radius: 20px;
  border: 5px solid rgb(137, 87, 243);
}
.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(var(--bs-gutter-y) * -1);
}
.card {
  padding: 30px;
  background-color: antiquewhite;
  margin: 10px;
}
.lines {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: all 0.4s ease;
}
.container:hover {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}
.container .lines:hover {
  -webkit-line-clamp: unset;
  position: absolute;
  z-index: 2;
  background-color: antiquewhite;
  width: -webkit-fill-available;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin: 0 -5px;
  border-bottom: 5px solid rgb(137, 87, 243);
  border-left: 5px solid rgb(137, 87, 243);
  border-right: 5px solid rgb(137, 87, 243);
}
.completedTrue {
  color: rgb(18, 206, 18);
}
.completedFalse {
  color: red;
}
.rowCompleted {
  display: flex;
  justify-content: space-between !important;
}
.listItem {
  text-align: start;
}
.user {
  padding: 5px;
}
.container-fluid .row {
  justify-content: center;
}
@media screen and (min-width: 475px) and (max-width: 560px) {
  .container {
    width: 76%;
  }
}
@media screen and (min-width: 560px) and (max-width: 768px) {
  .container {
    width: 40%;
  }
}
@media screen and (min-width: 320px) and (max-width: 475px) {
  .container {
    width: 100%;
  }
}
</style>
