<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <router-link to="/" custom v-slot="{ navigate }">
    <button @click="navigate" role="link">back</button></router-link
  >

  <RouterView />
</template>

<style scoped>
button {
  background-color: #f6e297;
  left: 100px;
  top: 60px;
  width: 120px;
  height: 60px;
  position: fixed;
  font-size: 20px;
  cursor: pointer;
  border: solid 3px white;
}
h1 {
  background-color: rgba(250, 141, 159, 0.808);
  width: fit-content;
  font-size: 80px;
  color: white;
  margin: 20px;
  padding: 20px;
}
</style>
