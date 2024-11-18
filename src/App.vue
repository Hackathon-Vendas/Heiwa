
<script setup>
import HeaderVue from '@/components/HeaderVue.vue'
import ContaModal from '@/components/ContaModal.vue';
import MenuVue from '@/components/MenuVue.vue'
import ModalPedidos from '@/components/ModalPedidos.vue';
</script> 

<template>
<ContaModal/>
  <MenuVue />
  <HeaderVue />
  <ModalPedidos />
  <RouterView />
</template>

<style scoped>
</style> 