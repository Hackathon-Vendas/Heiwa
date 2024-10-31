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
      <img class="voltar" src="/public/Voltar.png">
    </div>
    <div class="logos">
      <img class="logo-principal" src="/public/logoH.png" />
      <h1 class="logo-secundaria">SUSHI & BAR</h1>
    </div>
    <div class="cart">
      <img class="cart-icon" src="/public/Vector.png" />
    </div>
    </div>
  </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap'); 


header {
  width: 100%;
  padding: 7px;
  margin: auto;
  background-color: #1a1818;
  position: static;
  filter: drop-shadow(0px 15px 29px rgba(189, 188, 188, 0.438));
}

.container{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;

}

.logos {
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 137px;
}

.home, .home {
  flex: 1;
  display: flex;
  justify-content: center;
 
}

.voltar{
 position: relative; 
margin-right: 70%;
margin-left: 2%;
}

.logo-principal {
  height: 54px;
  width: 268px;
}

.logo-secundaria {
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  font-weight: 300; 
  letter-spacing: 0.25em;
  color: #fff;
}




</style>
