<script setup lang="ts">
import { mapItemConfig, showPopup } from './mapItemConfig';
import builds from "../builds/builds.vue"

defineProps({
    item: {
        type: String,
    }
})
</script>

<template>
    <div class="map-item-popup" v-if="showPopup">
        <div class="map-item-popup-top">
            <div class="map-item-popup-close" @click="showPopup = false"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 6l6 6l-6 6"></path>
             </svg></div>
            <svg height="350px" viewBox="0 0 800 350" width="800px" x="0px" y="0px" class="Background__top__3tUGE">
                <defs>
                    <clipPath id="universe-map0">
                        <polygon points="
                0,0
                800,0
                800,350
                0,350
                0,80
                30,50
                0,20
                "></polygon>
                    </clipPath>
                </defs>
                <polygon points="
                0,0
                800,0
                800,350
                0,350
                0,80
                30,50
                0,20
                "></polygon>
            </svg>
        </div>
        <div class="map-item-popup-bottom">
            <div class="map-item-popup-content">
                <div class="map-item-popup-title">
                {{ mapItemConfig[item].title }}
                </div>
                <div class="map-item-popup-description">
                {{ mapItemConfig[item].description }}
                </div>
                <builds></builds>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.map-item-popup {
    position: fixed;
    right: 0;
    top: 0;
    filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.5));
    width: 800px;
    height: 100vh;
    z-index: 999;

    &-close{
        position: absolute;
        top: 35px;
        left: -15px;
        background: #010a13;
        height: 30px;
        width: 30px;
        filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.5));
        transform: rotate(45deg);
        display: flex;
        justify-content: center;
        cursor: pointer;
        border: 1px solid #1e2328;
        align-items: center;

        svg{
            transform: rotate(-45deg);
            color: #cdbe91;
        }
    }

    &-bottom {
        background: #010a13;
        height: 100%;
        position: relative;
        top: -7px;
        padding: 10px 3rem;
        text-align: left;
    }

    &-content{
        position: relative;
        top: -350px;
        color: #fff;
    }

    &-title{
        font-size: 2rem;
        font-weight: 900;
        text-transform: uppercase;
    }

    &-description{
        font-size: 14px;
    }
}</style>