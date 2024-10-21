<script setup>
import InicioVue from '@/components/InicioVue.vue'
import HeaderVue from '@/components/HeaderVue.vue'
import MenuVue from '@/components/MenuVue.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <HeaderVue />
  <MenuVue />
  <InicioVue />
  <main>
    <RouterView />
  </main>
  
</template>

<style scoped></style>
