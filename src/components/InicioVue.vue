
<script setup>
import { ref } from 'vue';

const emit = defineEmits([
    'modal'
])

const showWelcomeScreen = ref(true) 
function closeWelcomeScreen() {
    showWelcomeScreen.value = false
    emit('modal')
}


</script>

<template>
    <div v-if="showWelcomeScreen" class="welcome-screen">
        <div class="welcome-content">
            <h1>BEM-VINDO AO </h1>
            <img class="logo-principal" src="/logoHeiwa.png">
            <h2>SUSHI & BAR</h2>
            <button @click="closeWelcomeScreen()" class="continue-button">CONTINUAR</button>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');


input {
    margin-top: 30px;
    width: 75%;
    height: 50px;
    background-color: #D9D9D9;
    border-radius: 14px;
    border: 1px solid #ffffff;
    padding-left: 40px;
    font-size: 16px;
}

input:focus {
    outline: none;
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
    backdrop-filter: blur(5px);
}

.welcome-content {
    text-align: center;
    color: white;

}

.welcome-content h1 {
    font-size: 20px;
    font-family: 'Inter', sans-serif;
    font-weight: 900;
    letter-spacing: 4px;
    color: #fff;
    margin-right: 45px; 
}

.logo-principal {
    height: 156px;
    width: 520px;
    margin-top: 20px;
}

.welcome-content h2 {
    font-size: 20px;
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    letter-spacing: 6px;
    color: #fff;
    margin-top: -81px;
    margin-right: 45px;
}

.continue-button {
    width: 40%;
    height: 50px;
    margin-top: 35px;
    margin-left: 25.6%;
    font-weight: bold;
    font-size: 20px;
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.726);
    border: 2px solid #ffffff;
    border-radius: 14px;
    cursor: pointer;
    display: block;
}


.continue-button:hover {
    background-color: #ffffffd2;
    color: black;
    transition: background-color 0.3s ease;
    cursor: pointer;
}
</style>
