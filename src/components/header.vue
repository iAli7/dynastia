<script setup lang="ts">
import food from "./resources/food.vue";
import happiness from './resources/happiness.vue';
import population from "./resources/population.vue";
import gold from "./resources/gold.vue";
import builds from "./builds/builds.vue";

import useDay from "../stores/useDay";

const day = useDay();
</script>

<template>
    <div class="header">
        <div class="container">
            <div class="resources">
                <happiness />
                <food />
                <population />
                <gold />
                <div class="days">
                    <div class="days-title">Gün</div>
                    <div class="days-value">
                        {{ day.value }}
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- <builds /> -->
</template>