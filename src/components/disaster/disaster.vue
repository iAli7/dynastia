<script setup lang="ts">
import { ref } from 'vue';
import { translate } from '../../locale';
import { MessageKey } from '../../locale/messages/tr';

const showPopup = ref(false);
const countDiasterDay = ref(3)
const diasterType = ref("diaster.storm")
</script>
<template>
    <div class="diaster" :class="{'diaster-active': showPopup}" @click="showPopup = !showPopup">
        <div class="diaster-content">
            <div class="diaster-title">
                {{ translate("diaster") }}
            </div>
            <div class="diaster-description">
                {{ translate("diaster.description") }}
                <br>
                <br>
                Tahminlerimize göre fırtınanın bize ulaşması için yaklaşık <span>{{ countDiasterDay }} gün</span> kaldı.
                <br>
                <br>
                Bu sefer beklediğimiz felaket <span>{{ translate(diasterType as MessageKey) }}</span>
            </div>
        </div>
        <img src="../../assets/images/character.jpg" class="diaster-character" alt="character">
    </div>
</template>