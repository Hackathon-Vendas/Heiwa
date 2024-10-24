<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { RouterLink } from 'vue-router';
import router from '@/router';

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const alacarte = ref(false);
const rodizio = ref(false);
const bebidas = ref(false);
const nalcoolicas =ref(false);
const alcoolicas =ref(false);
const entradas =ref(false);
const principais =ref(false);
const entradasR =ref(false);
const principaisR =ref(false);
const sobremesasR =ref(false);
const sobremesas =ref(false);

  function showAlacarte() {
  rodizio.value = false
  bebidas.value = false
  alacarte.value = true
}

function showRodizio() {
  rodizio.value = true
  bebidas.value = false
  alacarte.value = false
}
function showBebidas() {
  rodizio.value = false
  bebidas.value = true
  alacarte.value = false
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
 scrollToSection('section1');
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
 scrollToSection('section2');
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
 scrollToSection('section3');
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
 scrollToSection('section4');
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
 scrollToSection('section5');
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
 scrollToSection('section6');
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
 scrollToSection('section7');
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
 scrollToSection('section8');
}

</script>
<template>
  <main>
    <div class="aside">
      <ul>
        <li><button @click="showAlacarte()" :class="{ 'selectedMenu': alacarte == true }"><img
              src="/public/logo-alacarte.svg">
            <p>Á la carte</p>
          </button></li>
        <div v-if="alacarte">
          <ul>
            <li>
              <button @click="scrollToSection1()" class="sub-menu" :class="{ 'selectedMenu': entradas == true }">Entradas</button>
            </li>
            <li>
              <button @click="scrollToSection2()" class="sub-menu" :class="{ 'selectedMenu': principais == true }">Pratos Principais</button>
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
              <button @click="scrollToSection3() " class="sub-menu"
                :class="[{'selectedMenu': entradasR == true }]">Entradas</button>
            </li>
            <li>
              <button @click="scrollToSection4()" class="sub-menu"
                :class="{ 'selectedMenu': principaisR == true}">Pratos Principais</button>
            </li>
            <li>
              <button @click="scrollToSection5()" class="sub-menu"
                :class="{ 'selectedMenu': sobremesasR == true}">Sobremesas</button>
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
              <button @click="scrollToSection6()" class="sub-menu"
                :class="{'selectedMenu': nalcoolicas == true}">Não alcóolicas </button>
            </li>
            <li>
              <button @click="scrollToSection7()" class="sub-menu"
                :class="{ 'selectedMenu': alcoolicas == true }">Alcóolicas</button>
            </li>
          </ul>
        </div>
        <li>
          <button @click="scrollToSection8()" :class="{ 'selectedMenu': sobremesas == true }"><img
              src="/public/logo-sobremesa.svg">
            <p>Sobremesas</p>
          </button>
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 90%;
  height: 100%;
  margin: auto;
  display: flex;
  position: absolute;
  margin-top: 7.4%;
}

.aside {
  width: 200px;
  top: 15.7 vh;
  left: 0;
  position: absolute;
  filter: drop-shadow(-1px 6.5px 25px rgba(0, 0, 0, 0.84));
  height: 150vh;
  
}

.aside ul {
  list-style-type: none;
  padding: 0;
  transition: 0.3s;

}

.aside ul li {
  text-align: center;
  height: 100%;
}

.aside .sub-menu {
  text-decoration: none;
  display: block;
  top: 354px;
  font-family: 'Inter', normal, sans-serif;
  font-weight: 900;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.25em;
  color: #FFFFFF;
  padding: 45px;
  background-color: rgba(69, 69, 69, 1);
  transition: 0.3s;
  filter: drop-shadow(-1px 6.5px 25px rgba(0, 0, 0, 0.44));
  width: 100%;
  cursor: pointer; /* Mostrar que é clicável */
  transition: background-color 0.3s;
}

.sub-menu:hover {
  background-color: rgba(94, 94, 94, 1); /* Hover */
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
