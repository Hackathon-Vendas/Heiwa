
<script setup>
import FormaPagamento from './components/FormaPagamento.vue';
import RodizioVue from './components/RodizioVue.vue';
import { RouterView } from 'vue-router'
</script> 

<template>
<main>
  <FormaPagamento />
  <RodizioVue />
  <RouterView />
</main>
</template>

<style scoped>
</style> 