<script setup>
import "swiper/css";
import { Autoplay } from 'swiper/modules';

const fotos = [
  "img1.jpeg",
  "img2.jpg",
  "img3.jpg",
];

const modules = [Autoplay];

</script>

<template>
  <main class="container">
    <Swiper
      :loop="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false
      }"
      :modules="modules"
      class="mySwiper"
    >
      <SwiperSlide v-for="(foto, index) in fotos" :key="index">
        <img :src="`/${foto}`" class="sushis" />
      </SwiperSlide>
    </Swiper>
  </main>
</template>

<style>
.swiper {
  height: 50vh;
  width: 50vh;
}
.sushis {
  height: 50vh;
  width: 50vh;
}
</style>