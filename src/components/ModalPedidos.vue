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
                <table>
                    <tr>
                        <td class="quantidade">1X</td>
                        <td class="item">Água</td>
                        <td class="valor">7,99</td>
                        <td class="botaoExcluir"><img src="/public/excluir.png" alt=""></td>
                    </tr>
                </table>
            </div>
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
.itens{
    display: flex;
    justify-content: center;
    width: 89%;
    margin: auto;
}
table{
    width: 100%;
    border-collapse: collapse; 
}
tr{
    height: 84px;
    width: 846px;
    border-radius: 20px;
    background-color: #6B6B6B;
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
</style>