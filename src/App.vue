
<script setup>
import HeaderVue from '@/components/HeaderVue.vue'
import ContaModal from './components/ContaModal.vue';
import MenuVue from '@/components/MenuVue.vue'
import ModalPedidos from './components/ModalPedidos.vue';
import RodizioVue from './components/RodizioVue.vue';
import { RouterLink, RouterView } from 'vue-router'
</script> 

<template>
<main>
  <RodizioVue />
<ContaModal/>
  <MenuVue />
  <HeaderVue />
  <ModalPedidos />
  <RouterView />
</main>

</template>

<style scoped>
</style> 