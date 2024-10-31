<script setup>
import { computed } from 'vue';

const props = defineProps({
    item: Object,
    isOpen: Boolean
})

const isOpen = computed(() => {
    return props.isOpen
})

const emit = defineEmits(["update:isOpen"]);

let scrollY = window.scrollY;
const verifica = computed(() =>{ 
    
    if(isOpen.value == true){
        scrollY = window.scrollY
        document.body.style.overflow = 'hidden';
    }
    else{
        document.body.style.overflow = 'initial';
    }
})

const closeModal = () => {
    emit("update:isOpen", false);
    isOpen.value = false;
};

</script>

<template>
    <div class="background" v-if="isOpen"></div>
    <div class="container-modal" v-if="isOpen">
        <div class="imagem">
            <img :src=props.item.imagem>
        </div>
        <div class="textos">
            <h1>{{ props.item.name }}</h1>
            <h2>{{ props.item.unit }}</h2>
            <h2>R${{ props.item.price }}</h2>
            <p>{{ props.item.description }}</p> 
            <label for="">Algum comentário?</label>
            <textarea name="" id="" placeholder="Ex: Tirar molho..."></textarea>
            <div class="contador">
                <button>-</button>
                <p>1</p>
                <button>+</button>
            </div>
            <button>Adicionar: {{ props.item.price }}</button>
            <button @click="closeModal">fechar essa bomba ai</button>
        </div>
    </div>
    {{  verifica }}
</template>

<style>



.background{
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .8);
    z-index: 999;
    top: 0;
    left: 0;
    position: fixed;
}
.container-modal {
    z-index: 1000;
    display: flex;
    position: fixed;
    top: 20%;
    left: 20%;
    width: 60%;
    background-color: #5A5A5A;

}
</style>