<template>
  <div class="text-h1">{{ store.getTitle }}</div>
  <div class="text-body1">
    <v-btn color="primary" @click="btnClick1">{{ store.count }}</v-btn>
    <v-btn color="primary" @click="btnClick2">{{ store.getCount }}</v-btn>
  </div>
  <div class="row q-mt-sm">
    <div class="col">
      <v-btn color="primary" @click="updTitle1">제목 바꾸기 1</v-btn>
      <v-btn color="warning" @click="updTilte2">제목 바꾸기 2</v-btn>
    </div>
    <div class="col"></div>
  </div>
</template>
<script setup lang="ts">
import { useMyStore } from '~/stores/myStore';

const store = useMyStore();

const btnClick1 = (): void => {
  store.increment();
};
const btnClick2 = (): void => {
  store.count++;
};

const updTitle1 = (): void => {
  store.changeTitle('Actions를 이용한 변경');
};

const updTilte2 = (): void => {
  store.title = 'state로 바로 변경';
};
</script>
<style scoped></style>