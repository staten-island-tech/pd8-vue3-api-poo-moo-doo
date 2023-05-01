<template>
  <h1>THE BOYS</h1>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const babyNames = ref('')
const url = "https://data.cityofnewyork.us/resource/25th-nujf"
async function getBoys() {
  let response = await fetch('https://data.cityofnewyork.us/resource/25th-nujf.json')
  let data = await response.json()
  babyNames.value = data
  console.log(data)
}
onMounted(() => {
  getBoys()
})
</script>

<style lang="scss" scoped></style>
