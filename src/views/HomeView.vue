<script setup>
import { ref } from 'vue';
import RodizioVue from '@/components/RodizioVue.vue';
import NumeroMesa from '@/components/NumeroMesa.vue';
import CarrosselPrincipal from '@/components/CarrosselPrincipal.vue';
import InicioVue from '@/components/InicioVue.vue';

const ModalA = ref(0);

</script>

<template>
  <InicioVue @modal="ModalA++" />
  <NumeroMesa v-if="ModalA == 1" @proximoModal="ModalA++" />
  <RodizioVue v-if="ModalA == 2" @voltarParaMesa="ModalA--" />
  <main>
    <CarrosselPrincipal />
  </main>
</template>

<style scoped>
main {
  margin-top: 85px;
}

</style>