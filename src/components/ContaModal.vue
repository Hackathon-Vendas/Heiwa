<script setup>
import { ref } from 'vue'
import { useModalStore } from '../stores/modalStore';

const modalStore = useModalStore();

const props = defineProps({
isOpen: Boolean
});

const emit = defineEmits(["update:isOpen", 'modal']);

const modalConta = ref(false)
const closeModal = () => {
    modalConta.value = true
    emit('update:isOpen", false')
}
</script>
<template>
    <div v-if="props.isOpen" class="overlay"></div> 
    <div v-if="props.isOpen" class="modalC">
    <div class="conta">
        <div class="informacoesConta">
        <h1>CONTA</h1>
        <img class="sair" src="/Vector.png " @click="closeModal" />
        </div>
        <div class="itens">
        <div class="item-1">
            <p class="quantidade">1X</p>
            <p class="item">Água</p>
            <p class="valor">7,99</p>
        </div>
        <div class="item-1">
            <p class="quantidade">2X</p>
            <p class="item">Rodízios</p>
            <p class="valor">R$214,90</p>
        </div>
        <div class="item-1">
            <p class="quantidade">2X</p>
            <p class="item">Rodízios</p>
            <p class="valor">R$214,90</p>
        </div>
        <div class="item-1">
            <p class="quantidade">2X</p>
            <p class="item">Rodízios</p>
            <p class="valor">R$214,90</p>
        </div>
        <div class="item-1">
            <p class="quantidade">2X</p>
            <p class="item">Rodízios</p>
            <p class="valor">R$214,90</p>
        </div>
        <div class="item-1">
            <p class="quantidade">2X</p>
            <p class="item">Rodízios</p>
            <p class="valor">R$214,90</p>
        </div>
        <div class="item-1">
            <p class="quantidade">2X</p>
            <p class="item">Rodízios</p>
            <p class="valor">R$214,90</p>
        </div>
        <div class="item-1">
            <p class="quantidade">2X</p>
            <p class="item">Rodízios</p>
            <p class="valor">R$214,90</p>
        </div>
        <div class="item-1">
            <p class="quantidade">2X</p>
            <p class="item">Rodízios</p>
            <p class="valor">R$214,90</p>
        </div>
        </div>
        <div class="conta-footer">
        <div class="subtotal">
            <p class="subtotal-text">SUBTOTAL:</p>
            <div class="subtotal-values">
            <p class="subtotal-original">R$759,78 <span>+10%</span></p>
            <p class="subtotal-final">R$835,10</p>
            </div>
        </div>

        <div class="total">
            <p>TOTAL:</p>
            <p>R$835,10</p>
        </div>

        <button  @click="closeModal" class="finalizar-conta">FINALIZAR CONTA</button>
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
    background-color: rgba(3, 0, 0, 0.829);
    z-index: 10;
    backdrop-filter: blur(10px);
}
.modalC {
    background-color: #2d2d2d;
    width: 85%;
    height: 100%;
    display: flex;
    align-items: center;
    max-width: 93%;
    margin: auto;
    margin-top: 50px;
    position: relative;
    border-radius: 20px;
    z-index: 20;
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
    font-weight: bold;flex-wrap: nowrap;
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
