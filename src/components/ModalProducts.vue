<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
    item: Object,
    isOpen: Boolean
});

const emit = defineEmits(["update:isOpen"]);

const isOpen = computed(() => props.isOpen);
const quantity = ref(1);

const closeModal = () => {
    emit("update:isOpen", false);
};

const increment = () => {
    quantity.value++;
};

const decrement = () => {
    if (quantity.value > 1) {
        quantity.value--;
    }
};

const parsePrice = (price) => parseFloat(price.replace("R$", "").trim());

const totalPrice = computed(() => (parsePrice(props.item.price) * quantity.value).toFixed(2));
</script>

<template>
    <div v-if="isOpen" class="modal-overlay" @click="closeModal"></div>
    <div v-if="isOpen" class="modal-container">
        <button class="close-button" @click="closeModal">✕</button>
        <div class="modal-content">
            <div class="imagem">
                <img :src="props.item.imagem" alt="Imagem do produto" />
            </div>
            <div class="textos">
                <h1>{{ props.item.name }} <span class="unidade">{{ props.item.unit }}</span></h1>
                <h2>{{ props.item.price }}</h2>
                <p>{{ props.item.description }}</p>
                <label>Algum comentário?</label>
                <textarea placeholder="Ex: Tirar molho..."></textarea>
                <div class="acoes">
                    <div class="contador">
                        <button @click="decrement">-</button>
                        <p>{{ quantity }}</p>
                        <button @click="increment">+</button>
                    </div>
                    <button class="add-button">Adicionar: R${{ totalPrice }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
*{
    font-family: 'Inter', normal, sans-serif;
}
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 999;
}

.modal-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 900px;
    background-color: #2c2c2c;
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    padding: 20px;
}

.close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    color: #aaa;
    font-size: 1.5em;
    cursor: pointer;
}

.modal-content {
    display: flex;
    flex-direction: row;
    width: 100%;
}

.imagem {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.imagem img {
    max-width: 100%;
    border-radius: 8px;
}

.textos {
    flex: 1.5;
    padding: 20px;
    color: #f5f5f5;
}

.textos h1 {
    font-size: 2em;
    font-weight: 1500;
    margin-bottom: 10px;
    display: flex;
    letter-spacing: 0.25em;
    align-items: center;
    justify-content: space-between;
}

.unidade {
    font-size: 20px;
    color: #bbb;
    letter-spacing: 0.25em;
    margin-left: 10px;
}

.textos h2 {
    font-size: 1.2em;
    color: #bbb;
    margin: 5px 0;
}

.textos p {
    margin: 10px 0;
    line-height: 1.4;
}

.textos label {
    font-weight: bold;
    margin-top: 20px;
    display: block;
}

.textos textarea {
    width: 100%;
    height: 60px;
    padding: 10px;
    margin-top: 10px;
    border-radius: 5px;
    border: 1px solid #666;
    background-color: #333;
    color: #fff;
}

.acoes {
    display: flex;
    align-items: center;
    margin-top: 20px;
}

.contador {
    display: flex;
    align-items: center;
    margin-right: 20px;
}

.contador button {
    background-color: #555;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 1em;
    border-radius: 5px;
}

.contador p {
    margin: 0 15px;
    font-size: 1.2em;
    color: #fff;
}

.add-button {
    padding: 15px 20px;
    background-color: #e63946;
    color: #fff;
    border: none;
    font-size: 1.2em;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    text-align: center;
}
</style>
