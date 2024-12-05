<script setup>
import ContaModal from '@/components/ContaModal.vue';
import { ref } from 'vue';
import NumeroMesa from '@/components/NumeroMesa.vue';
import CarrosselPrincipal from '@/components/CarrosselPrincipal.vue';
import ModalPedidos from '@/components/ModalPedidos.vue';
import InicioVue from '@/components/InicioVue.vue';
import CarrosselSecundario from '@/components/CarrosselSecundario.vue';
const ModalA = ref(0);
</script>

<template>
  <InicioVue style="z-index: 1000;" @modal="ModalA++" />
  <NumeroMesa v-if="ModalA == 1" @proximoModal="ModalA++" />
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