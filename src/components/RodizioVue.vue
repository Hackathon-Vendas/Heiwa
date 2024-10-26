<script setup>
import { ref } from "vue";

const showWelcomeScreen = ref(true)
function closeWelcomeScreen() {
    showWelcomeScreen.value = false
}
</script>

<template>
    <main>
        <div v-if="showWelcomeScreen" class="welcome-screen">
            <div class="welcome-content">
                <h1>ESCOLHA A OPÇÃO DESEJADA:</h1>
                <div class="input-container">
                    <div class="alacarte">
                        <span>À la carte</span>
                        <input type="radio">
                    </div>
                    <div class="alacarte">
                        <span>Rodízio</span>
                        <input type="radio">
                    </div>
                </div>
                <hr>
                <button @click="closeWelcomeScreen" class="continue-button">VOLTAR</button>
            </div>
        </div>
    </main>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:wght@300;400;500;600;700&display=swap');

.alacarte {
    background-color: #6B6B6B;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    width: calc(500px - 25px);
    height: 70px;
    border-radius: 14px;
    align-items: center;
    padding: 20px 40px;
}

hr {
    margin-top: 25px;
    border: 1.8px solid white;
    border-radius: 50px;
}

.input-container {
    flex-direction: column;
    font-family: 'Inter';
    font-size: 20px;
    font-weight: 500;
}

input {
}

.welcome-screen {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.425);
    display: flex;
    justify-content: center;
    align-items: center;
}

.welcome-content {
    text-align: center;
    color: white;
}

.welcome-content h1 {
    font-family: "Inter", serif;
    letter-spacing: 2px;
    max-width: 450px;
}

.continue-button {
    margin: auto;
    margin-top: 25px;
    font-weight: bold;
    font-size: 20px;
    color: #ffffff;
    cursor: pointer;
    background-color: #212020;
    border: solid #212020;
}

</style>