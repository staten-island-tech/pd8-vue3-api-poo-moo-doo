<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <router-link to="/" custom v-slot="{ navigate }">
    <button @click="navigate" role="link">back</button></router-link
  >
  <router-link to="/girl" custom v-slot="{ navigate }"
    >>
    <label class="switch">
      <input @click="navigate" role="link" type="checkbox" />
      <span class="slider"> boy | girl</span>
    </label>
  </router-link>
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
.switch {
  text-align: center;
  position: absolute;
  display: inline-block;
  right: 40px;
  margin: 50px;
  width: 180px;
  height: 76px;
}

.slider {
  text-align: center;
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
