<script setup>
import { onMounted, watch, ref } from 'vue';
import Produtos from '@/components/itensCardapio/Produtos.vue';
import TopoProduto from '@/components/itensCardapio/TopoProduto.vue';
import ModalProducts from '@/components/ModalProducts.vue';
import { useAlcoolicaStore, useEntradaStore, useEntradaRStore, usePrincipalStore, usePrincipalRStore, useBebidaStore, useSobremesaStore, useSobremesaRStore} from '@/stores/produto';
import { useBentradaStore, useBprincipalStore, useBalcoolicaStore, useBbebidasStore, useBsobremeStore } from '@/stores/banner';
import { useRoute } from 'vue-router';

const route = useRoute();

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
  }Balcoolicas
}

const itemSelecionado = ref(null);
const show = ref(false);

function openModal(produto) {
  itemSelecionado.value = produto;
  show.value = true;
}

const alcoolicaStore = useAlcoolicaStore();
const entradaStore = useEntradaStore();
const entradaRStore = useEntradaRStore();
const principalStore = usePrincipalStore();
const principalRStore = usePrincipalRStore();
const bebidaStore = useBebidaStore();
const sobremesaStore = useSobremesaStore();
const sobremesaRStore = useSobremesaRStore();

const alcoolicas = alcoolicaStore.alcoolicas;
const entradas = entradaStore.entradas;
const entradasR = entradaRStore.entradasR;
const principais = principalStore.principais;
const principaisR = principalRStore.principaisR;
const bebidas = bebidaStore.bebidas;
const sobremesas = sobremesaStore.sobremesas;
const sobremesasR = sobremesaRStore.sobremesasR;

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
  <div id="entradas">
    <div v-for="banner in Bentradas" :key="banner">
      <TopoProduto :image="banner.image" :title="banner.title" />
    </div>
    <div v-for="item in entradas" :key="item">
      <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price" :imagem="item.imagem" @click="openModal(item)" />
    </div>
  </div>
  <div id="principais" class="section">
    <div v-for="banner in Bprincipais" :key="banner">
      <TopoProduto :image="banner.image" :title="banner.title" />
    </div>
    <div v-for="item in principais" :key="item">
      <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price" :imagem="item.imagem" @click="openModal(item)" />
    </div>
  </div>
  <div id="entradasR" class="section">
    <div v-for="banner in Bentradas" :key="banner">
      <TopoProduto :image="banner.image" :title="banner.title" />
    </div>
    <div v-for="item in entradasR" :key="item">
      <Produtos :name="item.name" :description="item.description" :unit="item.unit" :imagem="item.imagem" @click="openModal(item)" />
    </div>
  </div>
  <div id="principaisR" class="section">
    <div v-for="banner in Bprincipais" :key="banner">
      <TopoProduto :image="banner.image" :title="banner.title" />
    </div>
    <div v-for="item in principaisR" :key="item">
      <Produtos :name="item.name" :description="item.description" :unit="item.unit" :imagem="item.imagem" @click="openModal(item)" />
    </div>
  </div>
  <div id="sobremesasR">
    <div v-for="banner in Bsobremesas" :key="banner">
      <TopoProduto :image="banner.image" :title="banner.title" />
    </div>
    <div v-for="item in sobremesasR" :key="item">
      <Produtos :name="item.name" :description="item.description" :unit="item.unit" :imagem="item.imagem" @click="openModal(item)" />
    </div>
  </div>
  <div id="bebidas">
    <div v-for="banner in Bbebidas" :key="banner">
      <TopoProduto :image="banner.image" :title="banner.title" />
    </div>
    <div v-for="item in bebidas" :key="item">
      <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price" :imagem="item.imagem" @click="openModal(item)"/>
    </div>
  </div>
  <div id="alcoolicas" class="section">
    <div v-for="banner in Balcoolicas" :key="banner">
      <TopoProduto :image="banner.image" :title="banner.title" />
    </div>
    <div v-for="item in alcoolicas" :key="item">
      <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price" :imagem="item.imagem" @click="openModal(item)" />
    </div>
    <div id="sobremesa" class="section">
    <div v-for="banner in Bsobremesas" :key="banner">
      <TopoProduto :image="banner.image" :title="banner.title" />
    </div>
  </div>
  <div v-for="item in sobremesas" :key="item">
    <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price" :imagem="item.imagem" @click="openModal(item)" />
  </div>
  </div>
</template>

<style>
div .section {
  height: 100%;
}

</style>