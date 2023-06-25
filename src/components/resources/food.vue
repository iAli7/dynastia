<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';
import useNumberMap from '../../composables/useNumberMap';
import { MessageKey, translate } from "../../locale/index"
import convertToInteger from '../../utils/convertToInteger';

const showTooltip = ref(false);
const food = useNumberMap("food", { base: 10 })
const happiness = useNumberMap("happiness")
const population = useNumberMap("population")

watchEffect(() => {
    let idleFood = population.total.value * 0.4;
    let populationFood = - population.total.value * 0.2;

    food.setItem("population", populationFood)
    food.setItem("idle", idleFood)
})

watchEffect(() => {
    let happinessFood = happiness.total.value * 5 / 50;

    food.setItem("happiness", happinessFood)
})

const foodValue = computed(() => convertToInteger(food.total.value))
</script>

<template>
    <div class="resources-item food" :class="{ 'food-angry': food.total.value < 0 }" @mouseenter="showTooltip = true"
        @mouseleave="showTooltip = false">
        <img src="../../assets/images/icon/food.png" class="food-image" alt="food icon">
        <div class="food-number">{{ foodValue }}</div>
        <div v-if="showTooltip" class="tooltip">
            <div class="tooltip-title">Yemek</div>
            <div class="tooltip-item" v-for="(value, key) in food.data.value" :key="key">
                <div class="tooltip-item-subtitle">
                    {{ translate(key as MessageKey) }}:
                </div>
                <div class="tooltip-item-value" :class="{ 'negative-number': value < 0 }">
                    {{ convertToInteger(value) }}
                </div>
            </div>
        </div>
    </div>
</template>
../../composables/useNumberMap