<script setup lang="ts">
import { ref } from 'vue';
import config from '../config/config';
const showTooltip = ref(false)

setInterval(() =>{
    config.food.value = Number((config.food.value + config.happines.value + config.humanity.value).toFixed(1))
}, 5000)
</script>

<template>
    <div class="food" :class="{ 'food-angry': config.food.value < 0 }" @mouseover="showTooltip = true" @mouseout="showTooltip = false">
        <img src="../assets/images/icon/food.png" class="food-image" alt="food icon">
        <div class="food-number">{{config.food.value}}</div>
        <div v-if="showTooltip" class="tooltip">
            <div class="tooltip-item">
                <div class="tooltip-item-subtitle">
                    Anlık Yemek Durumu:
                </div>
                <div class="tooltip-item-value">
                    {{ showFoodState }}
                </div>
            </div>
          </div>
    </div>
</template>