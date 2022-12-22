<!--
 * @Author: 王鑫
 * @Description: 
 * @Date: 2022-12-16 18:25:59
-->
<template>
  <transition :duration="duration">
    <div class="header-swiper container-fluid">
      <Header class="index-header" @show-dialog="showDialog" />
      <div class="index-swiper">
        <div class="swiper-container swiper">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(item, index) in imgList"
              :key="index"
            >
              <img :src="`${item}`" alt="" />
            </div>
          </div>
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
  </transition>
</template>

<script lang="ts" setup>
import Swiper, { Autoplay, Pagination } from 'swiper';

import 'swiper/swiper.scss';
Swiper.use([Autoplay, Pagination]);

interface item {
  imgUrl: string;
}
const duration = ref(0);

const imgList = [
  '/images/index/header/1.png',
  '/images/index/header/2.png',
  '/images/index/header/3.png',
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

const emit = defineEmits(['showDialog']);
const showDialog = () => {
  emit('showDialog', true);
};
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
    transform: translate3d(0, 0, 0);
    overflow: hidden;
    .swiper-slide {
      width: 100%;
      transform: translate3d(0, 0, 0);
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
        -moz-border-radius: 0;
        -webkit-border-radius: 0;
        background-color: #bef6ff;
        margin: 0 6px;
        margin-bottom: 1rem;
        display: inline-block;
        opacity: 0.1;
        filter: alpha(opacity=10);
        -moz-opacity: 0.1;
        -khtml-opacity: 0.1;
      }

      .swiper-pagination-bullet-active {
        opacity: 0.5;
        filter: alpha(opacity=50);
        -moz-opacity: 0.5;
        -khtml-opacity: 0.5;
      }
    }
  }

  .title {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%); /* for Chrome || Safari */
    -moz-transform: translateY(-50%); /* for Firefox */
    -ms-transform: translateY(-50%); /* for IE */
    -o-transform: translateY(-50%); /* for Opera */
    text-align: center;
    width: 100%;
    z-index: 99;
    width: 100%;
    color: #ffffff;
    .big-title {
      font-size: 5rem;
      text-align: center;
      font-weight: bold;
    }
    .small-title {
      font-size: 2.5rem;
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
