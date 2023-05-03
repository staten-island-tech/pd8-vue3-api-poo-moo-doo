<template>
  <h1>Least Popular</h1>
  <div>
    <Bar id="my-chart-id" v-if="loaded" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)
export default {
  name: 'satisfactionChart',
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
    const names = bbNames.cnt
    console.log(names)
    let x = [names]
    this.chartData = {
      labels: ['boy', 'girl'],
      datasets: [
        {
          backgroundColor: ['#ffffff', '#000000'],
          data: x
        }
      ],
      labels: data.map((row) => row.nm),
      datasets: [
        {
          label: 'Boy Names',
          data: data.map((row) => row.brth_yr),
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

<style scoped></style>
