<script setup>
import { ref } from 'vue';
import { arM } from '@/stores/armazenamento';

import InicioVue from '@/components/InicioVue.vue';
import NumeroMesa from '@/components/NumeroMesa.vue';
import MenuVue from '@/components/MenuVue.vue';
import HeaderVue from '@/components/HeaderVue.vue';
import ModalPedidos from '@/components/ModalPedidos.vue';
import CarrosselPrincipal from '@/components/CarrosselPrincipal.vue';
import CarrosselSecundario from '@/components/CarrosselSecundario.vue';

let ModalA = ref(0); // Controla qual modal está sendo exibido
const guarda = arM();
</script>

<template>
  <MenuVue />
  <HeaderVue />

  <InicioVue v-if="ModalA === 0" @modal="ModalA++" />
  <NumeroMesa v-if="ModalA === 1 && guarda.getNmesa().value === null" @avancar="ModalA++" />
  <ModalPedidos />

  <main>
    <CarrosselPrincipal />
    <CarrosselSecundario />
  </main>
</template>

<style scoped>
main {
  margin-left: 250px;
  margin-top: 8%;
}
</style>
