<script setup>
import { ref } from 'vue';

const status = ref("Pendente");

function atualizarStatus() {
    if (status.value === "Pendente") {
        status.value = "Pronto";
    } else {
        status.value = "Entregue"; 
    }
}
</script>

<template>
    <div class="container">
        <div class="product">
            <div class="descricao">
                <span class="DProduto">Sunomono</span>
                <span class="DProduto">Mesa <span class="color">N°03</span></span>
            </div>
            <div class="espacamento">
                <span class="OBS">“Não colocar brócolis”...</span>
            </div>
            <div class="icone">
                <div class="bottom-pronto" >
                    <span class="BPronto">Pronto</span>
                </div>
                <div class="trash">
                    <img src="@/assets/Vector.png">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

* {
    font-family: "Inter", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    margin-top: 30px;
    display: flex;
    justify-content: center;
}

.product {
    width: 400px;
    height: 200px;
    background-color: #575757;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.descricao {
    display: flex;
    justify-content: space-between;
}

.DProduto {
    margin: 25px 8px 0px 30px;
    font-size: 25px;
    color: #FFFFFF;
    font-weight: bold;
    letter-spacing: 1px;
}

.espacamento {
    color: #FFFFFF;
    font-size: 14px;
}

.OBS {
    margin: 50px 0 0 30px;
    color: #FFFFFF;
    letter-spacing: 1px;
}

.icone {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.bottom-pronto {
    flex: 1;
    height: 55px;
    background-color: #454545;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 8px;
    cursor:pointer;
}

.BPronto {
    color: #FFFFFF;
    font-weight: bold;
    font-size: 25px;
}

.trash {
    width: 55px;
    height: 55px;
    background-color: #B93333;
    border-bottom-right-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.trash img {
    width: 30px; 
    height: 30px;
}

.color {
    color: #FF8000;
}
</style>
