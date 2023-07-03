<script setup lang="ts">
import Header from './components/header.vue';
import disaster from "./components/disaster/disaster.vue"
import sidebar from "./components/sidebar/sidebar.vue"
import showDayAnimation from './components/day/showDayAnimation.vue';
</script>

<template>
  <Header></Header>
  <disaster></disaster>
  <sidebar></sidebar>
  <!-- animation -->
  <showDayAnimation></showDayAnimation>
</template>