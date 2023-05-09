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
  background-color: rgb(102, 97, 253);
  left: 100px;
  top: 60px;
  width: 60px;
  height: 30px;
  position: fixed;
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
