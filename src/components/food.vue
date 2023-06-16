<script setup lang="ts">
import { ref } from 'vue';
import store from '../config/store';

const showTooltip = ref(false);
const changeAmount = ref((store.population.value / 2) + store.happiness.value);

setInterval(() => {
    const change = Number(((store.population.value / 2) + store.happiness.value).toFixed(2));
    store.food.value = parseFloat((store.food.value + change).toFixed(2));
    changeAmount.value = change;
}, 2500);
</script>

<template>
    <div class="food" :class="{ 'food-angry': store.food.value < 0 }" @mouseenter="showTooltip = true" @mouseleave="showTooltip = false">
        <img src="../assets/images/icon/food.png" class="food-image" alt="food icon">
        <div class="food-number">{{ store.food.value }}</div>
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
                    {{ store.happiness.value }}
                </div>
            </div>
            <div class="tooltip-item">
                <div class="tooltip-item-subtitle">
                    Popülasyon:
                </div>
                <div class="tooltip-item-value">
                    {{ (store.population.value / 5   ) }}
                </div>
            </div>
        </div>
    </div>
</template>
