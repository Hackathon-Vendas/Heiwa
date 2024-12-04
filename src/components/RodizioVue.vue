<script setup>
import { ref } from 'vue';

const input = ref();
const FuncaoEspansao = ref(true);
const confirmar = ref(true);
const contadorRodizio = ref(1);

function FuncaoContinuar() {
  confirmar.value = false;
  emit('FinalModal')
}

function voltarPagina() {
  FuncaoEspansao.value = true;
  emit('voltarParaMesa');
}

const emit = defineEmits([
  'voltarParaMesa',
  'FinalModal'
]);

function AdicionarRodizio() {
  contadorRodizio.value++;
}

function TirarRodizio() {
  if (contadorRodizio.value > 1) {
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
          <p>Número de rodízios:</p>
        </div>
        <button @click="TirarRodizio">-</button>
        <span>{{ contadorRodizio }}</span>
        <button @click="AdicionarRodizio">+</button>
      </div>
      <hr v-if="input === 'alacarte'" class="divider" />
      <button v-if="input === 'alacarte'" @click="FuncaoContinuar" class="confirm-button-2">CONFIRMAR</button>
      <button v-if="input === 'alacarte'" @click="voltarPagina" class="continue-button3">VOLTAR</button>
      <div v-if="input === 'rodizio'" class="aviso">
        <hr class="divider2" />
        <span>Informamos que o número de pessoas para o rodízio será verificado em relação aos rodízios pagos.</span>
        <button @click="FuncaoContinuar" class="confirm-button-2">CONFIRMAR</button>
        <button @click="voltarPagina" class="continue-button">VOLTAR</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:wght@300;400;500;600;700&display=swap');
*{
    z-index: 1000;
}
.aviso {
  width: calc(500px - 60px);
  font-family: 'Inter';
  font-size: 15px;
}

.divider2 {
  margin: 15px 20px;
  border: 0.10rem solid var(--cor-letra-bottom-border);
  border-radius: 8px;
}

.contador-rodizio {
  background-color: #404040;
  border-radius: 10px;
  padding: 30px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-family: 'Inter';
  font-size: 18px;
  font-weight: bold;
  margin-left: 32px;
  width: calc(500px - 120px);
}

.contador-rodizio button {
  background: none;
  border: none;
  color: white;
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
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
  width: 85%;
  height: 55px;
  margin: auto;
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  color: var(--cor-letra-bottom-border);
  background-color: var(--cor-voltar);
  border: 1px solid white;
  border-radius: 14px;
  cursor: pointer;
  display: block;
  outline-color: var(--cor-letra-bottom-border);
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

.continue-button3 {
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
</style>
