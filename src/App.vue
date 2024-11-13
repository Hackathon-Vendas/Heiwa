<script setup>
import HeaderVue from '@/components/HeaderVue.vue'
import MenuVue from '@/components/MenuVue.vue'
</script>

<template>
<main>
  <MenuVue />
  <HeaderVue />
  
  <RouterView />
</main>
</template>

<style scoped>
</style>