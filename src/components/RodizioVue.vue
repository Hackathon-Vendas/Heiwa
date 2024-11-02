<script setup>
import { ref } from 'vue';

const input = ref();
const FuncaoEspansao = ref(true);
const confirmar = ref(true);
const contadorRodizio = ref(0);

function FuncaoContinuar() {
  confirmar.value = false;
}

function voltarPagina() {
  FuncaoEspansao.value = true;
  emit('voltarParaMesa');
}

const emit = defineEmits([
  'voltarParaMesa'
]);

function AdicionarRodizio() {
  contadorRodizio.value++;
}

function TirarRodizio() {
  if (contadorRodizio.value > 0) {
    contadorRodizio.value--;
  }
}
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
      <div v-if="input === 'rodizio'" class="contador-rodizio">
        <div class="contador">
          <p>Quantidade de Rodízios:</p>
        </div>
        <button @click="TirarRodizio">-</button>
        <span>{{ contadorRodizio }}</span>
        <button @click="AdicionarRodizio">+</button>
      </div>
      <hr v-if="input === 'alacarte'" class="divider" />
      <button v-if="input == 'alacarte'" @click="FuncaoContinuar" class="confirm-button-2">CONFIRMAR</button>
      <button v-else @click="voltarPagina" class="continue-button">VOLTAR</button>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:wght@300;400;500;600;700&display=swap');

.contador-rodizio button {

}

.contador-rodizio{
  background-color: #404040;
  border-radius: 10px;
  margin-left: 32px;
  display: flex;
  justify-content: space-between;
  width: calc(500px - 120px);
  padding: 30px 40px;
  align-items: center;;
}

.alacarte {
  background-color: var(--cor-fundo-input);
  margin-left: 32px;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  width: calc(500px - 120px);
  border-radius: 10px;
  padding: 16px 40px;
  cursor: pointer;
  align-items: center;
}

.alacarte span {
  user-select: none;
}

.divider {
  margin: 15px 20px;
  border: 0.10rem solid var(--cor-letra-bottom-border);
  border-radius: 8px;
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
  border: 3px solid var(--cor-letra-bottom-border);
  border-radius: 45%;
}

input[type='radio' i]:checked {
  background-color: var(--cor-borda-input-radio);
}

.bem-vindo {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: var(--cor-fundoSite-icon);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  backdrop-filter: blur(5px);
}

.container {
  text-align: center;
  color: var(--cor-letra-bottom-border);
}

.container h1 {
  font-family: 'Inter', serif;
  letter-spacing: 3px;
  max-width: 450px;
  font-size: 35px;
  padding: 20px;
  color: var(--cor-letra-bottom-border);
}

.continue-button {
  margin: auto;
  padding: 25px 0 0 0;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  text-decoration: underline;
  color: var(--cor-letra-bottom-border);
  border: 1px solid var(--cor-voltar);
  background-color: var(--cor-voltar);
}

.confirm-button-2 {
  width: 85%;
  height: 55px;
  margin: auto;
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  color: var(--cor-letra-bottom-border);
  background-color: var(--cor-fundo-bottom);
  border: 1px solid var(--cor-fundo-bottom);
  border-radius: 14px;
  cursor: pointer;
  display: block;
  outline-color: var(--cor-letra-bottom-border);
}

.contador-rodizio {
  margin-top: 20px;
}

.contador-rodizio button {
  margin: 0 5px;
}
</style>
