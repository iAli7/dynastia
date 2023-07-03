<script setup lang="ts">
import useDay from "../../stores/useDay"
</script>

<template>
    <div class="day-animation" v-show="useDay().showDayAnimation">
        HEYd
    </div>
</template>