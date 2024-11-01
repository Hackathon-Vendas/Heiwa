<script setup>

import RodizioVue from '@/components/RodizioVue.vue';
import NumeroMesa from '@/components/NumeroMesa.vue';
import CarrosselPrincipal from '@/components/CarrosselPrincipal.vue';
import InicioVue from '@/components/InicioVue.vue' 
import { ref } from 'vue';



</script>

<template>
  <InicioVue />
  <RodizioVue />
  <NumeroMesa />
  <main>
    <CarrosselPrincipal />
  </main>
</template>

<style scoped>
main {
  margin-top: 85px;
}
</style>