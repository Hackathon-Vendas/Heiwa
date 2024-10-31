<script setup>
import InicioVue from '@/components/InicioVue.vue'
import HeaderVue from '@/components/HeaderVue.vue'
import MenuVue from '@/components/MenuVue.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <MenuVue />
  
  <InicioVue />
  <main>
    <RouterView />
  </main>

  <HeaderVue />
  <RouterView />

</template>



<style scoped>
</style>