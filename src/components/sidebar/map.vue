<script setup lang="ts">
import handleMapProcess from './mapLarge/handleMapProcess';
</script>

<template>
    <div class="map" @click="handleMapProcess.showMap.value = true">
        <img src="../../assets/images/map.jpg" alt="map">
    </div>
</template>

<style lang="scss">
.map {
    height: 100%;
    width: 100%;
    border: 2px solid rgb(8, 31, 89);
    border-radius: 5px;
    overflow: hidden;
    cursor: pointer;

    img {
        height: 100%;
        width: 100%;
    }
}
</style>