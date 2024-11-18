<script setup>
<<<<<<< HEAD
import { ref } from "vue";
import ContaModal from './components/ContaModal.vue';
=======
import { ref } from 'vue';
import RodizioVue from '@/components/RodizioVue.vue';
import NumeroMesa from '@/components/NumeroMesa.vue';
import CarrosselPrincipal from '@/components/CarrosselPrincipal.vue';
import ModalPedidos from '@/components/ModalPedidos.vue';
import InicioVue from '@/components/InicioVue.vue';
import CarrosselSecundario from '@/components/CarrosselSecundario.vue';
const ModalA = ref(0);
>>>>>>> feat-42
</script>

<template>
  <InicioVue style="z-index: 1000;" @modal="ModalA++" />
  <NumeroMesa v-if="ModalA == 1" @proximoModal="ModalA++" />
  <RodizioVue v-if="ModalA == 2" @voltarParaMesa="ModalA--" @FinalModal="ModalA++" />
  <main>
<<<<<<< HEAD
    <ContaModal/>

=======
    <ModalPedidos />
    <div class="carosselp">
      <CarrosselPrincipal />
    </div>
    <CarrosselSecundario />
>>>>>>> feat-42
  </main>
</template>

<style scoped>
main {
  margin-left: 15%;
  margin-top: 8%;
}


</style>