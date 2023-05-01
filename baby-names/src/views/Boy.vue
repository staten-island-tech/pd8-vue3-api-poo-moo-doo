<template>
  <div>
    <h1>THE BOYS</h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const babyNames = ref('')
async function getBoys() {
  let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
  let data = await response.json()
  babyNames.value = data.results
}
onMounted(() => {
  getBoys()
})
</script>

<style lang="scss" scoped></style>
