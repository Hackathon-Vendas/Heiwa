<script setup></script>

<template>
    <div class="container">
        <div class="product">
            <div class="descricao">
                <span class="DProduto">Yakssoba de frutos do mar</span>
                <span class="DProduto">Mesa N°03</span>
            </div>
            <div class="espacamento">
                <span class="OBS">“Não colocar brócolis”...</span>
            </div>
            <div class="bottom-pronto">
                <div class="">

                </div>
                <span class="BPronto">Pronto</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

* {
    font-family: "Inter", sans-serif;
}

.descricao {
    display: flex;
}

.espacamento{
    margin-top: 20px;
}

.OBS {
    margin: 50px 0 0 30px;
    color: #FFFFFF;
    letter-spacing: 1px;
}

.DProduto {
    margin: 25px 8px 0px 30px;
    font-size: 25px;
    color: #FFFFFF;
    font-weight: bold;
    letter-spacing: 1px;
}

.container {
    margin-top: 30px;
    justify-content: center;
    display: flex;
}

.product {
    width: 400px;
    height: 200px;
    background-color: #575757;
    border-radius: 8px;
}

.bottom-pronto {
    width: 300px;
    height: 55px;
    margin-top: 20px;
    background-color: #454545;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}

.BPronto{
    color: #FFFFFF;
    font-weight: bold;
    font-size: 25px;

}
</style>