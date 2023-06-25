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
  
<script lang="ts" setup>
import { BuildingsUnstrictKeys } from '../../config/build';

interface Props {
  building: BuildingsUnstrictKeys,
  visible: boolean
}

defineProps<Props>()
</script>