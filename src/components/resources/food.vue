<script setup lang="ts">
import { ref, computed } from 'vue';
import store from '../../config/store';
import convertToInteger from "../../utils/convertToInteger"

const showTooltip = ref(false);
const changeAmount = computed(() => {
    return convertToInteger((store.population.value / 2) + (store.happiness.value * 5) / 100)
});

setInterval(() => {
    const change = convertToInteger((store.population.value / 2) + (store.happiness.value * 5) / 100);
    store.food.value = convertToInteger(store.food.value + change);
}, 5000);
</script>

<template>
    <div class="resources-item food" :class="{ 'food-angry': store.food.value < 0 }" @mouseenter="showTooltip = true" @mouseleave="showTooltip = false">
        <img src="../../assets/images/icon/food.png" class="food-image" alt="food icon">
        <div class="food-number">{{ store.food.value }}</div>
        <div v-if="showTooltip" class="tooltip">
            <div class="tooltip-title">Yemek</div>
            <div class="tooltip-item tooltip-item-top">
                <div class="tooltip-item-subtitle">
                    Anlık Yemek Durumu:
                </div>
                <div class="tooltip-item-value" :class="{'negative-number':changeAmount < 0}">
                    {{ changeAmount }}
                </div>
            </div>
            <div class="tooltip-item">
                <div class="tooltip-item-subtitle">
                    Mutluluk:
                </div>
                <div class="tooltip-item-value" :class="{'negative-number':(store.happiness.value * 5) / 100 < 0}">
                    {{ convertToInteger((store.happiness.value * 5) / 100) }}
                </div>
            </div>
            <div class="tooltip-item">
                <div class="tooltip-item-subtitle">
                    Popülasyon:
                </div>
                <div class="tooltip-item-value" :class="{'negative-number':(store.population.value / 2) < 0}">
                    {{ (store.population.value / 2 ) }}
                </div>
            </div>
        </div>
    </div>
</template>
