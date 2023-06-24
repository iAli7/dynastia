<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import BUILDINGS from '../../config/build';
import tooltip from './tooltip.vue';
import useNumberMap from '../../composables/useNumberMap';
import { translate } from '../../locale';
import { MessageKey } from '../../locale/messages/tr';

const food = useNumberMap('food');
const gold = useNumberMap('gold');

const tooltips = ref(BUILDINGS.map(() => false));
const modalVisible = ref(false);
const successToastVisible = ref(false);
const dangerToastVisible = ref(false);
const countdown = ref(5);
const countdownTimer = ref(0);

const showTooltip = (index: number) => {
  tooltips.value[index] = true;
};

const hideTooltip = (index: number) => {
  tooltips.value[index] = false;
};

const handleUpgrade = (build: any) => {
  const revenuePrice = build.revenue.food;
  const costPrice = build.cost.gold;

  if (modalVisible.value) return;

  if (!modalVisible.value && gold.total.value + costPrice >= 0) {
    gold.setItem(build.key, costPrice);
    food.setItem(build.key, revenuePrice);
    openSuccessToast();
  } else {
    openDangerToast();
  }
};

const openSuccessToast = () => {
  successToastVisible.value = true;
  modalVisible.value = true;
  countdown.value = 5;
  countdownTimer.value = setInterval(() => {
    countdown.value--;
    if (countdown.value === 0) {
      closeSuccessToast();
    }
  }, 1000);
};

const closeSuccessToast = () => {
  successToastVisible.value = false;
  modalVisible.value = false;
  clearInterval(countdownTimer.value);
};

const openDangerToast = () => {
  dangerToastVisible.value = true;
  modalVisible.value = true;
  countdown.value = 5;
  countdownTimer.value = setInterval(() => {
    countdown.value--;
    if (countdown.value === 0) {
      closeDangerToast();
    }
  }, 1000);
};

const closeDangerToast = () => {
  dangerToastVisible.value = false;
  modalVisible.value = false;
  clearInterval(countdownTimer.value);
};

onMounted(() => {
  watch(modalVisible, (newValue) => {
    if (!newValue) {
      countdown.value = 5;
      clearInterval(countdownTimer.value);
    }
  });
});

onBeforeUnmount(() => {
  clearInterval(countdownTimer.value);
});
</script>

<template>
  <div>
    <div v-if="successToastVisible" class="toast">
      <div class="toast-content">
        <h2>İşlem Başarılı!</h2>
        <p>{{ countdown }} saniye içinde kapatılacaktır. Eğer beklemeden kapatmak isterseniz butona basınız!</p>
      </div>
      <button class="modal-close-button" @click="closeSuccessToast">Kapat</button>
    </div>
    <div v-if="dangerToastVisible" class="toast toast-danger">
      <div class="toast-content">
        <h2>İşlem Başarısız!</h2>
        <p>{{ countdown }} saniye içinde kapatılacaktır. Eğer beklemeden kapatmak isterseniz butona basınız!</p>
      </div>
      <button class="toast-close-button" @click="closeDangerToast">Kapat</button>
    </div>
    <div class="builds">
      <div class="builds-title">Yapılar</div>
      <div class="builds-description">Mevcut binalar</div>
      <div class="builds-content">
        <div
          class="builds-item"
          @click="handleUpgrade(building)"
          v-for="(building, index) in BUILDINGS"
          :key="building.key"
          @mouseenter="showTooltip(index)"
          @mouseleave="hideTooltip(index)"
        >
          <img src="../../assets/images/icon/quarters.png" class="builds-item-image" alt="" />
          <div class="builds-item-title">{{ translate(building.key as MessageKey) }}</div>
          <div class="builds-item-description">{{ building.description }}</div>
          <tooltip :building="building" :visible="tooltips[index]" />
        </div>
      </div>
    </div>
  </div>
</template>
