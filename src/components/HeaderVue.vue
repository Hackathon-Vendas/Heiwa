<script setup></script>

<template>
  <header>
    <div class="container">
      <img class="logo-principal" src="/public/logoH.png" />
      <h1 class="logo-secundaria">SUSHI & BAR</h1>
    </div>
    <div class="cart-icon">
      <img src="/public/logo-carrinho.svg" />
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
  position: fixed;
  filter: drop-shadow(0px 15px 29px rgba(189, 188, 188, 0.438));
}

.container {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: auto;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
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



.cart-icon {
  position: absolute;
  top: 30px;
  right: 25px;
}

.cart-icon img {
  width: 40px;
  height: auto;
  cursor: pointer;
}
@media (max-width: 1024px) { 
  header {
  width: 47%;
  padding: 7px;
  margin: auto;
  background-color: #1a1818;
  position: fixed;
  filter: drop-shadow(0px 15px 29px rgba(189, 188, 188, 0.438));
}


.container {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: auto;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
}


.logo-principal {
  height: 30px;
  width: 268px;
}


.logo-secundaria {
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  letter-spacing: 0.25em;
  color: #fff;
}


.cart-icon {
  position: absolute;


  top: 30px;
  right: 25px;
}


.cart-icon img {
  width: 40px;
  height: auto;
  cursor: pointer;
}
}


@media (max-width: 768px) {
  .container {
    width: 90%; /* Preenche quase toda a largura da tela */
  }


  .cart-icon {
    top: 20px;
    right: 15px;
  }


  .logo-principal {
    width: 220px;
    height: auto;
  }


  .logo-secundaria {
    font-size: 12px;
  }
}


@media (max-width: 480px) {
  .container {
    width: 100%; /* Ocupa toda a largura da tela */
  }


  .cart-icon {
    top: 15px;
    right: 10px;
  }


  .logo-principal {
    width: 180px;
    height: auto;
  }


  .logo-secundaria {
    font-size: 10px;
  }


  header {
    padding: 5px;
  }
}

</style>
