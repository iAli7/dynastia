<script setup lang="ts">
import { ref } from 'vue';
import BUILDINGS from '../../config/build';
import Tooltip from './Tooltip.vue';

const tooltips = ref(BUILDINGS.map(() => false));

const showTooltip = (index:number) => {
  tooltips.value[index] = true;
};

const hideTooltip = (index:number) => {
  tooltips.value[index] = false;
};

const handleUpgrade = (build: any) =>{
    const revenuePrice = build.revenue.food
    const costPrice = build.cost.food;

    console.log(revenuePrice,costPrice);
}
</script>

<template>
    <div class="builds">
      <div class="builds-title">Yapılar</div>
      <div class="builds-description">Mevcut binalar</div>
      <div class="builds-content">
        <div class="builds-item" @click="handleUpgrade(building)" v-for="(building, index) in BUILDINGS" :key="building.key" @mouseenter="showTooltip(index)" @mouseleave="hideTooltip(index)">
          <div class="builds-item-title">
            {{ building.key }}
          </div>
          <div class="builds-item-description">
            {{ building.description }}
          </div>
          <Tooltip :building="building" :visible="tooltips[index]" />
        </div>
      </div>
    </div>
  </template>