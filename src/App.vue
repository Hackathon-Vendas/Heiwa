<script setup>
import HeaderVue from '@/components/HeaderVue.vue'
import MenuVue from '@/components/MenuVue.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <HeaderVue />
  <MenuVue />
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
