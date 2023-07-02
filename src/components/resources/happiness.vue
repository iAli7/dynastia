<script setup lang="ts">
import { ref } from 'vue';
import {translate} from "../../locale/index"
import convertToInteger from "../../utils/convertToInteger"
import { MessageKey } from '../../locale/messages/tr';
import { food, happiness, population } from '../../composables/resource';

const showTooltip = ref(false);

const handleHappiness = () =>{
    let happinessFood = (food.total.value * 5) / 80;
    let happinessPopulation = - (population.value * 5) / 200;

    happiness.setItem("food", happinessFood)
    happiness.setItem("population", happinessPopulation)
    happiness.setItem("base", 5)
}

handleHappiness()
setInterval(handleHappiness, 5000);
</script>

<template>
    <div class="resources-item happiness" :class="{ 'happiness-angry': happiness.total.value < 0 }" @mouseenter="showTooltip = true"
        @mouseleave="showTooltip = false">
        <div class="happiness-image-wrapper" v-if="happiness.total.value >= 0">
            <img src="../../assets/images/icon/happiness.png" class="happiness-image" alt="happiness icon">
        </div>
        <div class="happiness-image-wrapper" v-else>
            <img src="../../assets/images/icon/angry.png" class="happiness-image" alt="happiness icon">
        </div>
        <div class="happiness-number">
            {{ convertToInteger(happiness.total.value) }}
        </div>
        <div v-if="showTooltip" class="tooltip">
            <div class="tooltip-title">Mutluluk</div>
            <div class="tooltip-item" v-for="(value, key) in happiness.data.value" :key="key">
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