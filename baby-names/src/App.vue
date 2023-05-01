<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Boy from './views/Boy.vue'
import Girl from './views/Girl.vue'
import MostPopular from './views/MostPopular.vue'
import LeastPopular from './views/LeastPopular.vue'
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

    <Boy />
    <Girl />
    <MostPopular /><label class="switch">
      <input type="checkbox" />
      <span class="slider">boy | girl</span>
    </label>
    <LeastPopular />
  </div>
  <RouterView />
</template>

<style scoped>
select {
  margin: 15px;
  width: 480px;
  background-color: rgb(164, 212, 252);
  color: azure;
}
#userInput {
  margin: 50px;
  font-size: 60px;
  display: flex;
  flex-direction: column;
}
h1 {
  background-color: rgba(250, 141, 159, 0.808);
  width: fit-content;
  font-size: 80px;
  color: white;
  margin: 20px;
  padding: 20px;
}
.switch {
  text-align: center;
  position: absolute;
  display: inline-block;
  right: 40px;
  margin: 50px;
  width: 180px;
  height: 76px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffa9a9;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 68px;
  width: 86px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}
input:checked + .slider {
  content: '';
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(86px);
  -ms-transform: translateX(86px);
  transform: translateX(86px);
}
</style>
