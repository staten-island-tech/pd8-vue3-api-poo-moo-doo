<template>
  <div id="graph">
    <h1>THE GALS</h1>
    <canvas id="girlsChart"></canvas>
  </div>
  <h1>THE GALS</h1>
</template>

<script setup>
import Chart from 'chart.js/auto'
import { ref, onMounted } from 'vue'

const babyNames = ref('')

async function getGirls() {
  let response = await fetch('https://data.cityofnewyork.us/resource/25th-nujf.json')
  let data = await response.json()
  babyNames.value = data
  console.log(data)

  const girls = data.filter((data) => data.gndr === 'FEMALE' && data.rnk < 11)
  console.log(girls.sort())

  const ctx = document.getElementById('girlsChart')

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: girls.map((row) => row.nm),
      datasets: [
        {
          label: '# of Times Used',
          data: girls.map((row) => row.cnt),
          borderWidth: 1
        }
      ]
    },
    options: {
      indexAxis: 'y',
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })
}
onMounted(() => {
  getGirls()
})
</script>

<style scoped>
#graph {
  background-color: rgba(240, 248, 255, 0.555);
}
</style>
