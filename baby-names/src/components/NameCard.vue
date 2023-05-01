<template>
  <div class="card">
    <h2>{{ baby.nm }}</h2>
    <h3>{{id}}</h3>
  </div>
</template>

<script setup>
const props = {
  baby: Object,
  id: Number
}
</script>

<style lang="scss" scoped>
</style>