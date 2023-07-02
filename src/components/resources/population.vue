<script setup lang="ts">
import { ref } from 'vue';
import { population } from '../../composables/resource';
const showTooltip = ref(false)

let countdown = ref(25);

const addCitizen = () =>{
  population.value +=1
  localStorage.setItem("population", String(population.value))
}

function countdownTick() {
  if (countdown.value === 0) {
    countdown.value = 25;
    addCitizen()
  };

  countdown.value--;
}

setInterval(countdownTick, 1000);
</script>

<template>
  <div class="resources-item population" @mouseenter="showTooltip = true" @mouseleave="showTooltip = false">
    <img src="../../assets/images/icon/human.webp" class="human-image" alt="human icon">
    <div class="human-number">{{ population }}</div>
    <div v-if="showTooltip" class="tooltip">
      <div class="tooltip-title">Popülasyon</div>
      <div class="tooltip-item">
        <div class="tooltip-item-subtitle">
          Kalan Süre:
        </div>
        <div class="tooltip-item-value">
          {{ countdown }}
        </div>
      </div>
    </div>
  </div>
</template>