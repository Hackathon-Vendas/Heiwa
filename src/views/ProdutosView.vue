<script setup>
import Produtos from '@/components/itensCardapio/Produtos.vue';
import TopoProduto from '@/components/itensCardapio/TopoProduto.vue';
import { ref } from 'vue'
import bannerEntradas from '../assets/bannerEntradas.png'
import bannerPrincipais from '../assets/bannerPrincipais.png'
import bannerAlcoolicas from '../assets/bannerAlcoolicas.png'
import bannerBebidas from '../assets/bannerBebidas.png'
import bannerSobremesas from '../assets/bannerSobremesas.png'

import Sunomono from '../assets/Sunomono.png';
import Gyoza from '../assets/gyoza.png';
import Tataki from '../assets/tatakiAtum.png';
import sushi1 from '../assets/sushi1.svg';
import sushi2 from '../assets/sushi2.svg';
import sushi3 from '../assets/sushi3.svg';
import sushi4 from '../assets/sushi4.svg';
import sushi5 from '../assets/sushi5.svg';
import aguasg from '../assets/aguasg.png';
import aguacg from '../assets/aguacg.png';
import refri from '../assets/refri.png';
import sucos from '../assets/sucos.png';
import destilados from '../assets/destilados.png';
import vinhos from '../assets/vinhos.png';
import drinks from '../assets/drinks.png';
import cervejas from '../assets/cervejas.png';
import mochi from '../assets/Mochi.png';
import sorvete from '../assets/Sorvete.png';
import petitgateau from '../assets/PetitGateau.png';
import tempura from '../assets/TempuradeSorvete.png';
import dorayaki from '../assets/Dorayaki.png';
import anmitsu from '../assets/Anmitsu.png';
import cheesecake from '../assets/cheesecake.png';

const Bentradas = ref([
  { image: bannerEntradas, title: 'Entradas' }
])
const Bprincipais = ref([
  { image: bannerPrincipais, title: 'Principais' }
])
const Balcoolicas = ref([
  { image: bannerAlcoolicas, title: 'Bebidas' }
])
const Bbebidas = ref([
  { image: bannerBebidas, title: 'Bebidas' }
])
const Bsobremesas = ref([
  { image: bannerSobremesas, title: 'Sobremesas' }
])


const bebidaAlcoolica = ref([
  { name: 'Destilados', unit: '(A partir de:)', description: ' Bebidas alcoólicas obtidas por destilação, geralmente mais fortes, feitas a partir de grãos, frutas ou cana-de-açúcar.', price: 'R$40,00', imagem: destilados },
  { name: 'Vinhos', unit: '(A partir de:)', description: 'Bebidas fermentadas feitas a partir de uvas.', price: 'R$70,00', imagem: vinhos },
  { name: 'Drinks', unit: '(A partir de:)', description: 'Misturas de bebidas alcoólicas com outros ingredientes.', price: 'R$25,50', imagem: drinks },
  { name: 'Cervejas', description: 'Bebidas fermentadas à base de cevada e lúpulo, com estilos variados.', unit: '(A partir de:)', price: 'R$12,50', imagem: cervejas },
])

const entradas = ref([
  { name: 'Sunomono', unit: '(1 unidade)', description: ' Salada refrescante de pepino agridoce com gergelim torrado.', price: 'R$22,50', imagem: Sunomono },
  { name: 'Gyoza', unit: '(4 unidades)', description: 'Delicados pasteizinhos recheados com carne suína, servidos com molho especial.', price: 'R$33,50', imagem: Gyoza },
  { name: 'Tataki de Atum', unit: '(8 unidades)', description: 'Finas fatias de atum levemente selado, servidas com molho cítrico ponzu.', price: 'R$45,90', imagem: Tataki },
])

const principais = ref([
  { name: 'Sashimi de Salmão', unit: '(10 unidades)', description: ' Fatias frescas de salmão, acompanhadas de wasabi e gengibre.', price: 'R$64,50', imagem: sushi1 },
  { name: 'Sashimi de Atum', unit: '(10 unidades)', description: 'Filés de atum acompanhados de wasabi e gengibre.', price: 'R$50,00', imagem: sushi2 },
  { name: 'Yakissoba', unit: '(1 unidade)', description: 'Macarrão japonês salteado com camarões, lula e legumes.', price: 'R$55,90', imagem: sushi3 },
  { name: 'Uramaki Califórnia', description: 'BArroz japonês envolto em alga nori, recheado com kani, pepino e manga.', unit: '(5 unidade)', price: 'R$35,90', imagem: sushi4 },
  { name: 'Temaki de Atum', description: 'Cone de alga recheado com atum fresco, arroz e cebolinha, perfeito para saborear com as mãos.', unit: '(1 unidade)', price: 'R$35,50', imagem: sushi5 }
])

const bebidas = ref([
  { name: 'Àgua sem gás', unit: '(Unidade 1)', description: 'Água Mineral Sem Gás - 510ml', price: 'R$8,00', imagem: aguasg },
  { name: 'Àgua com Gás', unit: '(Unidade 1)', description: 'Água Mineral Com Gás - 510ml', price: 'R$8,00', imagem: aguacg },
  { name: 'Refri', unit: '(Unidade 1)', description: 'Refrigerantes diversos. 220ml', price: 'R$6,50', imagem: refri },
  { name: 'Sucos', description: 'Sucos naturais de frutos. 250ml', price: 'R$11,00', imagem: sucos },
])

