<template>
    <div class="tooltip" v-if="visible">
      <div class="tooltip-item">
        <div class="tooltip-item-subtitle">
          Harcanacak altın:
        </div>
        <div class="tooltip-item-value negative-number">
          {{ building.cost.gold }}
        </div>
      </div>
      <div class="tooltip-item">
        <div class="tooltip-item-subtitle">
          Saniyede ek yemek:
        </div>
        <div class="tooltip-item-value">
          {{ building.revenue.food }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { defineProps } from 'vue';

  export default {
  props: {
    building: {
      type: Object,
      required: true
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    return defineProps(['building', 'visible']);
  }
};
  </script>