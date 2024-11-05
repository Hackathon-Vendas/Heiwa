<script setup>
import { ref } from 'vue';

const emit = defineEmits([
    'modal'
])

const modalConta = ref(true) 
function closeModal () {
    modalConta.value = false
    emit('modal')
}

</script>
<template>
    <div class="overlay"></div>
    <div v-if="modalConta" class="modalC">
        <div class="conta">
            <div class="informacoesConta">
                <h1>CONTA</h1>
                <img class="sair" src="/Vector.png " @click="closeModal">
            </div>
            <div class="itens">
                <div class="item-1">
                    <p class="quantidade">1X</p>
                    <p class="item">Água</p>
                    <p class="valor">7,99</p>
                </div>
                <div class="item-1">
                    <p class="quantidade">2X</p>
                    <p class="item">Água</p>
                    <p class="valor">15,98</p>
                </div>
                <div class="item-1">
                    <p class="quantidade">2X</p>
                    <p class="item">Água</p>
                    <p class="valor">15,98</p>
                </div>
                <div class="item-1">
                    <p class="quantidade">2X</p>
                    <p class="item">Água</p>
                    <p class="valor">15,98</p>
                </div>
                <div class="item-1">
                    <p class="quantidade">2X</p>
                    <p class="item">Água</p>
                    <p class="valor">15,98</p>
                </div>
                <div class="item-1">
                    <p class="quantidade">2X</p>
                    <p class="item">Água</p>
                    <p class="valor">15,98</p>
                </div>
                <div class="item-1">
                    <p class="quantidade">2X</p>
                    <p class="item">Água</p>
                    <p class="valor">15,98</p>
                </div>
                <div class="item-1">
                    <p class="quantidade">2X</p>
                    <p class="item">Água</p>
                    <p class="valor">15,98</p>
                </div>
            </div>
            <div class="resumo">
            <div class="subtotal">
                <span>SUBTOTAL:</span>
                <span>R$759,78 +10%</span>
            </div>
            <div class="total">
                <span>TOTAL:</span>
                <span>R$835,10</span>
            </div>
            <button @click="closeModal" class="finalizar">FINALIZAR CONTA  </button>
        </div>
        </div>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
*{
    font-family: "Inter", sans-serif;

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
    background-color: #2D2D2D;
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

.conta{
    width: 100%;
    height: 100%;
}

.sair{
    margin-right: 75px
}
.informacoesConta{
    display: flex;
    align-items: center;
    justify-content: center;
    
}
.informacoesConta h1{
    text-align: center;
    flex-grow: 1;
    margin: 20px 0;
    margin-left: 110px;
    color: white;
    font-size: 40px;
    letter-spacing: 0.17em;
}
.itens{
    display: flex;
    flex-direction: column;
    width: 89%;
    margin: auto;
    height: 64%;
    overflow-y: scroll;
}
.item-1{
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
.quantidade{
    font-size: 30px;
    padding-left: 30px;
    border-right: 1px solid white; 
    padding-right: 25.3px;
    text-align: center;
}
.item{
    font-size: 20px;
    padding-right: 459px;
}

.valor{
    font-size: 25px;
    padding-right: 34px;
    text-align: center;
}
.resumo {
    padding-top: 10px;
    border-top: 1px solid #555;
}

.subtotal, .total {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    font-size: 1.1rem;
    color: #aaa;
}

.total span:last-child {
    color: #0f0;
    font-size: 1.3rem;
}

.finalizar {
    width: 100%;
    padding: 15px;
    background-color: #B93333;
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
}

.finalizar:hover {
    background-color: #a82e2e;
}
</style>