<script setup lang="ts">
import useDay from '../../utils/useDay';
import time from '../../utils/useTime';

const day = useDay();
</script>

<template>
    <div class="days">
        <div class="days-title">Gün</div>
        <div class="days-value">
            {{ day.day }}
        </div>
        <div class="days-value">
            {{ time }}
        </div>
    </div>
</template>