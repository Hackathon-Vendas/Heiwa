<script setup>
const props = defineProps({
    item: Object,
    isOpen: Boolean
})

const emit = defineEmits(["update:isOpen"]);

const closeModal = () => {
    emit("update:isOpen", false);
};
</script>

<template>
    <div class="container" v-if="props.isOpen">
        Carai
        <h1>{{ props.item }}</h1>
        <h2>{{ props.item }} unidades</h2>
        <h2>R${{ props.item }}</h2>
        <img :src=imagem>
        <p>{{ props.item }}</p>
        <label for="">Algum comentário?</label>
        <textarea name="" id="" placeholder="Ex: Tirar cebola..."></textarea>
        <div class="contador">
            <button>-</button>
            <p>1</p>
            <button>+</button>
        </div>
        <button>Adicionar: R${{ props.item }}</button>
        <button @click="closeModal">fechar essa bomba ai</button>
    </div>
</template>

<style>
.container{
    position: absolute;
    top: 20%;
    left: 20%;
    width: 50%;
    background-color: red;
}
</style>