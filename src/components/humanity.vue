<script setup lang="ts">
import { ref } from 'vue';
import config from '../config/config';
const showTooltip = ref(false)

let countdown = ref(5);

function addHuman() {
  config.humanity.value += 1;
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
    <div class="humanity" @mouseover="showTooltip = true" @mouseout="showTooltip = false">
        <img src="../assets/images/icon/human.webp" class="human-image" alt="human icon">
        <div class="human-number">{{config.humanity.value}}</div>
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