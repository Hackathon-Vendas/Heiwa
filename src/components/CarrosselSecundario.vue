<template>
    <swiper :slidesPerView="3.84" :modules="modules" class="meuSwiper   " grabCursor="true" :freeMode="true"
      :spaceBetween="-45" :breakpoints="breakpoints">
      <swiper-slide>
        <div class="item-slide">
          <img src="/anmitsu.png" alt="">
          <div class="title-slide">
            <p>Anmitsu</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="item-slide">
          <img src="/petitgateau.png" alt="">
          <div class="title-slide">
            <p>Petit Gateau</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="item-slide">
          <img src="/temakiatum.png" alt="">
          <div class="title-slide">
            <p>Temaki de Atum</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="item-slide">
          <img src="/temakisalmao.png" alt="">
          <div class="title-slide">
            <p>Temaki de Salmao</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="item-slide">
          <img src="/urumaki.png" alt="">
          <div class="title-slide">
            <p>Urumaki</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="item-slide">
          <img src="/gyoza.png" alt="">
          <div class="title-slide">
            <p>Gyoza</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="item-slide">
          <img src="/yakisoba.png" alt="">
          <div class="title-slide">
            <p>Yakisoba</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </template>
  <script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  
  import 'swiper/css';
  const breakpoints = {
    724: {
      slidesPerView: 2.2,
      spaceBetween: 60
    },
    770: {
      slidesPerView: 2.2,
      spaceBetween: 60
    },
    820: {
      slidesPerView: 2.09,
      spaceBetween: 0
    },
    910: {
      slidesPerView: 2.3,
      spaceBetween: -5
    },
    960: {
      slidesPerView: 2.6,
      spaceBetween: -15
    },
    1040: {
      slidesPerView: 2.8,
      spaceBetween: -15
    },
    1230: {
      slidesPerView: 3.09,
      spaceBetween: -15
    },
    1240: {
      slidesPerView: 3.09,
      spaceBetween: -45
  
    },
    1305: {
      slidesPerView: 3.2,
      spaceBetween: -45
  
    },
  
    1365: {
      slidesPerView: 3.4,
      spaceBetween: -45
  
    },
    1460: {
      slidesPerView: 3.84,
      spaceBetween: -45
    }
  };
  
  </script>
  
  <style scoped>
  *{
    font-family: "Inter", sans-serif;
  }
  .swiper { 
    margin-left: 230px; 
    margin-top: 26px;
    margin-bottom: 26px
  }
  
  .swiper-slide {
    display: flex;
    justify-content: center;
    width: 86%;
  }
  
  
  .title-slide {
    position: relative;
    width: 80%;
    margin-left: 10%;
    /* margin: 0 auto; */
    z-index: 10;
  }
  
  .item-slide p {
    text-shadow: 
          -1px -1px 0 black,  
          1px -1px 0 black,
          -1px 1px 0 black,
          1px 1px 0 black; 
    position: relative;
    top: -58px;
    margin-left: 7%;
    color: white;
    font-size: 22px;
    font-weight: bold;
  
  }
  
  .swiper-slide img {
    display: flex;
    height: 160px;
    width: 343px;
    object-fit: cover;
  
  }
  </style>