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
        disableOnInteraction: false,
      }"
      :slidesPerView="1"
      :modules="modules"
      class="modulos"
    >
      <SwiperSlide class="slide" v-for="(foto, index) in fotos" :key="index">
        <img :src="`/${foto}`" class="sushis" />
      </SwiperSlide>
    </Swiper>
</template>

<style>

.modulos{
  height: 500px;
  width: 1150px;
  max-width: 100%;
  max-height: 100%;
  z-index: -1;
  border-radius: 8px;
}

.sushis {
  height: 100%;
  width: 100%;
  object-fit: cover;
  margin-right: 20px;
} 

</style>