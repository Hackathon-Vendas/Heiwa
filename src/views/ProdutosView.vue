<script setup>
import Produtos from '@/components/itensCardapio/Produtos.vue';
import TopoProduto from '@/components/itensCardapio/TopoProduto.vue';
import { ref } from 'vue'

import { useAlcoolicaStore, useEntradaStore, usePrincipalStore, useBebidaStore, useSobremesaStore, useSobremesarStore } from '@/stores/produto';

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

import { useBentradaStore, useBprincipalStore, useBalcoolicaStore, useBbebidasStore, useBsobremeStore } from '@/stores/banner';

const BalcoolicaStore = useBalcoolicaStore();
const BentradaStore = useBentradaStore();
const BprincipalStore = useBprincipalStore();
const BbebidasStore = useBbebidasStore();
const BsobremeStore = useBsobremeStore();

const Balcoolicas = BalcoolicaStore.alcoolicas;
const Bentradas = BentradaStore.entradas;
const Bprincipais = BprincipalStore.principais;
const Bbebidas = BbebidasStore.bebidas;
const Bsobremesas = BsobremeStore.sobremesas;


</script>
<template>
  <div id="section1">
    <div v-for="banner in Bentradas" :key="banner">
      <TopoProduto :image="banner.image" :title="banner.title" />
    </div>
    <div v-for="item in entradas" :key="item">
      <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
      :imagem="item.imagem" />
    </div>
  </div>
  <div id="section2">
    <div v-for="banner in Bprincipais" :key="banner">
      <TopoProduto :image="banner.image" :title="banner.title" />
    </div>

    <div v-for="item in principais" :key="item">
      <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
        :imagem="item.imagem" />
    </div>
  </div>

  <div id="section3">
    <div v-for="banner in Bentradas" :key="banner">
      <TopoProduto :image="banner.image" :title="banner.title" />
    </div>
    <div v-for="item in entradas" :key="item">
      <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
        :imagem="item.imagem" />
    </div>
  </div>
  <div id="section4">
    <div v-for="banner in Bprincipais" :key="banner">
      <TopoProduto :image="banner.image" :title="banner.title" />
    </div>

    <div v-for="item in principais" :key="item">
      <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
        :imagem="item.imagem" />
    </div>
  </div>
<div id="section5">
  <div v-for="banner in Bsobremesas" :key="banner">
    <TopoProduto :image="banner.image" :title="banner.title" />
  </div>

  <div v-for="item in sobremesasRodizio" :key="item">
    <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
      :imagem="item.imagem" />
  </div>

</div>

<div id="section6">
  <div v-for="banner in Bbebidas" :key="banner">
    <TopoProduto :image="banner.image" :title="banner.title" />
  </div>

  <div v-for="item in bebidas" :key="item">
    <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
      :imagem="item.imagem" />
  </div>
</div>
<div id="section7">

  <div v-for="banner in Balcoolicas" :key="banner">
    <TopoProduto :image="banner.image" :title="banner.title" />
  </div>

  <div v-for="item in alcoolicas" :key="item">
    <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
      :imagem="item.imagem" />
  </div>

</div>

<div id="section8">
  <div v-for="banner in Bsobremesas" :key="banner">
    <TopoProduto :image="banner.image" :title="banner.title" />
  </div>

  <div v-for="item in sobremesas" :key="item">
    <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
      :imagem="item.imagem" />
  </div>
</div>
</template>
<style>
.section {
  height: 100vh;
}
</style>
