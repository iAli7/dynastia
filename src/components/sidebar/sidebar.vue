<script setup lang="ts">
import maps from "./map.vue"
import days from "./days.vue"
</script>

<template>
    <div class="sidebar">
        <days></days>
        <maps></maps>
    </div>
</template>

<style lang="scss">
    .sidebar{
        position: fixed;
        left:10px;
        bottom: 60px;
        height: 300px;
        width: 300px;
    
    }
</style>