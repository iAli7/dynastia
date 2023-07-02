import { ref, computed } from 'vue';

const showMap = ref(false)
const mapContainer = ref<HTMLElement | null>(null);
const map = ref<HTMLElement | null>(null);
const dragging = ref(false);
const dragStartX = ref(0);
const dragStartY = ref(0);
const offsetX = ref(0);
const offsetY = ref(0);
const scale = ref(1);
const minScale = 1;
const maxScale = 1.5;
const maxScaleOffsetX = ref(-66);
const maxScaleOffsetY = ref(0);

const limitOffsets = () => {
if (mapContainer.value == null || map.value == null) return;
const containerRect = mapContainer.value.getBoundingClientRect();
const mapRect = map.value.getBoundingClientRect();
const mapWidth = mapRect.width * scale.value;
const mapHeight = mapRect.height * scale.value;

if (scale.value === 1.5) {
  maxScaleOffsetX.value = -346;
} else if (scale.value === 1.4) {
  maxScaleOffsetX.value = -274;
} else if (scale.value === 1.3) {
  maxScaleOffsetX.value = -200;
  maxScaleOffsetY.value = -200;
} else if (scale.value === 1.2) {
  maxScaleOffsetX.value = -130;
  maxScaleOffsetY.value = -88;
} else if (scale.value === 1.1) {
  maxScaleOffsetX.value = -66;
  maxScaleOffsetY.value = -66;
} else {
  maxScaleOffsetX.value = 0;
  maxScaleOffsetY.value = 0;
}

const maxOffsetX = Math.max((containerRect.width - mapWidth) / 2, maxScaleOffsetX.value);
const maxOffsetY = Math.max((containerRect.height - mapHeight) / 2, maxScaleOffsetY.value);

offsetX.value = Math.min(Math.max(offsetX.value, maxOffsetX), -maxOffsetX);
offsetY.value = Math.min(Math.max(offsetY.value, maxOffsetY), -maxOffsetY);
};


const handleWheel = (event: any) => {
event.preventDefault();
const delta = Math.sign(event.deltaY) * -0.1;
const potentialScale = Number((scale.value + delta).toFixed(1));

if (potentialScale >= minScale && potentialScale <= maxScale) {
  scale.value = potentialScale;
  
  if (mapContainer.value !== null && map.value !== null) { 
    const rect = mapContainer.value.getBoundingClientRect();
    const x = event.clientX - rect.left - offsetX.value;
    const y = event.clientY - rect.top - offsetY.value;

    offsetX.value -= x * delta;
    offsetY.value -= y * delta;
    
    limitOffsets();
  }
}
};

const startDragging = (event: MouseEvent) => {
event.preventDefault();
dragging.value = true;
dragStartX.value = event.clientX;
dragStartY.value = event.clientY;
};

const drag = (event: MouseEvent) => {
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

const handleShowMap = (event: KeyboardEvent) =>{
  if(event.key === "m" || event.key === "M"){
    if(showMap.value){
      showMap.value = false
    }else{
      showMap.value = true
    }
  }
}

export default {handleShowMap, handleWheel, stopDragging, startDragging, drag, mapStyle, showMap, map, mapContainer,limitOffsets}