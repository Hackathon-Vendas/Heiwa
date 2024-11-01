<template>
    <swiper
      :slidesPerView="3.84"
      :modules="modules"
      class="mySwiper"
      grabCursor="true"
      :freeMode="true"
      :spaceBetween="-45"
      :breakpoints="breakpoints"
    >
      <swiper-slide>
        <div class="slide-item">
          <img src="/public/anmitsu.png" alt="">
          <div class="slide-title">
            <p>Anmitsu</p>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide><img src="/public/petitgateau.png" alt=""></swiper-slide><swiper-slide><img src="/public/temakiatum.png" alt=""></swiper-slide>
      <swiper-slide><img src="/public/temakisalmao.png" alt=""></swiper-slide><swiper-slide><img src="/public/urumaki.png" alt=""></swiper-slide>
      <swiper-slide><img src="/public/gyoza.png" alt=""></swiper-slide><swiper-slide><img src="/public/yakisoba.png" alt=""></swiper-slide>
    </swiper>
  </template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
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
    1460:{
        slidesPerView: 3.84,
        spaceBetween:-45
    }
    };

</script>
  <style scoped>
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


.slide-title {
  background-color: #00000070;
  position: relative;
  width: 80%;
  margin-left: 7%;
 /* margin: 0 auto; */ 
  z-index: 10;
}

.slide-item p {
  margin-top: -15%;
  margin-left: 5%;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;

}

.swiper-slide img {
    display: flex;
    height: 160px;
    width: 343px;
  object-fit: cover;
  
}

</style>
  