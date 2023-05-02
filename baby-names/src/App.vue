<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Boy from './views/Boy.vue'
import Girl from './views/Girl.vue'
import MostPopular from './views/MostPopular.vue'
import LeastPopular from './views/LeastPopular.vue'
</script>

<template>
  <!--   <div id="userInput">
    <header><h1>Baby Names!</h1></header>
    <select name="Ethnicity" id="ethnicitySelect">
      <option disabled value="">Ethnicity</option>
      <option>Hispanic</option>
      <option>White non-Hispanic</option>
      <option>Black non-Hispanic</option>
      <option>Asian and Pacific Islander</option>
    </select>
    <select name="popularity" id="ethnicitySelect">
      <option>Most Popular</option>
      <option>Least Popular</option>
    </select>

    <Boy />
    <Girl />
    <MostPopular /> -->
  <!--  <label class="switch">
    <input type="checkbox" />
    <span class="slider">boy | girl</span>
  </label> -->
  <!-- <LeastPopular /> -->
  <!-- </div> -->
  <RouterView />
</template>

<style scoped>
h1 {
  background-color: rgba(250, 141, 159, 0.808);
  width: fit-content;
  font-size: 80px;
  color: white;
  margin: 20px;
  padding: 20px;
}
</style>
