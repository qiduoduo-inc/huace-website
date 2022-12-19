<!--
 * @Author: 王鑫
 * @Description: patent-wall
 * @Date: 2022-12-17 09:08:31
-->
<template>
  <div class="patent-wall container-fluid">
    <div class="bg container-fludid">
      <img src="@/assets/images/index/patent_wall/2.png" alt="" />
    </div>
    <div class="box-title">
      <p>PATENT WALL</p>
    </div>
    <div class="content container wow animate__fadeInUp" data-wow-duration="2s">
      <img src="@/assets/images/index/patent_wall/1.png" alt="" />
    </div>
    <div class="phone-content">
      <img class="img" src="@/assets/images/index/patent_wall/1.png" alt="" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Swiper, { Autoplay, Pagination } from 'swiper';

import 'swiper/swiper.scss';
Swiper.use([Autoplay, Pagination]);
const duration = ref(0);

const itemList = [
  '../../assets/images/index/patent_wall/3.png',
  '../../assets/images/index/patent_wall/3.png',
  '../../assets/images/index/patent_wall/3.png',
  '../../assets/images/index/patent_wall/3.png',
  '../../assets/images/index/patent_wall/3.png',
  '../../assets/images/index/patent_wall/3.png',
  '../../assets/images/index/patent_wall/3.png',
];

onMounted(() => {
  const ss = new Swiper('.patent-wall .phone-content .swiper', {
    slidesPerView: 4,
    loop: true,
    loopedSlides: 6,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
});
</script>

<style scoped lang="scss">
.patent-wall {
  background: linear-gradient(to right, rgba(0, 0, 0, 65%), rgba(0, 0, 0, 76%));
  position: relative;
  overflow: hidden;

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    img {
      width: 100%;
    }
  }
  .box-title {
    color: #ffffff;
  }

  .content {
    margin: 0 auto;
    padding: 1.5rem 0 2rem;
    z-index: 9;
    img {
      width: 100%;
    }
  }

  .phone-content {
    display: none;
  }
}
@media only screen and (max-width: 750px) {
  .patent-wall {
    background-size: 100% 100%;
    .content {
      display: none !important;
    }

    .phone-content {
      display: flex;
      height: 22rem;
      overflow-x: auto;
      margin-bottom: 1rem;
      img {
        height: 100%;
      }
    }
  }
}
</style>
