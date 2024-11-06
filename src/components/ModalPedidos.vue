<script setup>
import { ref } from 'vue';
const isModalVisible = ref(true);
const itensPedido = ref([
    { quantidade: '1X', nome: 'Água', valor: 7.99 },
    { quantidade: '1X', nome: 'Refrigerante', valor: 5.50 },
    { quantidade: '2X', nome: 'Sushi', valor: 15.00 },
    { quantidade: '2X', nome: 'Sushi', valor: 15.00 },
    { quantidade: '2X', nome: 'Sushi', valor: 15.00 },
    { quantidade: '2X', nome: 'Sushi', valor: 15.00 },
    { quantidade: '2X', nome: 'Sushi', valor: 15.00 },
]);
function fecharModal() {
    isModalVisible.value = false;
}

const props = defineProps({
    isOpen: Boolean
});
const emit = defineEmits([
    "update:isOpen"
])
const closeModal = () => {
    emit("update:isOpen", false);
};
</script>
<template>
    <Transition name="fade">
        <div v-if="isOpen" class="containerPedidos">
            <div class="pedidos">
                <div class="informacoes">
                    <h1>PEDIDOS</h1>
                    <i @click="closeModal"><img src="/src/assets/excluir.png" alt=""></i>
                </div>
                <div class="itens">
                    <div class="item-1" v-for="(item, index) in itensPedido" :key="index">
                        <p class="quantidade">{{ item.quantidade }}</p>
                        <p class="item">{{ item.nome }}</p>
                        <p class="valor">{{ item.valor.toFixed(2) }}</p>
                        <p class="botaoExcluir"><img src="/excluir.png" alt=""></p>
                    </div>
                </div>
                <div class="pedidoUsuario">
                    <div class="infoPedido">
                        <h3>TOTAL</h3>
                        <h3>R$835,10</h3>
                    </div>
                    <div class="botoesPedido">
                        <button class="finalizarPedido">FINALIZAR PEDIDO</button>
                        <h3>OU</h3>
                        <button class="pedirConta">PEDIR CONTA</button>
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

.containerPedidos {
    background-color: #2D2D2D;
    width: 65%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 999;
    display: flex;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
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
    padding-left: 30px;
    border-right: px solid white;
    padding-right: 25.3px;
    text-align: center;
    width: 80px;

}

.item {
    font-size: 20px;
    padding-right: 459px;
    flex-grow: 1;
    padding: 0 10px;
}

.valor {
    font-size: 25px;
    padding-right: 34px;
    text-align: center;
    width: 100px;
    text-align: center;
}

.botaoExcluir {
    padding-right: 17px;
    text-align: center;
    cursor: pointer;
}

.infoPedido {
    display: flex;
    justify-content: space-between;
    margin: 41px;
    margin-bottom: 32px;
}

.infoPedido h3 {
    color: white;
    font-size: 30px;
}

.botoesPedido {
    display: flex;
    justify-content: space-between;
    margin: 32px 32px 49px 35px;
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

@media (max-height: 970px) {
    .item-1 {
        padding: 1.4rem 0;
    }

    .itens {
        height: 60%;
    }
}

@media (min-width: 1700px) {
    .botoesPedido {
        margin: 32px 50px 49px 50px;
    }

    .infoPedido {
        margin: 41px 60px;
        margin-bottom: 32px;
    }

    .botoesPedido button {
        width: 450px;
        height: 70px;
        border-radius: 20px;
        font-size: 32px;
    }

}
</style>