<template>
  <div id="userInput">
    <div id="info">
      <header><h1>Baby Names!</h1></header>
      <h2 id="welcome">
        Welcome, are you planning to have a child? Are you a child? Well, we got just the thing for
        you. Who wants to be lame and boring? Here at this website, we got the most popular names,
        so YOU know what to avoid. Don't be basic, be cool.
      </h2>
      <h3 id="instructions">
        Simply use your mouse (P.S. computer mouse not the rodent) and click the dropdowns.
      </h3>
    </div>
    <select name="popularity" id="ethnicitySelect">
      <router-link to="/mostPop" custom v-slot="{ navigate }">
        <option @click="navigate" role="link">Most Popular</option></router-link
      >
      <router-link to="/leastPop" custom v-slot="{ navigate }"
        ><option @click="navigate" role="link">Least Popular</option></router-link
      >
    </select>
    <!-- 
    <Boy />
    <Girl />
    <MostPopular /> -->
    <router-link to="/mostPop" custom v-slot="{ navigate }"
      >>
      <label class="switch">
        <input type="checkbox" />
        <span class="slider"> boy | girl</span>
      </label>
    </router-link>
    <!-- <LeastPopular /> -->
  </div>
</template>

<script setup>
//import {computed} from vue
const props = defineProps({})
// const babyPth = computed(() => {
//   return `/boy`
// })
</script>

<style scoped>
select {
  margin: 15px;
  width: 480px;
  background-color: rgb(102, 106, 134);
  color: white;
  font-family: 'Darumadrop One', cursive;
  border: 10px solid white;
  border-radius: 10px;
  display: flex;
}
#userInput {
  margin: 50px;
  font-size: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  background-color: #edafb8;
  width: fit-content;
  font-size: 80px;
  color: #333333;
  padding: 20px;
  font-family: 'Darumadrop One', cursive;
  border-radius: 20px;
  border: 10px solid white;
  box-shadow: 10px 5px 5px rgb(46, 38, 38);
}

#info {
  display: inline-block;
  vertical-align: middle;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
}

#welcome {
  color: #333333;
  font-family: 'Darumadrop One', cursive;
  background-color: rgba(164, 212, 252);
  width: fit-content;
  padding: 20px;
  border-radius: 20px;
  border: 10px solid white;
  text-align: center;
  box-shadow: 10px 5px 5px rgb(46, 38, 38);
}

#instructions {
  color: #333333;
  font-family: 'Darumadrop One', cursive;
  background-color: #e8ddb5;
  width: fit-content;
  padding: 20px;
  border-radius: 20px;
  border: 10px solid white;
  text-align: center;
  box-shadow: 10px 5px 5px rgb(46, 38, 38);
}

h1:hover {
  background-color: #ffe1e6;
  transition: all 0.5s ease-in-out;
}
#welcome:hover {
  transition: all 0.5s ease-in-out;
  background-color: rgb(194, 230, 241);
}
#instructions:hover {
  transition: all 0.5s ease-in-out;
  background-color: rgb(255, 247, 226);
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
