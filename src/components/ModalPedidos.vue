<script setup>
import { ref } from 'vue';
import { useCartStore } from '@/stores/cartStore';
import ContaModal from './ContaModal.vue';

const cartStore = useCartStore();
defineProps({
    isOpen: Boolean
});
const emit = defineEmits(["update:isOpen"]);

const closeModal = () => {
    emit("update:isOpen", false);
};
const show = ref(false)
const removeItem = (productId) => {
    cartStore.removeItem(productId);
};
const finalizar = () => {
    show.value = true
    emit("update:isOpen", false);
}
const abrirConta = () => {
    cartStore.$state.isPedidoVisible = false
    cartStore.$state.isContaVisible = true

    // Desativar scroll
    document.body.style.overflow = 'hidden';
};

const abrireFechar = () => {
    abrirConta();
    closeModal();
}
</script>

<template>
    <ContaModal v-model:isOpen="show" />
    <Transition name="slide">
            <div v-if="isOpen" class="containerPedidos">
                <div class="pedidos">
                    <div class="informacoes">
                        <h1>PEDIDOS</h1>
                        <i @click="closeModal" class="closeModal"><img src="/src/assets/excluir.png" alt=""></i>
                    </div>
                    <div class="itens">
                        <div class="semItem" v-if="cartStore.$state.items.length <= 0"><img
                                src="/src/assets/semItem.svg"></div>
                        <div class="item-1" v-for="(item, index) in cartStore.items" :key="index">
                            <p class="quantidade">{{ item.quantity }}x</p>
                            <p class="item">{{ item.name }}</p>
                            <p class="valor">R$ {{ item.totalPrice.toFixed(2) }}</p>
                            <p @click="removeItem(item.id)" class="botaoExcluir"><img src="/excluir.png" alt=""></p>
                        </div>
                    </div>
                    <div class="pedidoUsuario">
                        <div class="infoPedido" v-if="cartStore.$state.items.length > 0">
                            <h3>TOTAL</h3>
                            <h3>R${{ cartStore.totalPrice.toFixed(2) }}</h3>
                        </div>
                        <div class="botoesPedido" v-if="cartStore.$state.items.length > 0">
                            <button class="finalizarPedido" @click="finalizar">FINALIZAR PEDIDO</button>
                            <h3>OU</h3>
                            <button @click="abrireFechar" class="pedirConta">PEDIR CONTA</button>
                        </div>
                    </div>
                </div>
            </div>
    </Transition>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

* {
    font-family: "Inter", sans-serif;
}

.closeModal {
    position: absolute;
    right: 0;
}


.semItem img {
    height: 50%;
    width: 50%;
    margin: auto;
}

.semItem {
    display: flex;
    height: 100%;
}

.containerPedidos {
    z-index: 3;
    background-color: #2D2D2D;
    width: 60%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    position: fixed;
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-enter-from {
    transform: translateX(100%);
    opacity: 0;
}

.slide-enter-to {
    transform: translateX(0);
    opacity: 1;
}

.slide-leave-from {
    transform: translateX(0);
    opacity: 1;
}

.slide-leave-to {
    transform: translateX(100%);
    opacity: 0;
}

.pedidos {
    width: 100%;
    height: 100%;
    box-shadow: -20px 16px 20px 10px black
}

.informacoes {
    display: flex;
    align-items: center;
    justify-content: center;
}

.informacoes h1 {
    text-align: center;
    flex-grow: 1;
    margin: 43px 0;
    color: white;
    font-size: 2.5rem;
}

i {
    cursor: pointer;
    font-size: 60px;
    padding: 43px 0;
    margin-right: 70px;
    color: white;
}

.itens {
    display: flex;
    flex-direction: column;
    width: 89%;
    margin: auto;
    height: 64%;
    overflow-y: scroll;
}

.itens::-webkit-scrollbar {
    display: none;
}

.item-1 {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #6B6B6B;
    height: 84px;
    padding: 2rem 0;
    border-radius: 20px;
    margin: 10px auto;
    color: white;
    font-weight: bold
}

.quantidade {
    font-size: 30px;
    margin-left: 30px;
    border-right: px solid white;
    padding-right: 25.3px;
    text-align: center;
    width: 80px;

}

.item {
    font-size: 20px;
    flex-grow: 1;
    margin-left: 10px;
    text-align: start;
}

.valor {
    flex-grow: 1;
    font-size: 25px;
    text-align: end;
    width: 100px;
    margin-right: 30px;
}

.botaoExcluir {
    padding-right: 17px;
    text-align: center;
    cursor: pointer;
}

.pedidoUsuario {
    box-shadow: 0px -75px 77.4px 0px #282828;
    z-index: 1;
}

.infoPedido {
    display: flex;
    justify-content: space-between;
    padding: 41px;
    padding-bottom: 32px;
}

.infoPedido h3 {
    color: white;
    font-size: 30px;
}

.botoesPedido {
    display: flex;
    justify-content: space-between;
    margin: 3px 32px 49px 35px;
    gap: 19px;
}

.botoesPedido button {
    width: 391px;
    height: 59px;
    border-radius: 20px;
    font-size: 30px;
    color: white;
    border: none;
    cursor: pointer;
    font-weight: bold
}

.botoesPedido h3 {
    font-size: 30px;
    display: flex;
    align-items: center;
    color: #949494;
}

.finalizarPedido {
    background-color: #B93333;
}

.pedirConta {
    background-color: #FF8000;
}
</style>