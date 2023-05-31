<script setup lang="ts">
import config from '../config/config';

setInterval(() => {
    config.happines.value += 1
}, 2000);
</script>

<template>
    <div class="happines" :class="{ 'happines-angry': config.happines.value < 0 }">
        <div class="happines-image-wrapper" v-if="config.happines.value >= 0">
            <img src="../assets/images/icon/happines.png" class="happines-image" alt="happines icon">
        </div>
        <div class="happines-image-wrapper" v-else>
            <img src="../assets/images/icon/angry.png" class="happines-image" alt="happines icon">
        </div>
        <div class="happines-number">
            {{ config.happines.value }}
        </div>
    </div>
</template>