<script setup lang="ts">
import { translate } from '../../locale';
import { useDisaster } from './useDisaster';

const { disasterType, showPopup } = useDisaster();

</script>

<template>
    <div class="disaster-animation" v-if="showPopup">
        <div class="disaster-animation-content">
            <div class="disaster-animation-title">
                {{ translate(disasterType.value) }}
            </div>
        </div>
        <div class="disaster-animation-backdrop"></div>
    </div>
</template>

<style lang="scss">
.disaster-animation {
    &-content{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 100;
        color: #fff;
    }

    &-backdrop {
        position: fixed;
        width: 100vw;
        height: 100vh;
        background-color: rgba(#000, .7);
        z-index: 98;
        left: 0;
        top: 0;
    }
}
</style>