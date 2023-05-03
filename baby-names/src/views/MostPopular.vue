<template>
  <div>
    <h1>Most Popular</h1>
    <canvas id="mostChart"></canvas>
  </div>
</template>

<script setup>
import Chart from 'chart.js/auto'
import { ref, onMounted } from 'vue'

const babyNames = ref('')

async function getMost() {
  let response = await fetch('https://data.cityofnewyork.us/resource/25th-nujf.json')
  let data = await response.json()
  babyNames.value = data
  console.log(data)


  const most = data.filter((data) => data.rnk < 11)
  most.rnk.sort();

  const ctx = document.getElementById('mostChart')
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: most.map((row) => row.nm),
      datasets: [
        {
          label: '# of Times Used',
          data: most.map((row) => row.cnt),
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
  getMost()
})
</script>

<style></style>
