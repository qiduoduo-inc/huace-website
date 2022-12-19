<!--
 * @Author: 王鑫
 * @Description: 
 * @Date: 2022-12-16 18:25:59
-->
<template>
  <div class="header-swiper container-fluid">
    <Header class="index-header" />
    <div class="index-swiper">
      <div class="swiper-container swiper">
        <transition :duration="duration">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(item, index) in imgList"
              :key="index"
            >
              <img :src="item" alt="" />
            </div>
          </div>
        </transition>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <div class="title">
        <p class="big-title">Huace Sports Helmet OEM & ODM</p>
        <p class="small-title">Professional & Satisfaction</p>
        <p class="small-title">SINCE 2013</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from '../header.vue';
import Swiper, { Autoplay, Pagination } from 'swiper';

import 'swiper/swiper.scss';
Swiper.use([Autoplay, Pagination]);

interface item {
  imgUrl: string;
}
const duration = ref(0);

const imgList = [
  '../../assets/images/index/header/1.png',
  '../../assets/images/index/header/2.png',
  '../../assets/images/index/header/3.png',
];

onMounted(() => {
  const ss = new Swiper('.index-swiper .swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });
});
</script>

<style scoped lang="scss">
.header-swiper {
  width: 100%;
  position: relative;

  .index-header::v-deep {
    position: absolute;
    width: 100%;
    top: 0;
    z-index: 9;
  }
  .index-swiper {
    position: relative;
    .swiper-slide {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .swiper-pagination::v-deep {
      position: absolute;
      bottom: 0.1rem;
      left: 0;
      width: 100%;
      z-index: 99;
      text-align: center;
      .swiper-pagination-bullet {
        color: #fff;
        text-align: center;
        cursor: pointer;
        width: 8px;
        height: 8px;
        border-radius: 8px;
        background-color: #bef6ff;
        margin: 0 6px;
        margin-bottom: 1rem;
        display: inline-block;
        opacity: 0.1;
      }

      .swiper-pagination-bullet-active {
        opacity: 0.5;
      }
    }
  }

  .title {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    width: 100%;
    z-index: 99;
    width: 100%;
    color: #ffffff;
    .big-title {
      font-size: 3rem;
      text-align: center;
      font-weight: bold;
    }
    .small-title {
      font-size: 1.5rem;
      margin: 0 auto;
    }
  }
}

@media only screen and (max-width: 750px) {
  .header-swiper {
    .index-header::v-deep {
      position: static;
    }
    .title {
      .big-title {
        font-size: 1rem;
      }
      .small-title {
        font-size: 0.8rem;
      }
    }
  }
}
</style>
