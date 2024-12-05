<script setup>
import { computed, ref } from 'vue';
import { useCartStore } from '@/stores/cartStore';

const props = defineProps({
  item: Object,
  isOpen: Boolean,
});

const emit = defineEmits(["update:isOpen"]);

const isOpen = computed(() => props.isOpen);
const quantity = ref(1);
const cartStore = useCartStore();
const isConfirmationOpen = ref(false);

const closeModal = () => {
    emit("update:isOpen", false);
    quantity.value = 1;
};

const closeConfirmationModal = () => {
  isConfirmationOpen.value = false;
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

const addToCart = () => {
  const product = {
    ...props.item,
    id: Date.now(),
    quantity: quantity.value,
    totalPrice: parsePrice(props.item.price) * quantity.value,
  };
  cartStore.addItem(product);
  closeModal();
  isConfirmationOpen.value = true;
};
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
                <div>
                    <h1>{{ props.item.name }} <span class="unidade ai">{{ props.item.unit }}</span></h1>
                    <h2>{{ props.item.price }}</h2>
                    <p>{{ props.item.description }}</p>
                    <label class="coment">Algum comentário?</label>
                    <textarea placeholder="Ex: Tirar molho..."></textarea>
                </div>
                <div>
                    <div class="acoes">
                        <div class="contador">
                            <button @click="decrement">-</button>
                            <p>{{ quantity }}</p>
                            <button @click="increment">+</button>
                        </div>
                        <button class="add-button" @click="addToCart">
                            <span>Adicionar: </span>
                            <span>R${{ totalPrice }}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  <div v-if="isConfirmationOpen" class="modal-overlay" @click="closeConfirmationModal"></div>
  <div v-if="isConfirmationOpen">
    <div class="modal-confirmacao" @click="closeConfirmationModal()">
        <img class="confirmacao" src="/public/teste1.svg">
  </div>
  </div>

</template>

<style scoped>
* {
    font-family: 'Inter', normal, sans-serif;
}
.modal-confirmacao{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    min-height: 50%;
    max-width: 1100px;
    border-radius: 14px;
    overflow: hidden;
    z-index: 1000; 
}
.ai {
    text-wrap: nowrap;
    margin: 0;
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
    min-height: 50%;
    max-width: 1100px;
    background-color: #373737;
    border-radius: 14px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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
    color: #fff;
    font-size: 1.5em;
    cursor: pointer;
    font-weight: 700;
}

.modal-content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    min-height: 28rem;
}

.imagem {
    flex: 1;
    width: 45%;
    min-height: 28rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    box-shadow: 250px;
}

.imagem img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
}

.textos {
    min-height: 25rem;
    width: 45%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #f5f5f5;
}

.textos .coment {
    font-size: 20px;
    letter-spacing: 0.25em;
    font-weight: 1000;
}

.textos h1 {
    font-size: 28px;
    font-weight: 2000;
    margin-bottom: 10px;
    letter-spacing: 0.25em;
    align-items: center;
    justify-content: space-between;
}

.unidade {
    font-size: 20px;
    color: #fff;
    letter-spacing: 0.25em;
    margin-left: 10px;
    font-weight: 200;
}

.textos h2 {
    font-size: 20px;
    font-weight: 900;
    color: #fff;
    margin: 5px 0;
    letter-spacing: 0.25em;
}

.textos p {
    margin: 10px 0;
    display: grid;
    line-height: 1.4;
    font-size: 20px;
    letter-spacing: 0.25em;
    font-weight: 600;
}

.textos label {
    font-weight: bold;
    margin-top: 20px;
    display: block;
}

.textos textarea {
    width: 440px;
    height: 74px;
    padding: 10px;
    margin-top: 10px;
    border-radius: 10px;
    border: 3px solid #fff;
    background-color: #333;
    color: #fff;
    letter-spacing: 2px;
}

.acoes {
    display: flex;
    align-items: center;
    margin-top: 20px;
    justify-content: center;
    gap: 1rem;
}

.contador {
    height: 50px;
    width: 100px;
    display: flex;
    align-items: center;
    margin-right: 20px;
    background-color: #404040;
    border-radius: 8px;
}

.contador button {
    background-color: rgb(0, 0, 0, 0);
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
    background-color: #B93333;
    color: #fff;
    border: none;
    font-size: 1em;
    font-weight: 800;
    cursor: pointer;
    border-radius: 5px;
    text-align: center;
    gap: 4rem;
    display: flex;
}

</style>