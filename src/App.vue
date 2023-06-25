<script setup lang="ts">
import Header from './components/header.vue';
import useNumberMap from './composables/useNumberMap';
import disaster from "./components/disaster/disaster.vue"
const food = useNumberMap("food")
const happiness = useNumberMap("happiness")
const population = useNumberMap("population")
</script>

<template>
  <Header></Header>
  <disaster></disaster>
  {{ food.data.value }}
  {{ happiness.data.value }}
  {{ population.data.value }}
</template>
./composables/useNumberMap