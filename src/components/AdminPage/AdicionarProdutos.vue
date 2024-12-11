<script setup></script>

<template>
    <div class="container">
        <div class="tittle"><h1>Adicionar Produto</h1></div>

        <div class="content">
            <div class="add">
                <div class="addImage">
                    <input type="file" name="" id="">
                </div>
                <div class="addText">
                    <input type="text">
                    <input type="text">
                </div>
                <div class="select">
                    <select name="" id=""></select>
                </div>
                <div class="numbers">
                    <input type="number" name="" id="">
                    <input type="number" name="" id="">
                </div>
                <button>ADICIONAR</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
*{
    font-family: "Inter", sans-serif;
}
.container{
    height: 73%;
    width: 94%;
    margin-top: 150px;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    display: block;
    border-radius: 8px;
}
.content{
    width: 1355px;
    height: 679px;
    display: flex;
    background-color: #2D2D2D;
}
.tittle{
    width: 100%;
    height: 80px;
    background-color: #404040;
    justify-content: center;
    display: flex;
    align-items: center;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}
h1{
    text-align: center;
    font-size: 30px;
    color: white;
}

.addImage{
    width: 456px;
    height: 600px;
    background-color: red;
    border-radius: 8px;
    display: flex;
    justify-content: center;
}
</style>

