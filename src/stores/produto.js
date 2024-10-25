import { ref } from 'vue';
import { defineStore } from 'pinia';

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


export const useAlcoolicaStore = defineStore('alcoolicas', () => {
    const alcoolicas = ref([
        { ame: 'Destilados', unit: '(A partir de:)', description: ' Bebidas alcoólicas obtidas por destilação, geralmente mais fortes, feitas a partir de grãos, frutas ou cana-de-açúcar.', price: 'R$40,00', imagem: destilados },
        { ame: 'Vinhos', unit: '(A partir de:)', description: 'Bebidas fermentadas feitas a partir de uvas.', price: 'R$70,00', imagem: vinhos },
        {ame: 'Drinks', unit: '(A partir de:)', description: 'Misturas de bebidas alcoólicas com outros ingredientes.', price: 'R$25,50', imagem: drinks },
        { name: 'Cervejas', description: 'Bebidas fermentadas à base de cevada e lúpulo, com estilos variados.', unit: '(A partir de:)', price: 'R$12,50', imagem: cervejas },
    ]);
    return { alcoolicas};
});
export const useEntradaStore = defineStore('entradas', () => {

    const entradas = ref([
        { ame: 'Sunomono', unit: '(1 unidade)', description: ' Salada refrescante de pepino agridoce com gergelim torrado.', price: 'R$22,50', imagem: Sunomono },
        {ame: 'Gyoza', unit: '(4 unidades)', description: 'Delicados pasteizinhos recheados com carne suína, servidos com molho especial.', price: 'R$33,50', imagem: Gyoza },
        {ame: 'Tataki de Atum', unit: '(8 unidades)', description: 'Finas fatias de atum levemente selado, servidas com molho cítrico ponzu.', price: 'R$45,90', imagem: Tataki },
    ])
    return { entradas};
});
export const usePrincipalStore = defineStore('principais', () => {
        const principais = ref([
        {ame: 'Sashimi de Salmão', unit: '(10 unidades)', description: ' Fatias frescas de salmão, acompanhadas de wasabi e gengibre.', price: 'R$64,50', imagem: sushi1 },
        {ame: 'Sashimi de Atum', unit: '(10 unidades)', description: 'Filés de atum acompanhados de wasabi e gengibre.', price: 'R$50,00', imagem: sushi2 },
        {name: 'Yakissoba', unit: '(1 unidade)', description: 'Macarrão japonês salteado com camarões, lula e legumes.', price: 'R$55,90', imagem: sushi3 },
        {name: 'Uramaki Califórnia', description: 'Arroz japonês envolto em alga nori, recheado com kani, pepino e manga.', unit: '(5 unidade)', price: 'R$35,90', imagem: sushi4 },
        {name: 'Temaki de Atum', description: 'Cone de alga recheado com atum fresco, arroz e cebolinha, perfeito para saborear com as mãos.', unit: '(1 unidade)', price: 'R$35,50', imagem: sushi5 }
    ]);
    return { principais};
});
export const useBebidaStore = defineStore('bebidas', () => {
    const bebidas = ref([
        {name: 'Àgua sem gás', unit: '(Unidade 1)', description: 'Água Mineral Sem Gás - 510ml', price: 'R$8,00', imagem: aguasg },
        {name: 'Àgua com Gás', unit: '(Unidade 1)', description: 'Água Mineral Com Gás - 510ml', price: 'R$8,00', imagem: aguacg },
        {name: 'Refri', unit: '(Unidade 1)', description: 'Refrigerantes diversos. 220ml', price: 'R$6,50', imagem: refri },
        {name: 'Sucos', description: 'Sucos naturais de frutos. 250ml', price: 'R$11,00', imagem: sucos },
    ]);
    return {bebidas};
});
export const useSobremesaStore = defineStore('sobremesas', () => {
    const sobremesas = ref([
        {name: 'Mochi', unit: '(2 unidades)', description: 'Doce japonês tradicional de massa de arroz, recheado.', price: 'R$32,50', imagem: mochi },
        {name: 'Sorvete', unit: '(1 unidade)', description: 'Sobremesa cremosa com o sabor suave e característico', price: 'R$30,00', imagem: sorvete },
        {name: 'Cheesecake', unit: '(1 unidade)', description: 'Torta de queijo cremosa com uma base crocante de biscoito, coberta com calda de frutas vermelhas.', price: 'R$40,00', imagem: cheesecake },
        {name: 'Petit Gâteau', unit: '(1 unidade)', description: 'Pequeno bolo de chocolate com recheio cremoso, servido com sorvete de creme.', price: 'R$30,00', imagem: petitgateau },
        {name: 'Dorayaki', description: 'Panqueca japonesa recheada com doce de feijão azuki, uma combinação de texturas e sabores.', unit: '(2 unidades)', price: 'R$25,00', imagem: dorayaki },
        {name: 'Tempurá de Sorvete', description: 'Sorvete envolto em uma crosta crocante de tempurá, frito rapidamente e servido quente por fora e gelado por dentro.', unit: '(1 unidades)', price: 'R$30,00', imagem: tempura },
        {name: 'Tempurá de Sorvete', description: 'Sorvete envolto em uma crosta crocante de tempurá, frito rapidamente e servido quente por fora e gelado por dentro.', unit: '(1 unidades)', price: 'R$30,00', imagem: tempura },
        {name: 'Anmitsu', description: 'Doce tradicional japonês com cubos de gelatina de ágar, frutas, pasta de feijão doce e sorvete de chá verde, servido com calda de açúcar mascavo.', unit: '(1 unidades)', price: 'R$45,00', imagem: anmitsu },
    ]);
    return { sobremesas,  };
});

export const useSobremesarStore = defineStore('sobremesasR', () => {
    const sobremesasR = ref([
        {name: 'Mochi', unit: '(2 unidades)', description: 'Doce japonês tradicional de massa de arroz, recheado.', price: 'R$32,50', imagem: mochi },
        {name: 'Sorvete', unit: '(1 unidade)', description: 'Sobremesa cremosa com o sabor suave e característico', price: 'R$30,00', imagem: sorvete },
        {name: 'Cheesecake', unit: '(1 unidade)', description: 'Torta de queijo cremosa com uma base crocante de biscoito, coberta com calda de frutas vermelhas.', price: 'R$40,00', imagem: cheesecake },
        {name: 'Petit Gâteau', unit: '(1 unidade)', description: 'Pequeno bolo de chocolate com recheio cremoso, servido com sorvete de creme.', price: 'R$30,00', imagem: petitgateau },
        {name: 'Dorayaki', description: 'Panqueca japonesa recheada com doce de feijão azuki, uma combinação de texturas e sabores.', unit: '(2 unidades)', price: 'R$25,00', imagem: dorayaki }]);
        return { sobremesasR };
});