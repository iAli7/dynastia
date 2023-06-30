<script setup lang="ts">
import {  ref } from 'vue';
import { translate } from '../../locale';
import { MessageKey } from '../../locale/messages/tr';

import { useDisaster } from "./useDisaster";
import useDay from '../../stores/useDay';

const showPopup = ref(false);
const { disasterType, countDisasterDay } = useDisaster();
const selectedDisasterType = ref<MessageKey>(disasterType.value);

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
                Tahminlerimize göre fırtınanın bize ulaşması için yaklaşık <span>{{ countDisasterDay.value - useDay().value}} gün</span> kaldı.
                <br>
                <br>
                Bu sefer beklediğimiz felaket <span>{{ translate(selectedDisasterType) }}</span>
            </div>
        </div>
        <img src="../../assets/images/character.jpg" class="disaster-character" alt="character">
    </div>
</template>
