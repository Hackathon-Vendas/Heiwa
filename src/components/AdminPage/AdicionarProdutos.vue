<script setup>
import { ref } from 'vue';
const quantidade = ref(1)
</script>

<template>
    <div class="container">
        <div class="tittle">
            <h1>Adicionar Produto</h1>
        </div>

        <div class="content">
            <div class="addImage">
                <input type="file" class="imageInput" placeholder="Adicione uma imagem">
            </div>
            <div class="add">
                <div class="addText">
                    <label for="textInput">Adicione o nome:</label>
                    <input type="text" class="nomeInput">
                    <label for="">Adicione descrição:</label>
                    <input type="text" class="descricaoInput">
                </div>
                <div class="selectMenu">
                    <select name="" id="">
                        <option value="Selecione uma mesa">Selecione um tipo</option>
                    </select>
                </div>
                <div class="numbers">
                <div class="column">
                    <label for="valor">Adicione um valor</label>
                    <input type="number" name="valor" id="">
                </div>
                    <div class="column">
                        <label for="">Adicione a quantidade</label>
                        <div class="quantidadeBotao">
                            <button>-</button>
                            <p>{{ quantidade }}</p>
                            <button>+</button>
                        </div>
                    </div>

                </div>
                <button>ADICIONAR</button>
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
    letter-spacing: 2.5px;
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
}
.column{
    display: flex;
    flex-direction: column;
}
.column > label{
    font-size: 25px;
}
.numbers{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.quantidadeBotao > p {
    font-size: 25px;
    color: white;
}
</style>
