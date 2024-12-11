<script setup>
import Status from '@/components/AdminPage/Status.vue';
import HeaderVue from '@/components/HeaderVue.vue'
import AdicionarProdutos from '@/components/AdminPage/AdicionarProdutos.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const isAuthenticated = computed(() => store.getters.isAuthenticated);

if (!isAuthenticated.value) {
  this.$router.push('/login');
}
</script>

<template>
  <HeaderVue />
  <TelaLogin/>
  <Status />
  <AdicionarProdutos/>
</template>

<style scoped></style>