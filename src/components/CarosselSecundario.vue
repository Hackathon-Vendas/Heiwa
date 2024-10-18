<script setup>

</script>

<template>
    <div class="carossel">
        <div class="container" id="img">
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

.carossel{
    overflow: hidden;
    height: 160px;
    width: 95%;
    margin: auto;

}
.container{
    display: flex;
    margin-left: 250px ;
}
img{
    object-fit: cover;
    height: 160px;
    width: 343px;
}

</style>