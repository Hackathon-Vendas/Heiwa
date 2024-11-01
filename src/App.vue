<script setup>
import InicioVue from '@/components/InicioVue.vue'
import HeaderVue from '@/components/HeaderVue.vue'
import MenuVue from '@/components/MenuVue.vue'
</script>

<template>
 
  <InicioVue />
  <MenuVue />

  <HeaderVue />
  <RouterView />

</template>



<style scoped>
</style>