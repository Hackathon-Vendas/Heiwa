<script setup>
import { ref } from 'vue';
import { arM } from '@/stores/armazenamento';

import InicioVue from '@/components/InicioVue.vue';
import NumeroMesa from '@/components/NumeroMesa.vue';
import MenuVue from '@/components/MenuVue.vue';
import HeaderVue from '@/components/HeaderVue.vue';
import RodizioVue from '@/components/RodizioVue.vue'; // Certifique-se de que este componente está implementado
import ContaModal from '@/components/ContaModal.vue';
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
  <RodizioVue 
    v-if="ModalA === 2 && guarda.getRodizio().value === null" 
    @voltarParaMesa="ModalA--" 
    @FinalModal="ModalA++" 
  />
  <ContaModal />
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
