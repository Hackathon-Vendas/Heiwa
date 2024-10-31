<script setup>
import Produtos from '@/components/itensCardapio/Produtos.vue';
import TopoProduto from '@/components/itensCardapio/TopoProduto.vue';
import { useBentradaStore, useBprincipalStore, useBalcoolicaStore, useBbebidasStore, useBsobremeStore } from '@/stores/banner';
import ProdutosOnClick from '@/components/ProdutosOnClick.vue';
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

const showModal = ref(false)
</script>
<template>
  <div id="entradas" class="section">
    <div v-for="banner in Bentradas" :key="banner">
      <TopoProduto :image="banner.image" :title="banner.title" />
    </div>
    <button v-for="item in entradas" :key="item" @click="showModal = !showModal">
      <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
        :imagem="item.imagem" />
    </button>
    <div v-if="showModal" v-for="item in entradas" :key="item">
      <ProdutosOnClick :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
        :imagem="item.imagem"/>
    </div>
  </div>
  <div id="principais" class="section">
    <div v-for="banner in Bprincipais" :key="banner">
      <TopoProduto :image="banner.image" :title="banner.title" />
    </div>

    <button v-for="item in principais" :key="item" @click="showModal = !showModal">
      <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
        :imagem="item.imagem" />
    </button>
    <div v-if="showModal" v-for="item in principais" :key="item">
      <ProdutosOnClick :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
        :imagem="item.imagem"/>
    </div>
  </div>

  <div id="entradasR" class="section">
    <div v-for="banner in Bentradas" :key="banner">
      <TopoProduto :image="banner.image" :title="banner.title" />
    </div>
    <button v-for="item in entradas" :key="item" @click="showModal = !showModal">
      <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
        :imagem="item.imagem" />
    </button>
    <div v-if="showModal" v-for="item in entradas" :key="item">
      <ProdutosOnClick :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
        :imagem="item.imagem"/>
    </div>
  </div>
  <div id="principaisR" class="section">
    <div v-for="banner in Bprincipais" :key="banner">
      <TopoProduto :image="banner.image" :title="banner.title" />
    </div>

    <button v-for="item in principais" :key="item" @click="showModal = !showModal">
      <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
        :imagem="item.imagem" />
    </button>
    <div v-if="showModal" v-for="item in principais" :key="item">
      <ProdutosOnClick :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
        :imagem="item.imagem"/>
    </div>
  </div>
  <div id="sobremesasR" class="section">
    <div v-for="banner in Bsobremesas" :key="banner">
      <TopoProduto :image="banner.image" :title="banner.title" />
    </div>

    <button v-for="item in sobremesasRodizio" :key="item" @click="showModal = !showModal">
      <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
        :imagem="item.imagem" />
    </button>
    <div v-if="showModal" v-for="item in sobremesasRodizio" :key="item">
      <ProdutosOnClick :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
        :imagem="item.imagem"/>
    </div>

  </div>

  <div id="bebidas" class="section">
    <div v-for="banner in Bbebidas" :key="banner">
      <TopoProduto :image="banner.image" :title="banner.title" />
    </div>

    <button v-for="item in bebidas" :key="item" @click="showModal = !showModal">
      <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
        :imagem="item.imagem" />
    </button>
    <div v-if="showModal" v-for="item in bebidas" :key="item">
      <ProdutosOnClick :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
        :imagem="item.imagem"/>
    </div>
  </div>
  <div id="alcoolicas" class="section">

    <div v-for="banner in Balcoolicas" :key="banner">
      <TopoProduto :image="banner.image" :title="banner.title" />
    </div>

    <button v-for="item in alcoolicas" :key="item" @click="showModal = !showModal">
      <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
        :imagem="item.imagem" />
    </button>
    <div v-if="showModal" v-for="item in alcoolicas" :key="item">
      <ProdutosOnClick :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
        :imagem="item.imagem"/>
    </div>
  </div>

  <div  id="-sobremesa" class="section">
    <div v-for="banner in Bsobremesas" :key="banner">
      <TopoProduto :image="banner.image" :title="banner.title" />
    </div>
    <button @click="showModal = !showModal" v-for="item in sobremesas" :key="item">
      <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
        :imagem="item.imagem" />
    </button>
    <div v-if="showModal" v-for="item in sobremesas" :key="item">
      <ProdutosOnClick :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
        :imagem="item.imagem"/>
    </div>

  </div>
</template>
<style>
.section {
  height: 100vh;
}
</style>
