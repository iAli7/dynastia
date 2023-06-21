<script setup lang="ts">
import food from "./resources/food.vue";
import happiness from './resources/happiness.vue';
import population from "./resources/population.vue";

import builds from "./builds/builds.vue";
import light from "./resources/light.vue";

</script>

<template>
    <div class="header">
        <div class="container">
            <div class="resources">
                <happiness />
                <food />
                <light />
                <population />
            </div>
        </div>
    </div>

    <builds />
</template>