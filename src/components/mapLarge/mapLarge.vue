<script setup lang="ts">
import mapProcess from './handleMapProcess';
import showHammerPopup from './showHammerPopup.vue';
import { showPopup } from './mapItemConfig';
import { onMounted, onUnmounted } from 'vue';

const map = mapProcess.map
const mapContainer = mapProcess.mapContainer

onMounted(() => {
window.addEventListener('resize', mapProcess.limitOffsets);
});


onUnmounted(() => {
window.removeEventListener('resize', mapProcess.limitOffsets);
});
</script>

<template>
  <div class="map-container" ref="mapContainer" @wheel="mapProcess.handleWheel" @mousedown="mapProcess.startDragging" @mousemove="mapProcess.drag" @mouseup="mapProcess.stopDragging" @mouseleave="mapProcess.stopDragging">
    <div class="map-wrapper" :style="mapProcess.mapStyle.value" draggable="false">
      <img ref="map" src="../../assets/images/map.jpg" class="map-container-image"/>
      <img @click="showPopup = true" src="../../assets/images/icon/hammer.png" class="map-hammer-icon" alt="">
    </div>
  </div>
  <showHammerPopup :item="'hammer'"></showHammerPopup>
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
z-index: 0;
border: 1px solid black;
}

.map-container-image {
position: absolute;
top: -5vh;
height: 120vh;
left: 0;
width: 100%;
}

.map-hammer-icon{
  position: relative;
  height: 30px;
  background: rgba(248, 208, 162, 0.9);
  padding: .5rem;
  border-radius: 100%;
  top: 400px;
  left: 200px;
  cursor: pointer;
  transition: .15s transform ease;

  &:hover{
    transform: scale(.9,.9)!important;
  }
}
</style>
