<script setup>
import { useCartStore } from '../stores/cartStore';
import axios from '@/plugins/axios';

const cartStore = useCartStore();

defineProps({
    isOpen: Boolean
});

defineEmits(["update:isOpen", 'modal']);

const closeModal = () => {
    cartStore.$state.isContaVisible = false
    axios.get('/mercadop/redirect')
        .then((response) => {
            window.location.href = response.data.redirect_url
        })

    document.body.style.overflow = '';
}
</script>
<template>
    <div v-if="cartStore.$state.isContaVisible" class="overlay"></div>
    <div v-if="cartStore.$state.isContaVisible" class="modalC">
        <div class="conta">
            <div class="informacoesConta">
                <h1>CONTA</h1>
                <img class="sair" src="/Vector.png " @click="closeModal" />
            </div>
            <div class="itens">
                <div class="item-1" v-for="item in cartStore.items" :key="item.id">
                    <p class="quantidade">{{ item.quantity }}</p>
                    <p class="item">{{ item.name }}</p>
                    <p class="valor">R$ {{ item.totalPrice.toFixed(2) }}</p>
                </div>
            </div>
            <div class="conta-footer">
                <div class="total">
                    <p>TOTAL:</p>
                    <p>R$ {{ cartStore.totalPrice.toFixed(2) }}</p>
                </div>

                <button @click="closeModal" class="finalizar-conta">FINALIZAR CONTA</button>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

* {
    font-family: 'Inter', sans-serif;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(3, 0, 0, 0.2);
    z-index: 10;
    backdrop-filter: blur(10px);
}

.modalC {
    background-color: #2d2d2d;
    width: 85%;
    height: 80vh;
    position: fixed;
    border-radius: 20px;
    z-index: 20;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
}

.conta {
    width: 100%;
    height: 100%;
}

.sair {
    margin-right: 75px;
}

.informacoesConta {
    display: flex;
    align-items: center;
    justify-content: center;
}

.informacoesConta h1 {
    text-align: center;
    flex-grow: 1;
    margin: 20px 0;
    margin-left: 110px;
    color: white;
    font-size: 40px;
    letter-spacing: 0.17em;
}

.itens {
    display: flex;
    flex-direction: column;
    width: 89%;
    margin: auto;
    height: 64%;
    overflow-y: scroll;
}

.item-1 {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #6b6b6b;
    height: 84px;
    padding: 2rem 0;
    border-radius: 20px;
    margin: 10px auto;
    color: white;
    font-weight: bold;
}

.quantidade {
    font-size: 30px;
    padding-left: 30px;
    border-right: 1px solid white;
    padding-right: 25.3px;
    text-align: center;
}

.item {
    font-size: 20px;
    padding-right: 459px;
}

.valor {
    font-size: 25px;
    padding-right: 34px;
    text-align: center;
}

.conta-footer {
    padding: 20px;
    background-color: #333333;
    border-top: 2px solid #6B6B6B;
    padding-top: 15px;
    margin-top: 20px;
}

.subtotal {
    display: flex;
    width: 93%;
    margin: auto;
    justify-content: space-between;
    background-color: #555555;
    padding: 30px 20px;
    border-radius: 20px;
    margin-bottom: 20px;
    font-weight: bold;
    flex-wrap: nowrap;
    align-items: baseline;

}

.subtotal-text {
    color: white;
    font-size: 30px;
}

.subtotal-values {
    text-align: right;
}

.subtotal-original {
    color: white;
    font-size: 1.1rem;
    margin: 0;
}

.subtotal-original span {
    font-size: 0.8rem;
    color: #bcbcbc;
}

.subtotal-final {
    font-size: 1.5rem;
    color: #85DE66;
    margin-top: 5px;
}

.total {
    display: flex;
    justify-content: space-between;
    font-size: 30px;
    font-weight: bold;
    color: white;
    margin-bottom: 20px;
    margin-top: 80px;
    margin-right: 50px;
    margin-left: 50px;
}

.finalizar-conta {
    width: 93%;
    padding: 15px;
    font-size: 30px;
    font-weight: bold;
    color: white;
    background-color: #b93333;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    margin-left: 39px;
}
</style>