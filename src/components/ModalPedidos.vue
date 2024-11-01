<script setup>

</script>
<template>
    <div class="container">
        <div class="pedidos">
            <div class="informacoes">
                <h1>PEDIDOS</h1>
                <i>x</i>
            </div>
            <div class="itens">
                <div class="item-1">
                    <p class="quantidade">1X</p>
                    <p class="item">Água</p>
                    <p class="valor">7,99</p>
                    <p class="botaoExcluir"><img src="/public/excluir.png" alt=""></p>
                </div>
                <div class="item-1">
                    <p class="quantidade">1X</p>
                    <p class="item">Água</p>
                    <p class="valor">7,99</p>
                    <p class="botaoExcluir"><img src="/public/excluir.png" alt=""></p>
                </div>
                <div class="item-1">
                    <p class="quantidade">1X</p>
                    <p class="item">Água</p>
                    <p class="valor">7,99</p>
                    <p class="botaoExcluir"><img src="/public/excluir.png" alt=""></p>
                </div>
                <div class="item-1">
                    <p class="quantidade">1X</p>
                    <p class="item">Água</p>
                    <p class="valor">7,99</p>
                    <p class="botaoExcluir"><img src="/public/excluir.png" alt=""></p>
                </div>
                <div class="item-1">
                    <p class="quantidade">1X</p>
                    <p class="item">Água</p>
                    <p class="valor">7,99</p>
                    <p class="botaoExcluir"><img src="/public/excluir.png" alt=""></p>
                </div>
                <div class="item-1">
                    <p class="quantidade">1X</p>
                    <p class="item">Água</p>
                    <p class="valor">7,99</p>
                    <p class="botaoExcluir"><img src="/public/excluir.png" alt=""></p>
                </div>
                <div class="item-1">
                    <p class="quantidade">1X</p>
                    <p class="item">Água</p>
                    <p class="valor">7,99</p>
                    <p class="botaoExcluir"><img src="/public/excluir.png" alt=""></p>
                </div>
            </div>
            <div class="pedidoUsuario">
                <div class="infoPedido">
                    <h3>TOTAL</h3>
                    <h3>R$835,10</h3>
                </div>
                <div class="botoesPedido">
                    <button class="finalizarPedido">FINALIZAR PEDIDO</button>
                    <button class="pedirConta">PEDIR CONTA</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.container{
    background-color: #2D2D2D;
    width: 65%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
}
.pedidos{
    width: 100%;
    height: 100%;
}
.informacoes{
    display: flex;
    align-items: center;
    justify-content: center;
}
.informacoes h1{
    text-align: center;
    flex-grow: 1;
    margin: 43px 0;
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
.itens{
    display: flex;
    flex-direction: column;
    width: 89%;
    margin: auto;
    height: 20rem;
    overflow-y: scroll;
}
.itens::-webkit-scrollbar{
    display: none;
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
}
.quantidade{
    font-size: 30px;
    padding-left: 30px;
}
.item{
    font-size: 20px;
    padding-left: 30px;
    padding-right: 459px;
}
.valor{
    font-size: 25px;
    padding-right: 34px;
    text-align: center;
}
.botaoExcluir{
   padding-right: 17px;
   text-align: center;
   cursor: pointer;
}
.infoPedido{
    display: flex;
    justify-content: space-between;
    text-align: center;
}
</style>