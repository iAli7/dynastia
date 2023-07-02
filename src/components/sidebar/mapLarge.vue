<template>
    <div class="map-container" ref="mapContainer" @wheel="handleWheel" @mousedown="startDragging" @mousemove="drag" @mouseup="stopDragging" @mouseleave="stopDragging">
      <img ref="map" :src="mapImage" :style="mapStyle" draggable="false"/>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, computed } from 'vue';
import mapImage from '../../assets/images/map.jpg';

const mapContainer = ref(null);
const map = ref(null);
const dragging = ref(false);
const dragStartX = ref(0);
const dragStartY = ref(0);
const offsetX = ref(0);
const offsetY = ref(0);
const scale = ref(1);
const minScale = 1; // minimum scale değeri belirlenir
const maxScale = 1.5;

const limitOffsets = () => {
  const containerRect = mapContainer.value.getBoundingClientRect();
  const mapRect = map.value.getBoundingClientRect();
  const mapWidth = mapRect.width * scale.value;
  const mapHeight = mapRect.height * scale.value;

  const maxOffsetX = Math.max((containerRect.width - mapWidth) / 2, scale.value * -66);
  const maxOffsetY = Math.max((containerRect.height - mapHeight) / 2, 0);

  offsetX.value = Math.min(Math.max(offsetX.value, maxOffsetX), -maxOffsetX);
  offsetY.value = Math.min(Math.max(offsetY.value, maxOffsetY), -maxOffsetY);
};



const handleWheel = (event) => {
  event.preventDefault();
  const delta = Math.sign(event.deltaY) * -0.1;
  const potentialScale = scale.value + delta;

  if (potentialScale >= minScale && potentialScale <= maxScale) {
    scale.value = potentialScale;
    
    if (mapContainer.value !== null && map.value !== null) { // Kontrol eklenir
      const rect = mapContainer.value.getBoundingClientRect();
      const x = event.clientX - rect.left - offsetX.value;
      const y = event.clientY - rect.top - offsetY.value;

      offsetX.value -= x * delta;
      offsetY.value -= y * delta;
      
      limitOffsets();
    }
  }
};



const startDragging = (event) => {
  event.preventDefault();
  dragging.value = true;
  dragStartX.value = event.clientX;
  dragStartY.value = event.clientY;
};

const drag = (event) => {
  if (!dragging.value) return;

  const dx = event.clientX - dragStartX.value;
  const dy = event.clientY - dragStartY.value;

  dragStartX.value = event.clientX;
  dragStartY.value = event.clientY;

  offsetX.value += dx;
  offsetY.value += dy;

  limitOffsets();
};

const stopDragging = () => {
  dragging.value = false;
};

const mapStyle = computed(() => {
  return `transform: translate(${offsetX.value}px, ${offsetY.value}px) scale(${scale.value})`;
});

onMounted(() => {
  limitOffsets();
  window.addEventListener('resize', limitOffsets);
});

watch([offsetX, offsetY, scale], limitOffsets);


onUnmounted(() => {
  window.removeEventListener('resize', limitOffsets);
});

</script>

<style scoped>
.map-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 0;
  border: 1px solid black;
}

.map-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  object-fit: contain;
}
</style>
