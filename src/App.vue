<script setup>
import HeaderVue from '@/components/HeaderVue.vue'
import MenuVue from '@/components/MenuVue.vue'
import ModalPedidos from './components/ModalPedidos.vue';
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <MenuVue />
  <HeaderVue />
  <ModalPedidos />
  <RouterView />

</template>

<style scoped>
</style>