const sobremesas = ref([
  { name: 'Mochi', unit: '(2 unidades)', description: 'Doce japonês tradicional de massa de arroz, recheado.', price: 'R$32,50', imagem: mochi },
  { name: 'Sorvete', unit: '(1 unidade)', description: 'Sobremesa cremosa com o sabor suave e característico', price: 'R$30,00', imagem: sorvete },
  { name: 'Cheesecake', unit: '(1 unidade)', description: 'Torta de queijo cremosa com uma base crocante de biscoito, coberta com calda de frutas vermelhas.', price: 'R$40,00', imagem: cheesecake },
  { name: 'Petit Gâteau', unit: '(1 unidade)', description: 'Pequeno bolo de chocolate com recheio cremoso, servido com sorvete de creme.', price: 'R$30,00', imagem: petitgateau },
  { name: 'Dorayaki', description: 'Panqueca japonesa recheada com doce de feijão azuki, uma combinação de texturas e sabores.', unit: '(2 unidades)', price: 'R$25,00', imagem: dorayaki },
  { name: 'Tempurá de Sorvete', description: 'Sorvete envolto em uma crosta crocante de tempurá, frito rapidamente e servido quente por fora e gelado por dentro.', unit: '(1 unidades)', price: 'R$30,00', imagem: tempura },
  { name: 'Anmitsu', description: 'Doce tradicional japonês com cubos de gelatina de ágar, frutas, pasta de feijão doce e sorvete de chá verde, servido com calda de açúcar mascavo.', unit: '(1 unidades)', price: 'R$45,00', imagem: anmitsu },
])

const sobremesasR = ref([
  { name: 'Mochi', unit: '(2 unidades)', description: 'Doce japonês tradicional de massa de arroz, recheado.', price: 'R$32,50', imagem: mochi },
  { name: 'Sorvete', unit: '(1 unidade)', description: 'Sobremesa cremosa com o sabor suave e característico', price: 'R$30,00', imagem: sorvete },
  { name: 'Cheesecake', unit: '(1 unidade)', description: 'Torta de queijo cremosa com uma base crocante de biscoito, coberta com calda de frutas vermelhas.', price: 'R$40,00', imagem: cheesecake },
  { name: 'Petit Gâteau', unit: '(1 unidade)', description: 'Pequeno bolo de chocolate com recheio cremoso, servido com sorvete de creme.', price: 'R$30,00', imagem: petitgateau },
  { name: 'Dorayaki', description: 'Panqueca japonesa recheada com doce de feijão azuki, uma combinação de texturas e sabores.', unit: '(2 unidades)', price: 'R$25,00', imagem: dorayaki }])
</script>
<template>
  <div id="section1">
    <div v-for="Bentradas in Bentradas" :key="Bentradas">
      <TopoProduto :image="Bentradas.image" :title="Bentradas.title" />
    </div>
    <div v-for="item in entradas" :key="item">
      <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
        :imagem="item.imagem" />
    </div>
  </div>
  <div id="section2">
    <div v-for="Bprincipais in Bprincipais" :key="Bprincipais">
      <TopoProduto :image="Bprincipais.image" :title="Bprincipais.title" />
    </div>

    <div v-for="item in principais" :key="item">
      <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
        :imagem="item.imagem" />
    </div>
  </div>

  <div id="section3">
    <div v-for="Bentradas in Bentradas" :key="Bentradas">
      <TopoProduto :image="Bentradas.image" :title="Bentradas.title" />
    </div>
    <div v-for="item in entradas" :key="item">
      <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
        :imagem="item.imagem" />
    </div>
  </div>
  <div id="section4">
    <div v-for="Bprincipais in Bprincipais" :key="Bprincipais">
      <TopoProduto :image="Bprincipais.image" :title="Bprincipais.title" />
    </div>

    <div v-for="item in principais" :key="item">
      <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
        :imagem="item.imagem" />
    </div>
  </div>
<div id="section5">
  <div v-for="Bsobremesas in Bsobremesas" :key="Bsobremesas">
    <TopoProduto :image="Bsobremesas.image" :title="Bsobremesas.title" />
  </div>

  <div v-for="item in sobremesasR" :key="item">
    <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
      :imagem="item.imagem" />
  </div>

</div>

<div id="section6">
  <div v-for="Bbebidas in Bbebidas" :key="Bbebidas">
    <TopoProduto :image="Bbebidas.image" :title="Bbebidas.title" />
  </div>

  <div v-for="item in bebidas" :key="item">
    <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
      :imagem="item.imagem" />
  </div>
</div>
<div id="section7">

  <div v-for="Balcoolicas in Balcoolicas" :key="Balcoolicas">
    <TopoProduto :image="Balcoolicas.image" :title="Balcoolicas.title" />
  </div>

  <div v-for="item in bebidaAlcoolica" :key="item">
    <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
      :imagem="item.imagem" />
  </div>

</div>

<div id="section8">
  <div v-for="Bsobremesas in Bsobremesas" :key="Bsobremesas">
    <TopoProduto :image="Bsobremesas.image" :title="Bsobremesas.title" />
  </div>

  <div v-for="item in sobremesas" :key="item">
    <Produtos :name="item.name" :description="item.description" :unit="item.unit" :price="item.price"
      :imagem="item.imagem" />
  </div>
</div>
</template>
