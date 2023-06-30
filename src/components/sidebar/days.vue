<script setup lang="ts">
import useTime from '../../stores/useTime';
import { computed } from 'vue';

const time = useTime();
const progressPercentage = computed(() => {
    const [hours, minutes] = time.value.split(":").map(Number);
    return (hours * 60 + minutes) / (24 * 60) * 100;
});
</script>

<template>
    <div class="days">
        <div class="days-progress">
            <div class="days-progressbar" :style="{ width: progressPercentage + '%' }"></div>
            <div class="days-progress-icons">
                <img src="../../assets/images/icon/sun.png" class="days-sun" alt="sun">
                <img src="../../assets/images/icon/moon.png" class="days-moon" alt="moon">
            </div>
        </div>

    </div>
</template>

<style lang="scss">
.days {
    background: #00000017;
    border-radius: 5px;
    margin-bottom: .5rem;
    border: 2px solid rgb(8, 31, 89);
    overflow: hidden;

    &-title {
        font-size: .9rem;
        text-transform: uppercase;
    }

    &-value {
        font-weight: 700;
        text-align: center;
        font-size: 1.25rem;
    }

    &-progress {
        position: relative;
        display: flex;
        align-items: center;
        padding: 0 1rem;
        height: 40px;

        &bar {
            position: absolute;
            height: 40px;
            left: 0;
            background: linear-gradient(to right, #ffd700, #000000);
        }

        &-icons {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
        }
    }

    &-sun {
        height: 30px;
    }

    &-moon {
        height: 30px;
        transform: scaleX(-1);
    }
}
</style>
