<template>
  <h1>Least Popular</h1>
  <div class="container">
    <Bar v-if="loaded" :data="chartData" />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data: () => ({
    loaded: false,
    chartData: {
      labels: [],
      datasets: []
    }
  }),
  async mounted() {
    this.loaded = false
    try {
      const { babies } = await fetch('https://data.cityofnewyork.us/resource/25th-nujf.json')
      this.chartdata = babies
      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style scoped></style>
