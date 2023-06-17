<script setup lang="ts">
import { ref, computed } from 'vue';
import store from '../config/store';
import convertToInteger from "../utils/convertToInteger"

const showTooltip = ref(false);
const changeAmount = computed(() => {
    return convertToInteger(- store.population.value / 10 + (store.food.value * 5) / 100)
});

setInterval(() => {
    const change = convertToInteger(- store.population.value / 10);
    store.happiness.value = convertToInteger(store.happiness.value + change);
}, 5000);

</script>

<template>
    <div class="resources-item happiness" :class="{ 'happiness-angry': store.happiness.value < 0 }" @mouseenter="showTooltip = true"
        @mouseleave="showTooltip = false">
        <div class="happiness-image-wrapper" v-if="store.happiness.value >= 0">
            <img src="../assets/images/icon/happiness.png" class="happiness-image" alt="happiness icon">
        </div>
        <div class="happiness-image-wrapper" v-else>
            <img src="../assets/images/icon/angry.png" class="happiness-image" alt="happiness icon">
        </div>
        <div class="happiness-number">
            {{ store.happiness.value }}
        </div>
        <div v-if="showTooltip" class="tooltip">
            <div class="tooltip-title">Mutluluk</div>
            <div class="tooltip-item tooltip-item-top">
                <div class="tooltip-item-subtitle">
                    Anlık Mutluluk Durumu:
                </div>
                <div class="tooltip-item-value" :class="{'negative-number':changeAmount < 0}">
                    {{ changeAmount }}
                </div>
            </div>
            <div class="tooltip-item">
                <div class="tooltip-item-subtitle">
                    Nüfus:
                </div>
                <div class="tooltip-item-value" :class="{'negative-number':-store.population.value / 10 < 0}">
                    {{ convertToInteger(-store.population.value / 10) }}
                </div>
            </div>
            <div class="tooltip-item">
                <div class="tooltip-item-subtitle">
                    Yemek:
                </div>
                <div class="tooltip-item-value" :class="{'negative-number':changeAmount < 0}">
                    {{ convertToInteger((store.food.value * 5) / 100) }}
                </div>
            </div>
        </div>
    </div>
</template>