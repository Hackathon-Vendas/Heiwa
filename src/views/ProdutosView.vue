<script setup>
import { onMounted, watch } from 'vue';
import Produtos from '@/components/itensCardapio/Produtos.vue';
import TopoProduto from '@/components/itensCardapio/TopoProduto.vue';
import { useAlcoolicaStore, useEntradaStore, usePrincipalStore, useBebidaStore, useSobremesaStore, useSobremesarStore } from '@/stores/produto';
import { useBentradaStore, useBprincipalStore, useBalcoolicaStore, useBbebidasStore, useBsobremeStore } from '@/stores/banner';

import { useRoute } from 'vue-router'
const route = useRoute()

onMounted(() => {
  if (route.hash) {
    setTimeout(() => {
      const element = document.querySelector(route.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
});

watch(() => route.hash, (newHash) => {
  if (newHash) {
    const element = document.querySelector(newHash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
});


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
  <main>
  <div id="entradas" class="section">
    <div v-for="banner in Bentradas" :key="banner">
      <TopoProduto :image="banner.image" :title="banner.title" />
    </div>
    <div v-for="item in entradas" :key="item">
      <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
        :imagem="item.imagem" />
    </div>
  </div>
  <div id="principais" class="section">
    <div v-for="banner in Bprincipais" :key="banner">
      <TopoProduto :image="banner.image" :title="banner.title" />
    </div>

    <div v-for="item in principais" :key="item">
      <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
        :imagem="item.imagem" />
    </div>
  </div>

  <div id="entradasR" class="section">
    <div v-for="banner in Bentradas" :key="banner">
      <TopoProduto :image="banner.image" :title="banner.title" />
    </div>
    <div v-for="item in entradas" :key="item">
      <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
        :imagem="item.imagem" />
    </div>
  </div>
  <div id="principaisR" class="section">
    <div v-for="banner in Bprincipais" :key="banner">
      <TopoProduto :image="banner.image" :title="banner.title" />
    </div>

    <div v-for="item in principais" :key="item">
      <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
        :imagem="item.imagem" />
    </div>
  </div>
  <div id="sobremesasR" class="section">
    <div v-for="banner in Bsobremesas" :key="banner">
      <TopoProduto :image="banner.image" :title="banner.title" />
    </div>

    <div v-for="item in sobremesasRodizio" :key="item">
      <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
        :imagem="item.imagem" />
    </div>

  </div>

  <div id="bebidas" class="section">
    <div v-for="banner in Bbebidas" :key="banner">
      <TopoProduto :image="banner.image" :title="banner.title" />
    </div>

    <div v-for="item in bebidas" :key="item">
      <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
        :imagem="item.imagem" />
    </div>
  </div>
  <div id="alcoolicas" class="section">

    <div v-for="banner in Balcoolicas" :key="banner">
      <TopoProduto :image="banner.image" :title="banner.title" />
    </div>

    <div v-for="item in alcoolicas" :key="item">
      <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
        :imagem="item.imagem" />
    </div>

  </div>

  <div id="-sobremesa" class="section">
    <div v-for="banner in Bsobremesas" :key="banner">
      <TopoProduto :image="banner.image" :title="banner.title" />
    </div>

    <div v-for="item in sobremesas" :key="item">
      <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
        :imagem="item.imagem" />
    </div>
  </div>
</main>
</template>
<style>
div .section {
  height: 100%;
}

</style>
