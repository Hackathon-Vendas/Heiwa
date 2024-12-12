<script setup>
import { ref } from 'vue';
const quantidade = ref(1)
const increment = () => {
    quantidade.value++;
};
const quantidadeValor = ref(1);

const decrement = () => {
    if (quantidade.value > 1) {
        quantidade.value--;
    }
};
</script>

<template>
    <div class="container">
        <div class="tittle">
            <h1>Adicionar Produto</h1>
        </div>

        <div class="content">
            <div class="addImage">
                <input type="file" class="imageInput" placeholder="Adicione uma imagem">
                <label for="fileInput" class="custom-file-label">
                    <img src="/src/assets/addImage.png" alt="Adicionar Imagem" />
                </label>
            </div>
            <div class="add">
                <div class="addText">
                    <label for="textInput">Adicione o nome:</label>
                    <input type="text" class="nomeInput">
                    <label for="">Adicione descrição:</label>
                    <input type="text" class="descricaoInput">
                </div>
                <div class="selectMenu">
                    <div class="btn-select">
                        <span>Selecione um tipo</span>
                        <i id="icon-select" class="bx-chevron-down"></i>
                    </div>
                </div>
                <div class="numbers">
                    <div class="column">
                        <label for="valor">Adicione um valor</label>
                        <div class="precoBotao">
                            <div class="reais">
                                <p class="pReais">R$</p>
                            </div>
                            <input type="number" name="valor" id="" v-model="quantidadeValor">
                        </div>
                    </div>
                    <div class="column">
                        <label for="">Adicione a quantidade</label>
                        <div class="quantidadeBotao">
                            <button @click="decrement">-</button>
                            <p>{{ quantidade }}</p>
                            <button @click="increment">+</button>
                        </div>
                    </div>

                </div>
                <button class="adicionar">ADICIONAR</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

* {
    font-family: "Inter", sans-serif;
}


.container {
    height: 73%;
    width: 94%;
    margin-top: 150px;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    display: block;
    border-radius: 8px;
}

.content {
    height: 679px;
    display: flex;
    background-color: #2D2D2D;
}

.tittle {
    width: 100%;
    height: 80px;
    background-color: #404040;
    justify-content: center;
    display: flex;
    align-items: center;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}


h1 {
    text-align: center;
    font-size: 30px;
    color: white;
    letter-spacing: 4px;
}

.add {
    margin: 40px auto;
    width: 765px;
    height: 600px;
}

.addImage {
    display: flex;
    justify-content: center;
    margin: auto 44px;
}

.imageInput {
    width: 456px;
    height: 600px;
    background-color: #1E1E1E;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #1E1E1E;
}

.custom-file-label > img{
    margin-left: -250px;
    margin-top: 280px;
}

.addText>input {
    display: flex;
}

.addText>label {
    font-size: 20px;
    color: white;
    letter-spacing: 2.5px;
}

.nomeInput {
    width: 763px;
    height: 51px;
    border-radius: 8px;
    outline: none;
    background-color: #1E1E1E;
    border: none;
    font-size: 20px;
    color: white;
    padding-left: 10px;
    margin: 13px auto;
}

.descricaoInput {
    width: 765px;
    height: 204px;
    background-color: #1E1E1E;
    font-size: 20px;
    border: none;
    color: white;
    padding-left: 10px;
    border-radius: 8px;
    margin-top: 15px;
    margin-bottom: 29px;
}

select {
    width: 763px;
    height: 50px;
    background-color: #404040;
    outline: none;
    border: none;
    font-size: 20px;
    padding-left: 30px;
    color: white;
    letter-spacing: 2.5px;
}

.precoBotao {
    display: flex;
    justify-content: space-around;
}

.precoBotao > input {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    width: 300px;
    height: 50px;
    background-color: #1E1E1E;
    outline: none;
    border: none;
    padding-left: 10px;
    font-size: 20px;
    color: white;
}

.reais {
    width: 60px;
    height: 50px;
    background-color: #404040;
    border-top-left-radius: 8px;
    border-end-start-radius: 8px;
}

.pReais {
    font-size: 22px;
    color: white;
    text-align: center;
    padding: auto;
}

.quantidadeBotao {
    display: flex;
    width: 354px;
    height: 50px;
    border-radius: 8px;
    background-color: #404040;
    align-items: center;
    justify-content: space-around;
}

.quantidadeBotao>button {
    background-color: transparent;
    border: none;
    font-size: 30px;
    color: white;
    margin: auto 10px;
    text-align: center;
}

.column {
    display: flex;
    flex-direction: column;
}

.column>label {
    font-size: 25px;
    color: white;
    letter-spacing: 2.5px;
    margin: 15px auto;
}

.numbers {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.quantidadeBotao>p {
    font-size: 25px;
    color: white;
}

.adicionar {
    width: 765px;
    height: 50px;
    margin-top: 25px;
    border-radius: 8px;
    background-color: #B93333;
    color: white;
    font-size: 18px;
    border: none;
}
</style>
