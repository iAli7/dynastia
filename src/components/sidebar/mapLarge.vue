<template>
    <div class="map-container" ref="mapContainer" @wheel="handleWheel" @mousedown="startDragging" @mousemove="drag" @mouseup="stopDragging" @mouseleave="stopDragging">
      <img ref="map" :src="mapImage" :style="mapStyle" draggable="false"/>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue';
  import mapImage from '../../assets/images/map.jpg';
  
  export default {
    setup() {
      const mapContainer = ref(null);
      const map = ref(null);
      const dragging = ref(false);
      const dragStartX = ref(0);
      const dragStartY = ref(0);
      const offsetX = ref(0);
      const offsetY = ref(0);
      const scale = ref(1);
  
      const limitOffsets = () => {
        const rect = mapContainer.value.getBoundingClientRect();
        const mapRect = map.value.getBoundingClientRect();
  
        if (mapRect.width * scale.value <= rect.width) {
          offsetX.value = (rect.width - mapRect.width * scale.value) / 2;
        } else {
          offsetX.value = Math.min(Math.max(offsetX.value, rect.width - mapRect.width * scale.value), 0);
        }
  
        if (mapRect.height * scale.value <= rect.height) {
          offsetY.value = (rect.height - mapRect.height * scale.value) / 2;
        } else {
          offsetY.value = Math.min(Math.max(offsetY.value, rect.height - mapRect.height * scale.value), 0);
        }
      };
  
      const handleWheel = (event) => {
        event.preventDefault();
        const delta = Math.sign(event.deltaY) * -1;
        const newScale = scale.value + delta * 0.1;
    
        if (newScale < 0.5 || newScale > 3) return;
  
        const rect = mapContainer.value.getBoundingClientRect();
  
        const ratioX = 0.5;
        const ratioY = 0.5;
  
        scale.value = newScale;
  
        offsetX.value = (rect.width / 2) - (rect.width * scale.value * ratioX);
        offsetY.value = (rect.height / 2) - (rect.height * scale.value * ratioY);
  
        nextTick(limitOffsets);
      };
  
      const startDragging = (event) => {
        event.preventDefault();
        dragging.value = true;
        dragStartX.value = event.clientX - offsetX.value;
        dragStartY.value = event.clientY - offsetY.value;
      };
  
      const drag = (event) => {
        if (!dragging.value) return;
  
        offsetX.value = event.clientX - dragStartX.value;
        offsetY.value = event.clientY - dragStartY.value;
  
        limitOffsets();
      };
  
      const stopDragging = () => {
        dragging.value = false;
      };
  
      const mapStyle = ref('');
  
      watch([offsetX, offsetY, scale], () => {
        mapStyle.value = `transform: translate(${offsetX.value}px, ${offsetY.value}px) scale(${scale.value})`;
      }, { immediate: true });
  
      onMounted(() => {
        window.addEventListener('resize', limitOffsets);
      });
  
      onUnmounted(() => {
        window.removeEventListener('resize', limitOffsets);
      });
  
      return {
        mapContainer,
        map,
        mapStyle,
        mapImage,
        handleWheel,
        startDragging,
        drag,
        stopDragging,
      };
    },
  };
  </script>
  
  <style scoped>
  .map-container {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: fixed;
    left: 0;
    top: 0;
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
  