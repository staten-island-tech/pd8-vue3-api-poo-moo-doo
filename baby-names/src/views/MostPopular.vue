<template>
  <div>
    <h2>Most Popular</h2>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const babies = ref('')
async function getBabies() {
  let res = await fetch('https://data.cityofnewyork.us/resource/25th-nujf.json')
  let data = await res.json()
  babies.value = data.results
}
onMounted(() => {
  getBabies()
})
</script>

<style></style>
