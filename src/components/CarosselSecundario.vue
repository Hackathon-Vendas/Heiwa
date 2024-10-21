<script setup>

</script>

<template>
    <div class="container">
        <div class="carrossel">
            <img src="/public/yakisoba.png" alt="">
            <img src="/public/temakisalmao.png" alt="">
            <img src="/public/temakiatum.png" alt="">
            <img src="/public/urumaki.png" alt="">
            <img src="/public/petitgateau.png" alt="">
            <img src="/public/gyoza.png" alt="">
            <img src="/public/anmitsu.png" alt="">

        </div>
    </div>
</template>

<style scoped>

.container{
    overflow: hidden;
    height: 160px;
    margin-left: 15vh;
}
.carrossel{
    width: 86%;
    display: flex;
    margin-left: 57px ;
    margin: auto;
}
img{
    height: 160px;
    width: 343px;
    margin: 26px 0;
}

</style>