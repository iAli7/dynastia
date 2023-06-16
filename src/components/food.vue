<script setup lang="ts">
import { ref } from 'vue';
import config from '../config/config';

const showTooltip = ref(false);
const changeAmount = ref((config.population.value / 5) + config.happiness.value);

setInterval(() => {
    const change = Number(((config.population.value / 5) + config.happiness.value).toFixed(2));
    config.food.value = parseFloat((config.food.value + change).toFixed(2));
    changeAmount.value = change;
}, 2500);
</script>

<template>
    <div class="food" :class="{ 'food-angry': config.food.value < 0 }" @mouseover="showTooltip = true" @mouseout="showTooltip = false">
        <img src="../assets/images/icon/food.png" class="food-image" alt="food icon">
        <div class="food-number">{{ config.food.value }}</div>
        <div v-if="showTooltip" class="tooltip">
            <div class="tooltip-item">
                <div class="tooltip-item-subtitle">
                    Anlık Yemek Durumu:
                </div>
                <div class="tooltip-item-value">
                    {{ changeAmount }}
                </div>
            </div>
            <div class="tooltip-item">
                <div class="tooltip-item-subtitle">
                    Mutluluk:
                </div>
                <div class="tooltip-item-value">
                    {{ config.happiness.value }}
                </div>
            </div>
            <div class="tooltip-item">
                <div class="tooltip-item-subtitle">
                    Popülasyon:
                </div>
                <div class="tooltip-item-value">
                    {{ (config.population.value / 5   ) }}
                </div>
            </div>
        </div>
    </div>
</template>
