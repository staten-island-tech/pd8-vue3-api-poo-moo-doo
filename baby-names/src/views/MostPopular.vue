<template>
  <h1>Most Popular</h1>
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

  const ctx = document.getElementById('boysChart')
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map((row) => row.nm),
      datasets: [
        {
          label: 'Boy Names',
          data: data.map((row) => row.brth_yr),
          borderWidth: 1
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

<style></style>
