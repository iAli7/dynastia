<script setup lang="ts">
import Header from './components/header.vue';
import disaster from "./components/disaster/disaster.vue"
import sidebar from "./components/sidebar/sidebar.vue"
import showDayAnimation from './components/day/showDayAnimation.vue';
import mapLarge from './components/mapLarge/mapLarge.vue';
</script>

<template>
  <Header></Header>
  <disaster></disaster>
  <sidebar></sidebar>
  <!-- animation -->
  <showDayAnimation></showDayAnimation>
  <mapLarge></mapLarge>
</template>