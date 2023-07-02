<script setup lang="ts">
import maps from "./map.vue"
import days from "./days.vue"
import MapLarge from "./mapLarge.vue";

</script>

<template>
    <div class="sidebar">
        <days></days>
        <maps></maps>
    </div>
<MapLarge></MapLarge>
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