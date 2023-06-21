<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import BUILDINGS from '../../config/build';
import Tooltip from './Tooltip.vue';
import store from '../../config/store';
import convertToInteger from '../../utils/convertToInteger';

const tooltips = ref(BUILDINGS.map(() => false));

const showTooltip = (index:number) => {
  tooltips.value[index] = true;
};

const hideTooltip = (index:number) => {
  tooltips.value[index] = false;
};

const modalVisible = ref(false);
const successModalVisible = ref(false);
const dangerModalVisible = ref(false);
const countdown = ref(5);
let timer: NodeJS.Timer;

const handleUpgrade = (build: any) => {
    const revenuePrice = build.revenue.food;
    const costPrice = build.cost.food;

    if(modalVisible.value) return;

    if (!modalVisible.value && store.food.value - costPrice >= 0) {
      store.food.value = convertToInteger(store.food.value - costPrice);
      store.buffFood.value += revenuePrice;
      openSuccessModal();
    } else {
      openDangerModal();
    }
};

const openSuccessModal = () => {
  successModalVisible.value = true;
  modalVisible.value = true;
  countdown.value = 5;
  timer = setInterval(() => {
    countdown.value--;
    if (countdown.value === 0) {
      closeSuccessModal();
    }
  }, 1000);
};

const closeSuccessModal = () => {
  successModalVisible.value = false;
  modalVisible.value = false;
  clearInterval(timer);
};

const openDangerModal = () => {
  dangerModalVisible.value = true;
  modalVisible.value = true;
};

const closeDangerModal = () => {
  dangerModalVisible.value = false;
  modalVisible.value = false;
};

onMounted(() => {
  watch(modalVisible, (newValue) => {
    if (!newValue) {
      countdown.value = 5;
      clearInterval(timer);
    }
  });
});

onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>

<template>
  <div v-if="successModalVisible" class="modal">
    <div class="modal-content">
      <h2>İşlem Başarılı!</h2>
      <p>{{ countdown }} saniye içinde kapatılacaktır. Eğer beklemeden kapatmak isterseniz butona basınız!</p>
    </div>
    <button class="modal-close-button" @click="closeSuccessModal">Kapat</button>
  </div>
  <div v-if="dangerModalVisible" class="modal modal-danger">
    <div class="modal-content">
      <h2>İşlem Başarısız!</h2>
      <p>Bu işlem için yeterli kaynak bulunmamaktadır.</p>
    </div>
    <button class="modal-close-button" @click="closeDangerModal">Kapat</button>
  </div>
  <div class="builds">
    <div class="builds-title">Yapılar</div>
    <div class="builds-description">Mevcut binalar</div>
    <div class="builds-content">
      <div class="builds-item" @click="handleUpgrade(building)" v-for="(building, index) in BUILDINGS" :key="building.key" @mouseenter="showTooltip(index)" @mouseleave="hideTooltip(index)">
        <img src="../../assets/images/icon/quarters.png" class="builds-item-image" alt="">
        <div class="builds-item-title">
          {{ building.key }}
        </div>
        <div class="builds-item-description">
          {{ building.description }}
        </div>
        <Tooltip :building="building" :visible="tooltips[index]" />
      </div>
    </div>
  </div>
</template>
