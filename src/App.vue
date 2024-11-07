<script setup>
import HeaderVue from '@/components/HeaderVue.vue'
import MenuVue from '@/components/MenuVue.vue'
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <HeaderVue />
  </header>
  <main>
  <MenuVue />
  
  <RouterView />
</main>
</template>

<style scoped>
</style>