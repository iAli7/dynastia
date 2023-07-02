<script setup lang="ts">
import maps from "./map.vue"
import days from "./days.vue"
import MapLarge from "./mapLarge/mapLarge.vue";

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
        bottom: 65px;
        width: 300px;
        height: 320px;
    }
</style>