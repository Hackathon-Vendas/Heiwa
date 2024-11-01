<script setup>
import { ref } from 'vue'

const FuncaoEspansao = ref(true)
function FuncaoPassar() {
  FuncaoEspansao.value = false
}

const input = ref()
</script>
<template>
  <div v-if="FuncaoEspansao" class="bem-vindo">
    <div class="container">
      <h1>ESCOLHA A OPÇÃO DESEJADA:</h1>
      <div class="input-container">
        <label class="alacarte" for="alacarte">
          <span>À la carte</span>
          <input type="radio" id="alacarte" v-model="input" name="opção" value="alacarte" />
        </label>
        <label class="alacarte" for="rodizio">
          <span>Rodízio</span>
          <input type="radio" id="rodizio" v-model="input" name="opção" value="rodizio" />
        </label>
      </div>
      <button v-if="input == 'alacarte'" @click="confirmar" class="confirm-button-2">
        CONFIRMAR
      </button>
      <button v-else @click="FuncaoPassar" class="continue-button">VOLTAR</button>
    </div>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:wght@300;400;500;600;700&display=swap');

.alacarte {
  background-color: var(--cor-fundo-input);
  margin-left: 32px;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  width: calc(500px - 120px);
  border-radius: 14px;
  padding: 16px 40px;
  cursor: pointer;
  align-items: center;
}

.alacarte span {
  user-select: none;
}

.input-container {
  font-family: 'Inter';
  font-size: 20px;
  font-weight: 500;
}

input[type='radio' i] {
  cursor: pointer;
  appearance: none;
  width: 29px;
  height: 30px;
  border: 3px solid var(--cor-borda-input);
  border-radius: 45%;
}

input[type='radio' i]:checked {
  background-color: var(--cor-borda-input-radio);
}

.bem-vindo {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: var(--cor-fundo);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
}

.container {
  text-align: center;
  color: var(--cor-borda-input);
}

.container h1 {
  font-family: 'Inter', serif;
  letter-spacing: 3px;
  max-width: 450px;
  font-size: 35px;
  padding: 20px;
}

.continue-button {
  margin: auto;
  padding: 25px 0 0 0;
  font-weight: bold;
  font-size: 20px;
  color: var(--cor-borda-input);
  cursor: pointer;
  background-color: var(--cor-fundo-bottom);
  border: solid var(--cor-fundo-bottom);
  text-decoration: underline;
}

.confirm-button-2 {
  width: 85%;
  height: 55px;
  margin: auto;
  margin-top: 35px;
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;
  background-color: #b93333;
  border: 2px solid #b93333;
  border: 1px solid #b93333;
  border-radius: 14px;
  cursor: pointer;
  display: block;
  outline-color: #ffffff;
}
</style>
