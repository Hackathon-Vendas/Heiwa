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
      <swiper-slide><img src="/public/anmitsu.png" alt=""></swiper-slide>
      <swiper-slide><img src="/public/petitgateau.png" alt=""></swiper-slide><swiper-slide><img src="/public/temakiatum.png" alt=""></swiper-slide>
      <swiper-slide><img src="/public/temakisalmao.png" alt=""></swiper-slide><swiper-slide><img src="/public/urumaki.png" alt=""></swiper-slide>
      <swiper-slide><img src="/public/gyoza.png" alt=""></swiper-slide><swiper-slide><img src="/public/yakisoba.png" alt=""></swiper-slide>
    </swiper>
  </template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

// Import required modules
import { Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const breakpoints = {
      // when window width is >= 640px
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

    return {
      modules: [Navigation],
      breakpoints, // Retorna o objeto breakpoints
    };
  },
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

.swiper-slide img {
    display: flex;
    height: 160px;
    width: 343px;
  object-fit: cover;
  
}

</style>
  