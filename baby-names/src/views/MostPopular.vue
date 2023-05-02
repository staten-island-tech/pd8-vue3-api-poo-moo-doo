<template>
  <h1>Most Popular</h1>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const babies = ref('')
async function getBabies() {
  let res = await fetch('https://data.cityofnewyork.us/resource/25th-nujf.json')
  let data = await res.json()
  babies.value = data
}
onMounted(() => {
  getBabies()
})
</script>

<style></style>
