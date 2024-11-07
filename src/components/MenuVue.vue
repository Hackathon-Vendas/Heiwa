<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { RouterLink } from 'vue-router';
import router from '@/router';

const alacarte = ref(false);
const rodizio = ref(false);
const bebidas = ref(false);
const nalcoolicas = ref(false);
const alcoolicas = ref(false);
const entradas = ref(false);
const principais = ref(false);
const entradasR = ref(false);
const principaisR = ref(false);
const sobremesasR = ref(false);
const sobremesas = ref(false);

function showAlacarte() {
  if (alacarte.value) {
    alacarte.value = false;
  } else {
    alacarte.value = true;
    rodizio.value = false;
    bebidas.value = false;
  }
}


function showRodizio() {
  if (rodizio.value) {
    rodizio.value = false; 
  } else {
    rodizio.value = true;
    alacarte.value = false;
    bebidas.value = false;
  }
}

function showBebidas() {
  if (bebidas.value) {
    bebidas.value = false; 
  } else {
    bebidas.value = true;
    alacarte.value = false;
    rodizio.value = false;
    
  }
}

function scrollToSection1() {
  nalcoolicas.value = false;
  alcoolicas.value = false;
  entradas.value = true;
  principais.value = false;
  entradasR.value = false;
  principaisR.value = false;
  sobremesasR.value = false;
  sobremesas.value = false;
}
function scrollToSection2() {
  nalcoolicas.value = false;
  alcoolicas.value = false;
  entradas.value = false;
  principais.value = true;
  entradasR.value = false;
  principaisR.value = false;
  sobremesasR.value = false;
  sobremesas.value = false;
}
function scrollToSection3() {
  nalcoolicas.value = false;
  alcoolicas.value = false;
  entradas.value = false;
  principais.value = false;
  entradasR.value = true;
  principaisR.value = false;
  sobremesasR.value = false;
  sobremesas.value = false;
}
function scrollToSection4() {
  nalcoolicas.value = false;
  alcoolicas.value = false;
  entradas.value = false;
  principais.value = false;
  entradasR.value = false;
  principaisR.value = true;
  sobremesasR.value = false;
  sobremesas.value = false;
}
function scrollToSection5() {
  nalcoolicas.value = false;
  alcoolicas.value = false;
  entradas.value = false;
  principais.value = false;
  entradasR.value = false;
  principaisR.value = false;
  sobremesasR.value = true;
  sobremesas.value = false;
}
function scrollToSection6() {
  nalcoolicas.value = true;
  alcoolicas.value = false;
  entradas.value = false;
  principais.value = false;
  entradasR.value = false;
  principaisR.value = false;
  sobremesasR.value = false;
  sobremesas.value = false;
}
function scrollToSection7() {
  nalcoolicas.value = false;
  alcoolicas.value = true;
  entradas.value = false;
  principais.value = false;
  entradasR.value = false;
  principaisR.value = false;
  sobremesasR.value = false;
  sobremesas.value = false;
}
function scrollToSection8() {
  nalcoolicas.value = false;
  alcoolicas.value = false;
  entradas.value = false;
  principais.value = false;
  entradasR.value = false;
  principaisR.value = false;
  sobremesasR.value = false;
  sobremesas.value = true;
}

