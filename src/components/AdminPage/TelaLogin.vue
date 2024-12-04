<script setup>
import { ref } from 'vue';
const showWelcomeScreen = ref(true) 
</script>

<template>
    <div v-if="showWelcomeScreen" class="welcome-screen">
        <div class="login">
            <h1>LOGIN</h1>
            <label class="usernameLabel" for="username">Usuário: </label>
            <input type="text" class="username">
            <label class="passwordLabel" for="password">Senha</label>
            <input type="text" class="password">
            <button class="confirmarLogin">CONFIRMAR</button>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
*{
    font-family: "Inter", sans-serif;
}
.welcome-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--cor-fundoSite-icon);
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(50px);
    background-image: url(/src/assets/fundoLogin.png);
}
.login{
    display: flex;
    flex-direction: column;
    width: 428px;
    height: 329px;
}
h1{
    color: white;
    font-size: 30px;
    text-align: center;
    margin-bottom: 30px
}
label{
    color: white;
    font-size: 26px;
}
.usernameLabel{
    margin-bottom: 4px;
}
.passwordLabel{
    margin-top: 13px;
    margin-bottom: 4px;
}
input{
    border-radius: 12px;
    width: 427px;
    height: 49px;
}
.confirmarLogin{
    width: 427px;
    height: 55px;
    border-radius: 14px;
    margin-top: 34px;
    font-size: 24px;
    color: white;
    background-color: #B93333;
    font-weight: bold;
    }
</style>

