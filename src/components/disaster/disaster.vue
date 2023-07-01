<script setup lang="ts">
import {  computed, ref } from 'vue';
import { translate } from '../../locale';

import { useDisaster } from "./useDisaster";
import useDay from '../../stores/useDay';
import showDisaster from './showDisaster.vue';

const showPopup = ref(false);
const { disasterType, countDisasterDay } = useDisaster();

const calcDisasterDay = computed(() => {
  const value = countDisasterDay.value - useDay().value;
  return value < 0 ? 0 : value;
});

</script>

<template>
    <div class="disaster" :class="{ 'disaster-active': showPopup }" @click="showPopup = !showPopup">
        <div class="disaster-content">
            <div class="disaster-title">
                {{ translate("disaster.title") }}
            </div>
            <div class="disaster-description">
                {{ translate("disaster.description") }}
                <br>
                <br>
                Tahminlerimize göre fırtınanın bize ulaşması için yaklaşık 
                <span v-if="calcDisasterDay === 0">Felaket gerçekleşiyor!</span>
                <span v-else-if="calcDisasterDay > 0">{{ calcDisasterDay }} gün</span>
                <span v-else>0 gün</span>
                kaldı.
                <br>
                <br>
                Bu sefer beklediğimiz felaket <span>{{ translate(disasterType.value) }}</span>
            </div>
        </div>
        <img src="../../assets/images/character.jpg" class="disaster-character" alt="character">
    </div>
    <showDisaster></showDisaster>
</template>
