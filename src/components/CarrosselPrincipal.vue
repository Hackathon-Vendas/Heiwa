<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Autoplay } from 'swiper/modules';

const fotos = [
  "img1.svg",
  "img2.svg",
  "img3.svg"
];

const modules = [Autoplay];

</script>

<template>
    <Swiper 
      :loop="true"
      :allowTouchMove="false"
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
  height: 520px;
  width: 97%;
  border-radius: 8px;
}

.sushis {
  height: 100%;
  width: 100%;
  object-fit: cover;
  margin-top: 10px; 
  border-radius: 8px;
} 

</style>