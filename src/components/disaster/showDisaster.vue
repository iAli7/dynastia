
<script setup lang="ts">
import { MessageKey, translate } from '../../locale';
import { useDisaster } from './useDisaster';

const { disasterType, showPopup } = useDisaster();

const description = disasterType.value + ".description"
</script>

<template>
    <div class="disaster-animation" v-if="showPopup">
            <img src="../../assets/images/disaster/bloodMoon.jpg" class="disaster-animation-image" alt="">
            <div class="disaster-animation-content">
            <div class="disaster-animation-title">
                {{ translate(disasterType.value) }}
            </div>
            <div class="disaster-animation-description">
                {{ translate(description as MessageKey) }}
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

    &-image{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        filter: blur(2rem);
        opacity: 1;
        z-index: 100;
    }

    &-title{
        font-size: 7rem;
        color: rgb(255, 0, 0);
        font-weight: 800;
    }

    &-description{
        font-size: 14px;
    }
}
</style>