<script setup lang="ts">
import { ref } from 'vue';
import store from '../config/store';

const showTooltip = ref(false);
const changeAmount = ref(getChangeAmount());

setInterval(() => {
    const change = getChangeAmount();

    store.happiness.value = parseFloat((store.happiness.value + change).toFixed(2));
    changeAmount.value = parseFloat(change.toFixed(2));
}, 5000);

function getChangeAmount() {
    const populationChange = store.population.value / 10;
    const foodChange = store.food.value / 20;
    const totalChange = -1 - populationChange + foodChange;
    return totalChange;
}
</script>

<template>
    <div class="happiness" :class="{ 'happiness-angry': store.happiness.value < 0 }"  @mouseenter="showTooltip = true" @mouseleave="showTooltip = false">
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
            <div class="tooltip-item">
                <div class="tooltip-item-subtitle">
                    Anlık Mutluluk Durumu:
                </div>
                <div class="tooltip-item-value">
                    {{ changeAmount }}
                </div>
            </div>
            <div class="tooltip-item">
                <div class="tooltip-item-subtitle">
                    Yemek:
                </div>
                <div class="tooltip-item-value">
                    {{ (store.food.value / 20).toFixed(2) }}
                </div>
            </div>
            <div class="tooltip-item">
                <div class="tooltip-item-subtitle">
                    Popülasyon:
                </div>
                <div class="tooltip-item-value">
                    {{ (store.population.value / 10).toFixed(2) }}
                </div>
            </div>
        </div>
    </div>
</template>
