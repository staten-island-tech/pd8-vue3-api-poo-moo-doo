<template>
    <div>
<h1>THE BOYS</h1>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const babyNames = ref('')
const url = "https://data.cityofnewyork.us/resource/25th-nujf"
async function getBoys() {
  let response = await fetch(url)
  let data = await response.json()
  babyNames.value = data.results
}
onMounted(() => {
    getBoys()
})


</script>

<style lang="scss" scoped></style>
