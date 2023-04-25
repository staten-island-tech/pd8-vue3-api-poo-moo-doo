<template>
    <div>

    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
const babyNames = ref('')
async function getBoys(){
    let response = await fetch('https://data.cityofnewyork.us/resource/25th-nujf.json')
    let data = await response.json()
    babyNames.value = data.results
}

</script>

<style lang="scss" scoped>

</style>