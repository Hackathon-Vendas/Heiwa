<script setup></script>

<template>
    <h1 class="tittle"> PEDIDOS</h1>
    <div class="statusTable">
        <div id="aFazer" class="statusColumn">  
            <div class="statusTittle"><h2>A FAZER</h2></div>
            <div class="statusPedidos"></div>
        </div>
        <div id="preparando" class="statusColumn">
            <div class="statusTittle"><h2>PREPARANDO...</h2></div>
            <div class="statusPedidos"></div>
        </div>
        <div id="pronto" class="statusColumn">
            <div class="statusTittle"><h2>PRONTO</h2></div>
            <div class="statusPedidos"></div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
*{
    font-family: "Inter", sans-serif;
}
.tittle {
    margin-top: 150px;
    color: white;
    letter-spacing: 7px;
    font-size: 30px;
    text-align: center;
}
.statusTittle{
    background-color: #8D3737;
    width: 100%;
    height: 55px;
    display: flex;
    justify-content: center; 
    align-items: center;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
}
 h2 {
    color: white;
    font-size: 25px;
    font-weight: bold;
    letter-spacing: 7px;
}
.statusTable{
    display: flex;
    width: 100%;
    justify-content: center;
}
.statusColumn{
    height: 808px;
    width: 435px;   
    border-radius: 14px;
    margin: 29px 20px;
    background-color: #282828;
    }
</style>