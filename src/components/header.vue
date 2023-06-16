<script setup lang="ts">
import food from "./food.vue";
import happiness from './happiness.vue';
import population from "./population.vue";

</script>

<template>
    <div class="header">
        <div class="container">
            <happiness />
            <food />
            <population />
        </div>
    </div>
</template>