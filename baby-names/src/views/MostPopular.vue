<template>
  <h1>Most Popular:</h1>
  <div>
    <Bar id="chart" v-if="loaded" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)
export default {
  name: 'BabyChart',
  components: { Bar },
  data() {
    return {
      chartData: null,
      chartOptions: null,
      loaded: false
    }
  },
  async mounted() {
    const babyApi = await fetch('https://data.cityofnewyork.us/resource/25th-nujf.json')
    const bbNames = await babyApi.json()
    const namesArr = bbNames.filter((name) => name.rnk < 11)
    const names = namesArr.sort()
    console.log(names)
    this.chartData = {
      labels: names.map((row) => row.nm),
      datasets: [
        {
          label: 'Count',
          data: names.map((row) => row.cnt),
          borderWidth: 1
        }
      ]
    }
    this.chartOptions = {
      responsive: true
    }
    this.loaded = true
  }
}
</script>

<style scoped>
#chart {
  position: relative;
  height: 40vh;
  width: 80vw;
}
</style>
