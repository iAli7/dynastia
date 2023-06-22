<script setup lang="ts">
import food from "./resources/food.vue";
import happiness from './resources/happiness.vue';
import population from "./resources/population.vue";

import builds from "./builds/builds.vue";
import days from "./days/days.vue"

</script>

<template>
    <div class="header">
        <div class="container">
            <div class="resources">
                <happiness />
                <food />
                <population />
            </div>
            <days></days>
        </div>
    </div>

    <builds />
</template>