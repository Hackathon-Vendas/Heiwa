<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
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
    <Swiper 
      :loop="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false
      }"
      :modules="modules"
      class="teste"
    >
      <SwiperSlide class="slide" v-for="(foto, index) in fotos" :key="index">
        <img :src="`/${foto}`" class="sushis" />
      </SwiperSlide>
    </Swiper>
</template>

<style>

.teste {
  height: 500px;
  width: 1150px;
  max-width: 100%;
  max-height: 100%;
  z-index: -1;
}

.sushis {
  height: 100%;
  width: 100%;
  object-fit: cover;
} 

.slide{
  margin-top: 40px;
  border-radius: 10px;
}
</style>