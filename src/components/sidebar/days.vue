<script setup lang="ts">
import useDay from '../../stores/useDay';
import useTime from '../../stores/useTime';

const day = useDay();
const time = useTime()
</script>

<template>
    <div class="days">
        <div class="days-title">Gün</div>
        <div class="days-value">
            {{ day.value }}
        </div>
        <div class="days-value">
            {{ time.value }}
        </div>
    </div>
</template>