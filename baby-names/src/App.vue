<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Boy from './views/Boy.vue'
import MostPopular from './views/MostPopular.vue'
</script>

<template>
  <div id="userInput">
    <header><h1>Baby Names!</h1></header>
    <select name="Ethnicity" id="ethnicitySelect">
      <option disabled value="">Ethnicity</option>
      <option>Hispanic</option>
      <option>White non-Hispanic</option>
      <option>Black non-Hispanic</option>
      <option>Asian and Pacific Islander</option>
    </select>
    <select name="Year of Birth" id="ethnicitySelect">
      <option disabled value="">Year Of Birth</option>
      <option>2019</option>
      <option>2018</option>
      <option>2017</option>
      <option>2016</option>
      <option>2015</option>
      <option>2014</option>
      <option>2013</option>
      <option>2012</option>
      <option>2011</option>
    </select>
  </div>

  <Boy />
  <MostPopular />
  <RouterView />
</template>

<style scoped>
#userInput {
  margin: 50px;
  font-size: 60px;
}
h1 {
  font-size: 100px;
  color: white;
}
</style>
