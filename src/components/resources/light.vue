<script setup lang="ts">
import { ref, computed } from 'vue';
import store from '../../config/store';
import convertToInteger from "../../utils/convertToInteger"

const showTooltip = ref(false);
const changeAmount = computed(() => {
    return convertToInteger(store.light.value + store.buffLight.value)
});

setInterval(() => {
    const change = convertToInteger(store.light.value + store.buffLight.value);
    store.food.value = change;
}, 5000);
</script>

<template>
    <div class="resources-item food" @mouseenter="showTooltip = true" @mouseleave="showTooltip = false">
        <img src="../../assets/images/icon/light.png" class="food-image" alt="food icon">
        <div class="food-number">{{ store.light.value }}</div>
        <div v-if="showTooltip" class="tooltip">
            <div class="tooltip-title">Elektirik</div>
            <div class="tooltip-item tooltip-item-top">
                <div class="tooltip-item-subtitle">
                    Anlık Elektirik Durumu:
                </div>
                <div class="tooltip-item-value" :class="{'negative-number':changeAmount < 1}">
                    <div v-if="store.light.value === 0">Henüz Elektirik Kazanamıyorsun</div>
                    <div v-else>{{changeAmount}}</div>
                </div>
            </div>
            <div class="tooltip-item" v-if="store.buffFood.value != 0">
                <div class="tooltip-item-subtitle">
                    Binalardan ek yemek:
                </div>
                <div class="tooltip-item-value" :class="{'negative-number':store.buffFood.value < 0}">
                    {{ store.buffFood.value }}
                </div>
            </div>
        </div>
    </div>
</template>
