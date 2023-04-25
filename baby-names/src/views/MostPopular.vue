<template></template>

<script setup>
import{ref, onMounted} from `vue`
const babies = ref(``)
async function getBabies(){
    let res = await fetch(`https://data.cityofnewyork.us/resource/25th-nujf.json`)
    let data = await res.json()
    babies.value = data.results
    console.log("hi")
}
onMounted(()=>{
    getBabies()
})
</script>

<style scoped></style>
