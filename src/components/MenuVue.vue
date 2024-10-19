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

const rodizio = ref(false);
const bebidas = ref(false);



const teste2 = computed(() => router.currentRoute.value)
const teste3 = ref("")

onMounted(() => {
  setTimeout(() => {
    teste3.value = teste2.value.fullPath
    console.log(teste3)
  }, "1");
})

watch(router.currentRoute, () => {
  teste3.value = teste2.value.fullPath
});


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
              <button @click="scrollToSection('section1')" class="sub-menu" :class="{ 'selectedMenu': se == true }">Entradas</button>
            </li>
            <li>
              <button @click="scrollToSection('section2')" class="sub-menu"
                :class="{ 'selectedMenu': (teste3 == '/principais') }">Pratos Principais</button>
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
              <button @click="scrollToSection('section3')" class="sub-menu"
                :class="[{ 'selectedMenu': (teste3 == '/entradas') }]">Entradas</button>
            </li>
            <li>
              <button @click="scrollToSection('section4')" class="sub-menu"
                :class="{ 'selectedMenu': (teste3 == '/principais') }">Pratos Principais</button>
            </li>
            <li>
              <button @click="scrollToSection('section5')" class="sub-menu"
                :class="{ 'selectedMenu': (teste3 == '/1') }">Sobremesas</button>
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
              <button @click="scrollToSection('section6')" class="sub-menu"
                :class="{ 'selectedMenu': (teste3 == '/nalcolicas') }">Não alcóolicas </button>
            </li>
            <li>
              <button @click="scrollToSection('section7')" class="sub-menu"
                :class="{ 'selectedMenu': (teste3 == '/alcolicas') }">Alcóolicas</button>
            </li>
          </ul>
        </div>
        <li>
          <button @click="scrollToSection('section8')" :class="{ 'selectedMenu': (teste3 == '/sobremesas') }"><img
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
}

.aside {
  width: 200px;
  top: 15.7 vh;
  left: 0;
  position: absolute;
  filter: drop-shadow(-1px 6.5px 25px rgba(0, 0, 0, 0.84));

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
