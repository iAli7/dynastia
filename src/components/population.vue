<script setup lang="ts">
import { ref } from 'vue';
import store from '../config/store';
const showTooltip = ref(false)

let countdown = ref(5);

function addHuman() {
  store.population.value += 1;
}

function countdownTick() {
  if (countdown.value === 0) {
    countdown.value = 5;
  }

  countdown.value--;
}

setInterval(addHuman, 5000)
setInterval(countdownTick, 1000);
</script>

<template>
    <div class="resources-item population" @mouseenter="showTooltip = true" @mouseleave="showTooltip = false">
        <img src="../assets/images/icon/human.webp" class="human-image" alt="human icon">
        <div class="human-number">{{store.population.value}}</div>
        <div v-if="showTooltip" class="tooltip">
            <div class="tooltip-item">
                <div class="tooltip-item-subtitle">
                    Kalan Süre:
                </div>
                <div class="tooltip-item-value">
                    {{countdown}}
                </div>
            </div>
          </div>
    </div>
</template>