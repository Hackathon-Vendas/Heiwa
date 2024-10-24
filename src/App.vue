<script setup>
import HeaderVue from '@/components/HeaderVue.vue'
import MenuVue from '@/components/MenuVue.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <MenuVue />
  <HeaderVue />
  <RouterView />
</template>



<style scoped>
</style>