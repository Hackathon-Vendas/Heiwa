<script setup>
import ContaModal from '@/components/ContaModal.vue';
import { ref } from 'vue';
import NumeroMesa from '@/components/NumeroMesa.vue';
import CarrosselPrincipal from '@/components/CarrosselPrincipal.vue';
import ModalPedidos from '@/components/ModalPedidos.vue';
import InicioVue from '@/components/InicioVue.vue';
import CarrosselSecundario from '@/components/CarrosselSecundario.vue';
import {arM} from '@/stores/armazenamento';
import MenuVue from '@/components/MenuVue.vue'

const ModalA = ref(0);
const guarda = arM()
</script>

<template>

  <NumeroMesa />
  <InicioVue style="z-index: 1000;" />
  <RodizioVue v-if="ModalA == 2 && guarda.getRodizio().value==null" @voltarParaMesa="ModalA--; guarda.setRodizio(true)" @FinalModal="ModalA++" />
  
  <main>
    <ContaModal/>
    <ModalPedidos />
    <CarrosselPrincipal />
    <CarrosselSecundario />
  </main>
</template>

<style scoped>
main {
  margin-left: 15%;
  margin-top: 8%;
}


</style>