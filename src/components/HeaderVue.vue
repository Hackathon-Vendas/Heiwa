<script setup>
import { RouterLink, useRouter } from 'vue-router';

import router from '@/router'

const rota = router.currentRoute.value.path;
console.log(router.currentRoute.value.path)
</script>

<template>
  <header>
    <div class="container">
      <div class="home">
        <img class="voltar" src="/public/Voltar.png" alt="Home Icon">
      </div>
      <div class="logo">
        <img class="logo-principal" src="/public/logoH.png" alt="Logo Principal" />
        <h1 class="logo-secundaria">SUSHI & BAR</h1>
      </div>
      <div class="cart">
        <img class="cart-icon" src="/public/Vector.png" alt="Cart Icon" />
      </div>
    </div>
  </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap'); 

header {
  width: 100%;
  padding: 7px ;
  background-color: #1a1818;
  box-shadow: 0px 15px 29px rgba(189, 188, 188, 0.438);
  position: relative;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 92%;
  margin: auto;
  position: relative;
}

 .voltar, .cart-icon {
  height: 45px;
  width: 45px;
 }

.logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  
}

.logo-principal {
  height: 54px;
  width: auto;
}

.logo-secundaria {
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  letter-spacing: 0.25em;
  color: #fff;
}
</style>
