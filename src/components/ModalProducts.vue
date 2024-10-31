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
    <div class="container-modal" v-if="props.isOpen">
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
</template>

<style>
.container-modal {
    display: flex;
    position: absolute;
    top: 20%;
    left: 20%;
    width: 60%;
    background-color: #5A5A5A;
}
</style>