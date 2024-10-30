<script setup>

</script>
<template>
    <div class="container">
        <div class="pedidos">
            <div class="informacoes">
                <h1>PEDIDOS</h1>
                <i>x</i>
            </div>
            <div class="itens"></div>
        </div>
    </div>
</template>
<style scoped>
.container{
    background-color: #2D2D2D;
    width: 60%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
}
.pedidos{
    width: 100%;
}
.informacoes{
    display: flex;
    padding: 43px 0;
    align-items: center;
    justify-content: center;
}
.informacoes h1{
    text-align: center;
    flex-grow: 1;
    margin: 0;
    color: white;
    font-size: 40px;
}
i{
    cursor: pointer;
    font-size: 60px;
    padding: 43px 0;
    margin-right: 49px;
    color: white;
}

</style>