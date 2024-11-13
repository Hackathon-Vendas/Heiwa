<script setup>
import { onMounted, watch } from 'vue';
import Produtos from '@/components/itensCardapio/Produtos.vue';
import TopoProduto from '@/components/itensCardapio/TopoProduto.vue';

import { ref } from 'vue'
import ModalProducts from '@/components/ModalProducts.vue';

import { useAlcoolicaStore, useEntradaStore, usePrincipalStore, useBebidaStore, useSobremesaStore, useSobremesarStore } from '@/stores/produto';
import { useBentradaStore, useBprincipalStore, useBalcoolicaStore, useBbebidasStore, useBsobremeStore } from '@/stores/banner';
import { useRoute } from 'vue-router'
const route = useRoute()

onMounted(() => {
  if (route.hash) {
    scrollToHash(route.hash);
  }
});

watch(() => route.hash, (newHash) => {
  if (newHash) {
    scrollToHash(newHash);
  }
});

function scrollToHash(hash) {
  const element = document.querySelector(hash);
  if (element) {
    setTimeout(() => {
      element.scrollIntoView({ behavior: 'smooth' });
    }, 1000);
  }
}

const itemSelecionado = ref(null);
const show = ref(false)
function openModal(produto) {
  console.log(produto)
  itemSelecionado.value = produto

  console.log("item")
  show.value = true
}

const alcoolicaStore = useAlcoolicaStore();
const entradaStore = useEntradaStore();
const principalStore = usePrincipalStore();
const bebidaStore = useBebidaStore();
const sobremesaStore = useSobremesaStore();
const sobremesarStore = useSobremesarStore();

const alcoolicas = alcoolicaStore.alcoolicas;
const entradas = entradaStore.entradas;
const principais = principalStore.principais;
const bebidas = bebidaStore.bebidas;
const sobremesas = sobremesaStore.sobremesas;
const sobremesasRodizio = sobremesarStore.sobremesasR;


const BalcoolicaStore = useBalcoolicaStore();
const BentradaStore = useBentradaStore();
const BprincipalStore = useBprincipalStore();
const BbebidasStore = useBbebidasStore();
const BsobremeStore = useBsobremeStore();

const Balcoolicas = BalcoolicaStore.Balcoolicas;
const Bentradas = BentradaStore.Bentradas;
const Bprincipais = BprincipalStore.Bprincipais;
const Bbebidas = BbebidasStore.Bbebidas;
const Bsobremesas = BsobremeStore.Bsobremesas;

</script>
<template>
  <ModalProducts v-model:isOpen="show" :item="itemSelecionado" />
  <div id="section1">
    <div v-for="banner in Bentradas" :key="banner">
      <TopoProduto :image="banner.image" :title="banner.title"   />
    </div>
    <div v-for="item in entradas" :key="item">
      <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
      :imagem="item.imagem" @click="openModal(item)" />
    </div>
  </div>
  <div id="principais" class="section">
    <div v-for="banner in Bprincipais" :key="banner">
      <TopoProduto :image="banner.image" :title="banner.title" />
    </div>

    <div v-for="item in principais" :key="item">
      <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
        :imagem="item.imagem" @click="openModal(item)"/>
    </div>
  </div>

  <div id="entradasR" class="section">
    <div v-for="banner in Bentradas" :key="banner">
      <TopoProduto :image="banner.image" :title="banner.title" />
    </div>
    <div v-for="item in entradas" :key="item">
      <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
        :imagem="item.imagem" @click="openModal(item)"/>
    </div>
  </div>
  <div id="principaisR" class="section">
    <div v-for="banner in Bprincipais" :key="banner">
      <TopoProduto :image="banner.image" :title="banner.title" />
    </div>

    <div v-for="item in principais" :key="item">
      <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
        :imagem="item.imagem" @click="openModal(item)"/>
    </div>
  </div>
<div id="section5">
  <div v-for="banner in Bsobremesas" :key="banner">
    <TopoProduto :image="banner.image" :title="banner.title" />
  </div>

  <div v-for="item in sobremesasRodizio" :key="item">
    <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
      :imagem="item.imagem" @click="openModal(item)"/>
  </div>

    <div v-for="item in sobremesasRodizio" :key="item">
      <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
        :imagem="item.imagem" />
    </div>

  </div>

  <div v-for="item in bebidas" :key="item">
    <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
      :imagem="item.imagem" @click="openModal(item)"/>
  </div>
</div>
<div id="section7">


    <div v-for="item in bebidas" :key="item">
      <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
        :imagem="item.imagem" />
    </div>
  </div>
  <div id="alcoolicas" class="section">

  <div v-for="item in alcoolicas" :key="item">
    <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
      :imagem="item.imagem" @click="openModal(item)"/>
  </div>

    <div v-for="item in alcoolicas" :key="item">
      <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
        :imagem="item.imagem" />
    </div>

  </div>

  <div v-for="item in sobremesas" :key="item">
    <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
      :imagem="item.imagem" @click="openModal(item)"/>
  </div>
</main>
</template>
<style>
div .section {
  height: 100%;
}
</style>
