<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

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

    <div class="aside">
      <ul>
        <li><button @click="showAlacarte()" :class="{ 'selectedMenu': alacarte == true }"><img
              src="/logo-alacarte.svg">
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
              src="/logo-rodizio.svg">
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
              src="/logo-bebida.svg">
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
<<<<<<< HEAD
          <button @click="scrollToSection('section8')" :class="{ 'selectedMenu': (teste3 == '/sobremesas') }"><img
              src="/logo-sobremesa.svg">
            <p>Sobremesas</p>
          </button>
=======
          <RouterLink :to="{ path: '/produtos', hash: '#-sobremesa' }">
            <button @click="scrollToSection8()" :class="{ 'selectedMenu': sobremesas == true }"><img
                src="/logo-sobremesa.svg">
              <p>Sobremesas</p>
            </button>
          </RouterLink>
>>>>>>> feat-42
        </li>
      </ul>
    </div>
</template>

<style scoped>

main {
  width: 20%;
  height: 100%;
  margin: auto;
  display: flex;
  position: absolute;
  margin-top: 7.4%;
}

.aside {
  width: 200px;
  top: 85px;
  height: 100%;
  left: 0;
  position: fixed;
  filter: drop-shadow(-1px 6.5px 25px rgba(0, 0, 0, 0.84));
  filter: drop-shadow(-1px 6.5px 25px rgba(0, 0, 0, 0.84));
  overflow-y: auto;
  background-color: rgba(40, 40, 40, 1);
}

.aside::-webkit-scrollbar {
  display: none;

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

.sub-menu {
  display: block;
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

@media (max-width: 1024px) {
  main {
    width: 50%;
    margin: auto;
    display: flex;
    position: absolute;
    margin-top: 7.4%;
  }

  .aside {
    width: 100px;
    top: 15.7vh;
    left: 0;
    position: fixed;
    filter: drop-shadow(-1px 6.5px 25px rgba(0, 0, 0, 0.84));
    height: calc(100vh - 10%);
    overflow-y: scroll;
    text-align: center;
  }

  .aside::-webkit-scrollbar {
    display: none;

  }

  .aside ul li {
    text-align: center;
    height: 100%;
  }


  .aside .sub-menu {
    display: block;
    top: 354px;
    font-family: 'Inter', normal, sans-serif;
    font-weight: 700;
    font-size: 10px;
    line-height: 15px;
    text-align: center !important;
    letter-spacing: 0.25em;
    color: #FFFFFF;
    padding: 20px;
    padding-left: 10%;
    background-color: rgba(69, 69, 69, 1);
    transition: 0.3s;
    filter: drop-shadow(-1px 6.5px 25px rgba(0, 0, 0, 0.44));
    width: 100%;
  }

  button p {
    font-family: 'Inter', normal, sans-serif;
    font-weight: 900;
    font-size: 10px;
    line-height: 17px;
    text-align: center;
    letter-spacing: 0.25em;
    color: #FFFFFF;
    margin-top: 0.3%;
  }

  img {
    width: 48px;
    margin-bottom: 10%;
    margin-top: 10%;
  }
}

@media (max-width: 768px) {
  main {
    margin-top: 10%;
  }


  .aside {
    width: 150px;
    height: auto;
    top: 0;
    position: absolute;
  }


  .aside .sub-menu {
    padding: 30px;
    font-size: 12px;
  }


  button p {
    font-size: 12px;
  }
}


@media (max-width: 480px) {
  .aside {
    width: 100px;
    height: auto;
    position: relative;
  }


  .aside .sub-menu {
    padding: 20px;
    font-size: 10px;
  }


  button p {
    font-size: 10px;
  }
}
</style>
