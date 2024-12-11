<script setup>
import ModalPedidosVue from './ModalPedidos.vue';
import { ref } from 'vue';
const showModal = ref(false);
import router from '@/router'

const rota = router.currentRoute.value.name;
console.log(router.currentRoute.value)
</script>

<template>
  <ModalPedidosVue v-model:isOpen="showModal"/>
  <header>
      <div class="home">
        <img class="voltar" src="/Voltar.png" alt="Home Icon" v-if="rota !== 'home'" @click="router.push('/')">
      </div>
      <div class="logo">
        <img class="logo-principal" src="/logoH.png" alt="Logo Principal" />
        <h1 class="logo-secundaria">SUSHI & BAR</h1>
      </div>
      <div class="cart">
        <img class="cart-icon" style="position: absolute; right: 5%; top: 28%;" src="@/assets/logo-carrinho.svg" alt="Cart Icon" @click="showModal = !showModal" />
      </div>
  </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap'); 

header {
  width: 100%;
  padding: 15px;
  display: grid;
  height: 120px;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: #1a1818;
  position: fixed;
  top: 0;
}
.home{
  display: flex;
  align-items: center;
}
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  max-width: 92%;
  margin: auto;
  position: relative;
}

.voltar,
.cart-icon {
  cursor: pointer;
  width: 51px;
  margin-left: 60px;
  margin-right: 22px;
}


.logo {
  grid-column: 2;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.logo-principal {
  height: 54px;
  width: auto;
}

.cart {
  grid-column: 3;
  display: flex;
  justify-content: end;
}
.logo-secundaria {
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  letter-spacing: 0.25em;
  color: #fff;
}
.cart-icon img {
  width: 40px;
  height: auto;
  cursor: pointer;
}

</style>