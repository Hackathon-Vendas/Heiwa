<template>
    <swiper
      :slidesPerView="3"
      :spaceBetween="30"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide><img src="/public/anmitsu.png" alt=""></swiper-slide>
      <swiper-slide><img src="/public/gyoza.png" alt=""></swiper-slide>
      <swiper-slide><img src="/public/petitgateau.png" alt=""></swiper-slide>
      <swiper-slide><img src="/public/temakiatum.png" alt=""></swiper-slide>
      <swiper-slide><img src="/public/temakisalmao.png" alt=""></swiper-slide>
      <swiper-slide><img src="/public/urumaki.png" alt=""></swiper-slide>
      <swiper-slide><img src="/public/yakisoba.png" alt=""></swiper-slide>
    </swiper>
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/pagination';
  
  
    // import required modules
    import { Pagination } from 'swiper/modules';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [Pagination],
        };
      },
    };
  </script>
  