</script>
<template>
  <aside>
      <ul>
        <li><button @click="showAlacarte()" :class="{ 'selectedMenu': alacarte == true }"><img
              src="/public/logo-alacarte.svg">
            <p>Á la carte</p>
          </button></li>
        <div v-if="alacarte">
          <ul>
            <li>
              <RouterLink :to="{ path: '/produtos', hash: '#entradas' }">
                <button @click="scrollToSection1()" class="sub-menu"
                  :class="{ 'selectedMenu': entradas == true }">Entradas</button>
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ path: '/produtos', hash: '#principais' }">
                <button @click="scrollToSection2()" class="sub-menu"
                  :class="{ 'selectedMenu': principais == true }">Pratos Principais</button>
              </RouterLink>
            </li>
          </ul>
        </div>

        <li><button @click="showRodizio()" :class="{ 'selectedMenu': rodizio == true }"><img
              src="/public/logo-rodizio.svg">
            <p>Rodízio</p>
          </button></li>
        <div v-if="rodizio">
          <ul>
            <li>
              <RouterLink :to="{ path: '/produtos', hash: '#entradasR' }">
                <button @click="scrollToSection3()" class="sub-menu"
                  :class="[{ 'selectedMenu': entradasR == true }]">Entradas</button>
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ path: '/produtos', hash: '#principaisR' }">
                <button @click="scrollToSection4()" class="sub-menu"
                  :class="{ 'selectedMenu': principaisR == true }">Pratos Principais</button>
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ path: '/produtos', hash: '#sobremesasR' }">
                <button @click="scrollToSection5()" class="sub-menu"
                  :class="{ 'selectedMenu': sobremesasR == true }">Sobremesas</button>
              </RouterLink>
            </li>
          </ul>
        </div>

        <li><button @click="showBebidas()" :class="{ 'selectedMenu': bebidas == true }"><img
              src="/public/logo-bebida.svg">
            <p>Bebidas</p>
          </button></li>
        <div v-if="bebidas">
          <ul>
            <li>
              <RouterLink :to="{ path: '/produtos', hash: '#bebidas' }">
                <button @click="scrollToSection6()" class="sub-menu"
                  :class="{ 'selectedMenu': nalcoolicas == true }">Não
                  alcóolicas </button>
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ path: '/produtos', hash: '#alcoolicas' }">
                <button @click="scrollToSection7()" class="sub-menu"
                  :class="{ 'selectedMenu': alcoolicas == true }">Alcóolicas
                </button>
              </RouterLink>
            </li>
          </ul>
        </div>
        <li>
          <RouterLink :to="{ path: '/produtos', hash: '#-sobremesa' }">
            <button @click="scrollToSection8()" :class="{ 'selectedMenu': sobremesas == true }"><img
                src="/public/logo-sobremesa.svg">
              <p>Sobremesas</p>
            </button>
          </RouterLink>
        </li>
      </ul>
  </aside>
</template>

<style scoped>
aside {
  width: 220px;
  position: fixed;
  filter: drop-shadow(-1px 6.5px 25px rgba(0, 0, 0, 0.84));
  height: 100%; 
  overflow-y: auto; 
  margin: 0; 
  padding: 0;
  margin-top: 6%;
}

  aside::-webkit-scrollbar {
    display: none;
  
}

aside ul {
  list-style-type: none;
  padding: 0;
  transition: 0.3s;
}

aside ul li {
  text-align: center;
  height: 100%;
}

.sub-menu {
  display: flex;
  font-family: 'Inter', normal, sans-serif;
  font-weight: 900;
  font-size: 1rem; 
  padding: 3em;  
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.25em;
  color: #FFFFFF;
  background-color: rgba(69, 69, 69, 1);
  transition: 0.3s;
  filter: drop-shadow(-1px 6.5px 25px rgba(0, 0, 0, 0.44));
  width: 100%;
  cursor: pointer;
}

a {
  text-decoration: none;
}

.sub-menu:hover {
  background-color: rgba(94, 94, 94, 1);
}

button {
  width: 100%;
  background-color: rgba(40, 40, 40, 1);
  border: none;
  transition: 0.3s;
}

button p {
  font-family: 'Inter', normal, sans-serif;
  font-weight: 900;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.25em;
  color: #FFFFFF;
  margin-top: 0.3%;
  margin-bottom: 20%;
}

img {
  margin-bottom: 20%;
  margin-top: 20%;
}

.selectedMenu {
  background-color: rgba(94, 94, 94, 1) !important;
  border-right: rgba(156, 156, 156, 1) 3px solid;
}

</style>
