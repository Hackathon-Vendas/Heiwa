<script setup>
import { ref, watch } from 'vue';
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';
import RodizioVue from '@/components/RodizioVue.vue';

const ModalA = ref(0);
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
const route = useRoute();

function updateMenu() {
  const currentPath = route.path;

  rodizio.value = false;
  alacarte.value = false;
  bebidas.value = false;
  sobremesas.value = false;
  nalcoolicas.value = false;
  alcoolicas.value = false;
  entradas.value = false;
  principais.value = false;
  entradasR.value = false;
  principaisR.value = false;
  sobremesasR.value = false;
}

watch(() => route.path, updateMenu, { immediate: true });

function showAlacarte() {
    alacarte.value = !alacarte.value;
    alacarte.value = true;
    rodizio.value = false;
    bebidas.value = false;
    sobremesas.value = false;
  }


function showRodizio() {
    rodizio.value = !rodizio.value;
    alacarte.value = false;
    bebidas.value = false;
    sobremesas.value = false;
    ModalA.value = 2; 
  }

function showBebidas() {
    bebidas.value = !bebidas.value;
    alacarte.value = false;
    rodizio.value = false;
    sobremesas.value = false;
  
}
function scrollToSectionsobremesas() {
    sobremesas.value = !sobremesas.value;
    alacarte.value = false;
    rodizio.value = false;
    bebidas.value = false;
    nalcoolicas.value = false;
    alcoolicas.value = false;
    entradas.value = false;
    principais.value = false;
    entradasR.value = false;
    principaisR.value = false;
    sobremesasR.value = false;

  }

function scrollToSection(section) {
  nalcoolicas.value = false;
  alcoolicas.value = false;
  entradas.value = false;
  principais.value = false;
  entradasR.value = false;
  principaisR.value = false;
  sobremesasR.value = false;
  sobremesas.value = false;

  switch (section) {
    case 'entradas':
      entradas.value = true;
      break;
    case 'principais':
      principais.value = true;
      break;
    case 'entradasR':
      entradasR.value = true;
      break;
    case 'principaisR':
      principaisR.value = true;
      break;
    case 'sobremesasR':
      sobremesasR.value = true;
      break;
    case 'nalcoolicas':
      nalcoolicas.value = true;
      break;
    case 'alcoolicas':
      alcoolicas.value = true;
      break;
  }
}

updateMenu();

</script>
<template>

  <aside>
    <ul>
      <li><button @click="showAlacarte()" :class="{ 'selectedMenu': alacarte == true }"><img src="/logo-alacarte.svg">
          <p>Á la carte</p>
        </button></li>
      <div v-if="alacarte">
        <ul>
          <li>
            <RouterLink :to="{ path: '/produtos', hash: '#entradas' }">
              <button @click="scrollToSection('entradas')" class="sub-menu"
                :class="{ 'selectedMenu': entradas == true }">Entradas</button>
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ path: '/produtos', hash: '#principais' }">
              <button @click="scrollToSection('principais')" class="sub-menu"
                :class="{ 'selectedMenu': principais == true }">Pratos Principais</button>
            </RouterLink>
          </li>
        </ul>
      </div>

      <li><button @click="showRodizio()" :class="{ 'selectedMenu': rodizio == true }"><img src="/logo-rodizio.svg">
          <p>Rodízio</p>
        </button></li>
        <RodizioVue v-if="ModalA == 2" @voltarParaMesa="ModalA--" @FinalModal="ModalA++" />

      <div v-if="rodizio">
        <ul>
          <li>
            <RouterLink :to="{ path: '/produtos', hash: '#entradasR' }">
              <button @click="scrollToSection('entradasR')" class="sub-menu"
                :class="[{ 'selectedMenu': entradasR == true }]">Entradas</button>
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ path: '/produtos', hash: '#principaisR' }">
              <button @click="scrollToSection('principaisR')" class="sub-menu"
                :class="{ 'selectedMenu': principaisR == true }">Pratos Principais</button>
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ path: '/produtos', hash: '#sobremesasR' }">
              <button @click="scrollToSection('sobremesasR')" class="sub-menu"
                :class="{ 'selectedMenu': sobremesasR == true }">Sobremesas</button>
            </RouterLink>
          </li>
        </ul>
      </div>

      <li><button @click="showBebidas()" :class="{ 'selectedMenu': bebidas == true }"><img src="/logo-bebida.svg">
          <p>Bebidas</p>
        </button></li>
      <div v-if="bebidas">
        <ul>
          <li>
            <RouterLink :to="{ path: '/produtos', hash: '#bebidas' }">
              <button @click="scrollToSection('nalcoolicas')" class="sub-menu"
                :class="{ 'selectedMenu': nalcoolicas == true }">Não
                alcóolicas </button>
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ path: '/produtos', hash: '#alcoolicas' }">
              <button @click="scrollToSection('alcoolicas')" class="sub-menu"
                :class="{ 'selectedMenu': alcoolicas == true }">Alcóolicas
              </button>
            </RouterLink>
          </li>
        </ul>
      </div>
      <li>
        <RouterLink :to="{ path: '/produtos', hash: '#sobremesa' }">
          <button @click="scrollToSectionsobremesas()" :class="{ 'selectedMenu': sobremesas == true }"><img
              src="/logo-sobremesa.svg">
            <p>Sobremesas</p>
          </button>
        </RouterLink>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
aside {
  width: 200px;
  top: 85px;
  height: calc(100% - 85px);
  left: 0;
  position: fixed;
  filter: drop-shadow(-1px 6.5px 25px rgba(0, 0, 0, 0.84));
  overflow-y: auto;
  background-color: rgba(40, 40, 40, 1);
}

aside::-webkit-scrollbar {
  display: none;
  height: 100%;
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
  padding: 20%;
  line-height: 17px;
  text-align: center !important;
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
