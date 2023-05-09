<template>
  <div id="graph">
    <h1>THE BOYS</h1>
    <canvas id="boysChart"></canvas>
  </div>
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

  const boys = data.filter((data) => data.gndr === 'MALE' && data.rnk < 11)

  const ctx = document.getElementById('boysChart')
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: boys.map((row) => row.nm),
      datasets: [
        {
          label: '# of Times Used',
          data: boys.map((row) => row.cnt),
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
  getBoys()
})
</script>

<style scoped>
#graph {
  background-color: rgba(240, 248, 255, 0.555);
}
</style>
