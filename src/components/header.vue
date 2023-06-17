<script setup lang="ts">
import food from "./food.vue";
import happiness from './happiness.vue';
import population from "./population.vue";

</script>

<template>
    <div class="header">
        <div class="container">
            <div class="resources">
                <happiness />
                <food />
                <population />
            </div>
        </div>
    </div>
</template>