<script setup lang="ts">
import { ref } from 'vue';
import store from '../../config/store';
import useNumberMap from '../../utils/useNumberMap';
import {translate} from "../../locale/index"
import convertToInteger from '../../utils/convertToInteger';

const showTooltip = ref(false);
const food = useNumberMap("food")

setInterval(() => {
    let populationFood = store.population.value * 10 / 100;
    let happinessFood = store.happiness.value * 2 / 100;

    food.setItem("happiness", convertToInteger(happinessFood))
    food.setItem("population", convertToInteger(populationFood))

    console.log(food.data.value)
}, 3000);
</script>

<template>
    <div class="resources-item food" :class="{ 'food-angry': store.food.value < 0 }" @mouseenter="showTooltip = true" @mouseleave="showTooltip = false">
        <img src="../../assets/images/icon/food.png" class="food-image" alt="food icon">
        <div class="food-number">{{ food.total.value }}</div>
        <div v-if="showTooltip" class="tooltip">
            <div class="tooltip-title">Yemek</div>
            <div class="tooltip-item" v-for="(value, key) in food.data.value" :key="key">
                <div class="tooltip-item-subtitle">
                    {{ translate(key) }}:
                </div>
                 <div class="tooltip-item-value" :class="{ 'negative-number': value < 0 }">
                    {{ value }}
                 </div>
            </div>
        </div>
    </div>
</template>
