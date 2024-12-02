
<script setup>
import HeaderVue from '@/components/HeaderVue.vue'
import ContaModal from './components/ContaModal.vue';
import MenuVue from '@/components/MenuVue.vue'
import ModalPedidos from './components/ModalPedidos.vue';
import { RouterLink, RouterView } from 'vue-router'
</script> 

<template>
<main>
<ContaModal/>
  <!-- <MenuVue /> -->
  <HeaderVue />
  <ModalPedidos />
  <RouterView />
</main>

</template>

<style scoped>
</style> 