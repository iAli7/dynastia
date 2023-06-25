<script setup lang="ts">
import { ref } from 'vue';
import { translate } from '../../locale';
import { MessageKey } from '../../locale/messages/tr';

const showPopup = ref(false);
const countdisasterDay = ref(3)
const disasterType = ref("disaster.storm")
</script>
<template>
    <div class="disaster" :class="{'disaster-active': showPopup}" @click="showPopup = !showPopup">
        <div class="disaster-content">
            <div class="disaster-title">
                {{ translate("disaster.title") }}
            </div>
            <div class="disaster-description">
                {{ translate("disaster.description") }}
                <br>
                <br>
                Tahminlerimize göre fırtınanın bize ulaşması için yaklaşık <span>{{ countdisasterDay }} gün</span> kaldı.
                <br>
                <br>
                Bu sefer beklediğimiz felaket <span>{{ translate(disasterType as MessageKey) }}</span>
            </div>
        </div>
        <img src="../../assets/images/character.jpg" class="disaster-character" alt="character">
    </div>
</template>