<template>
  <div class="box">
    <Bar
      :chart-options="chartOptions"
      :chart-data="chartData"
      :display="true"
      :align="'center'"
      :color="'red'"
    />
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { mapGetters, mapActions } from "vuex";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
var labels = [];
var dataTrue = [];
var dataFalse = [];
export default {
  name: "BarChart",
  methods: {
    ...mapActions({
      SortChartArr: "SortChartArr",
    }),
    GetValues() {
      for (var a = 0; a < this.getChartArr.length; a++) {
        labels.push(this.getChartArr[a].userId);
        dataTrue.push(this.getChartArr[a].completedTrue);
        dataFalse.push(this.getChartArr[a].completedFalse);
      }
    },
  },
  beforeMount() {
    this.SortChartArr(), this.GetValues();
  },
  computed: {
    ...mapGetters({
      getChartArr: "getChartArr",
    }),
  },
  components: { Bar },

  data() {
    return {
      type: "Bar",
      chartData: {
        labels: labels,
        datasets: [
          {
            label: "completed true",
            data: dataTrue,
            backgroundColor: "blue",
            display: true,
            text: "test",
          },
          { label: "completed false", data: dataFalse, backgroundColor: "red" },
        ],
      },
      chartOptions: {
        responsive: true,
        scales: {
          y: {
            title: {
              display: true,
              text: "Completed",
            },
          },
          x: {
            title: {
              display: true,
              text: "userId",
            },
          },
        },
      },
    };
  },
};
</script>

<style scoped>
.box {
  width: 30%;
  height: 30%;
  margin: 0 auto;
}
@media screen and (min-width: 320px) and (max-width: 475px) {
  .box {
    width: 82%;
  }
}
@media screen and (min-width: 475px) and (max-width: 768px) {
  .box {
    width: 70%;
  }
}
</style>
