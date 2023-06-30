<script setup lang="ts">
import { ref } from 'vue';
import { population } from '../../composables/resource';
const showTooltip = ref(false)

let countdown = ref(5);

function addCitizen() {
  const basePopulation = Object.entries(population.data.value).find(([key]) => key === 'base') as [string, number];

  population.setItem("base", basePopulation[1] + 1);
}

function countdownTick() {
  if (countdown.value === 0) {
    countdown.value = 5;
    addCitizen()
  };

  countdown.value--;
}

population.setItem("base", 1)
setInterval(countdownTick, 1000);
</script>

<template>
  <div class="resources-item population" @mouseenter="showTooltip = true" @mouseleave="showTooltip = false">
    <img src="../../assets/images/icon/human.webp" class="human-image" alt="human icon">
    <div class="human-number">{{ population.total.value }}</div>
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
</template>../../composables/useNumberMap