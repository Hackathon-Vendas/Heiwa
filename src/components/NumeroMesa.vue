<script setup>
import { ref } from "vue";

const FuncaoExpandir = ref(true)
const numMesa = ref(null)

function Permissao() {
    if (numMesa.value < 1 || numMesa.value   > 90) {
        alert(`Por favor, inserir número da mesa`)
    }
    else {
        FuncaoExpandir.value = false
    }
}
</script>

<template>
    <main>
        <div v-if="FuncaoExpandir" class="bemVindo">
            <div class="container">
                <h1>DIGITE O NÚMERO DA SUA MESA</h1>
                <div class="input-container">
                    <img src="/Mesa.png" class="input-icon">
                    <input type="number" min="1" max="90" id="numMesa" required v-model="numMesa">
                </div>
                <button @click="Permissao" class="continue-button">CONTINUAR</button>
            </div>
        </div>
    </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:wght@300;400;500;600;700&display=swap');

.input-container {
    position: relative;
    align-items: center;
}

.input-icon {
    margin-top: 22px;
    position: absolute;
    left: 35px;
    padding: 10px;
    width: 25px;
    border-right: 2px solid rgba(0, 0, 0, 0.739);
    cursor: pointer;
}


input {
    margin-top: 15px;
    width: calc(75% - 15px);
    height: 50px;
    background-color: #D9D9D9;
    border-radius: 14px;
    border: 1px solid #D9D9D9;
    padding-left: 60px;
    font-size: 20px;
}

input:focus {
    outline: none;
}


.bemVindo {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.425);
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    text-align: center;
    color: white;
}

.container h1 {
    font-family: "Inter", serif;
    letter-spacing: 1.5px;
    font-size: 30px;
    max-width: 450px;
}

.continue-button {
    width: 85%;
    height: 55px;
    margin: auto;
    margin-top: 35px;
    font-weight: bold;
    font-size: 20px;
    color: #ffffff;
    background-color: #B93333;
    border: 1px solid #B93333;
    border-radius: 14px;
    cursor: pointer;
    display: block;
    outline-color: #ffffff;
}



</style>