<script setup lang="ts">
import mapProcess from './handleMapProcess';
import { onMounted, onUnmounted } from 'vue';

const map = mapProcess.map
const mapContainer = mapProcess.mapContainer

onMounted(() => {
window.addEventListener('resize', mapProcess.limitOffsets);
window.addEventListener("keyup", mapProcess.handleShowMap)
});


onUnmounted(() => {
window.removeEventListener('resize', mapProcess.limitOffsets);
window.removeEventListener("keyup", mapProcess.handleShowMap)
});
</script>

<template>
  <div class="map-container" :class="{'map-container-active': mapProcess.showMap.value}" ref="mapContainer" @wheel="mapProcess.handleWheel" @mousedown="mapProcess.startDragging" @mousemove="mapProcess.drag" @mouseup="mapProcess.stopDragging" @mouseleave="mapProcess.stopDragging">
    <img ref="map" src="../../../assets/images/map.jpg" :style="mapProcess.mapStyle.value" draggable="false"/>
  </div>
</template>

<style scoped lang="scss">
.map-container {
width: 100%;
height: 100vh;
overflow: hidden;
position: fixed;
left: 0;
cursor: grab;
top: 0;
z-index: 50;
border: 1px solid black;

&:not(&-active){
  display: none;
}
}

.map-container img {
position: absolute;
top: -300px;
left: 0;
width: 100%;
height: auto;
object-fit: contain;
}
</style>
