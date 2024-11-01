import { ref } from 'vue';
import { defineStore } from 'pinia';

import bannerEntradas from '../assets/bannerEntradas.png';
import bannerPrincipais from '../assets/bannerPrincipais.png';
import bannerAlcoolicas from '../assets/bannerAlcoolicas.png';
import bannerBebidas from '../assets/bannerBebidas.png';
import bannerSobremesas from '../assets/bannerSobremesas.png';

export const useBentradaStore = defineStore('Bentradas', () => {
    const Bentradas = ref([
        { image: bannerEntradas, title: 'Entradas' }
      ]);
    return {Bentradas};
});
export const useBprincipalStore = defineStore('Bprincipais', () => {
    const Bprincipais = ref([
        { image: bannerPrincipais, title: 'Principais' }
      ]);
    return {Bprincipais};
});
export const useBalcoolicaStore = defineStore('Balcoolicas', () => {
    const  Balcoolicas = ref([
        { image: bannerAlcoolicas, title: 'Bebidas' }
      ]);
    return {Balcoolicas};
});
export const useBbebidasStore = defineStore('Bbebidas', () => {
    const Bbebidas = ref([
        { image: bannerBebidas, title: 'Bebidas' }
      ]);
    return {Bbebidas};
});
export const useBsobremeStore = defineStore('Bsobremesas', () => {
    const Bsobremesas = ref([
        { image: bannerSobremesas, title: 'Sobremesas' }
      ]);
    return {Bsobremesas};
});
