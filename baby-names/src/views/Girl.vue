<template>
  <div id="graph">
    <canvas id="girlsChart"></canvas>
<<<<<<< HEAD
    <h1>THE GALS</h1>
  </div>
=======
  </div>
  <h1>THE GALS</h1>
>>>>>>> parent of d88264c (Revert "hi we did it!!")
</template>

<script setup>
import Chart from 'chart.js/auto'
import { ref, onMounted } from 'vue'

const babyNames = ref('')

async function getBoys() {
  let response = await fetch('https://data.cityofnewyork.us/resource/25th-nujf.json')
  let data = await response.json()
  babyNames.value = data
  console.log(data)

  const girls = data.filter((data) => data.gndr === 'FEMALE')

  const ctx = document.getElementById('girlsChart')
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: girls.map((row) => row.nm),
      datasets: [
        {
          label: 'Count of ',
          data: girls.map((row) => row.cnt),
          borderWidth: 2
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })
}
onMounted(() => {
  getBoys()
})
</script>

<style scoped>
#graph {
  background-color: rgba(240, 248, 255, 0.555);
}
</style>
