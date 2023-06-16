<script setup lang="ts">
import config from '../config/config';

setInterval(() => {
    config.happiness.value = Number((-1 - (config.population.value / 10)).toFixed(1));
}, 5000);
</script>

<template>
    <div class="happiness" :class="{ 'happiness-angry': config.happiness.value < 0 }">
        <div class="happiness-image-wrapper" v-if="config.happiness.value >= 0">
            <img src="../assets/images/icon/happiness.png" class="happiness-image" alt="happiness icon">
        </div>
        <div class="happiness-image-wrapper" v-else>
            <img src="../assets/images/icon/angry.png" class="happiness-image" alt="happiness icon">
        </div>
        <div class="happiness-number">
            {{ config.happiness.value }}
        </div>
    </div>
</template>