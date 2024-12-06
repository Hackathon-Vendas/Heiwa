<script setup>
import Status from '@/components/AdminPage/Status.vue';
import MenuVue from '@/components/MenuVue.vue'
import HeaderVue from '@/components/HeaderVue.vue'
import ProdutosAdmin from '@/components/AdminPage/ProdutosAdmin.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const isAuthenticated = computed(() => store.getters.isAuthenticated);

if (!isAuthenticated.value) {
  // Redireciona para o login se não estiver autenticado
  this.$router.push('/login');
}
</script>

<template>
  <HeaderVue />
    <TelaLogin/>
    <Status />
</template>

<style scoped></style>