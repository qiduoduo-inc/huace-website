<!--
 * @Author: 王鑫
 * @Description: 
 * @Date: 2022-12-16 22:09:16
-->
<template>
  <div class="feature-products container-fluid">
    <div class="box-title">
      <p>FEATURED PRODUCTS</p>
    </div>
    <div class="content container">
      <div
        v-for="(item, index) in itemList"
        :key="index"
        class="show-item"
        :class="{ 'focus-item': focus === index }"
        @mouseenter="enter(index)"
      >
        <img class="product" :src="`${item.url}`" alt="" />
        <p class="title">{{ item.title }}</p>
        <p class="keywords">{{ item.keywords }}</p>
        <div class="introduction">
          <p v-for="(p, i) in item.introduction">{{ p }}</p>
        </div>
        <img
          class="arrow"
          src="@/assets/images/index/featured_products/arrow.png"
        />
      </div>
    </div>
    <div class="phone-content container-fluid">
      <div class="swiper-container swiper">
        <transition :duration="duration">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(item, index) in itemList"
              :key="index"
            >
              <p class="title">{{ item.title }}</p>
              <img :src="`${item.url}`" alt="" />
              <div class="introduction">
                <p v-for="(p, i) in item.introduction">{{ p }}</p>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Swiper, { Autoplay } from 'swiper';

import 'swiper/swiper.scss';
Swiper.use([Autoplay]);
const duration = ref(0);

const itemList = [
  {
    url: 'assets/images/index/featured_products/1.png',
    title: 'HC-072',
    introduction: [
      'Removable/3 position adjustable visor',
      'Removable, Washable And Antibacterial Pads',
      '3D fit system',
      'Fashion Design',
      'ITW buckles',
    ],
    keywords: 'MTB Helemt',
  },
  {
    url: 'assets/images/index/featured_products/2.png',
    title: 'SH-03',
    introduction: [
      'Washable And Antibacterial Pads',
      'Fashion Design',
      'lightweight',
    ],
    keywords: 'Skiing Helmet',
  },
  {
    url: 'assets/images/index/featured_products/3.png',
    title: 'HC-69',
    introduction: [
      'Removable, Washable And Antibacterial Pads',
      '3D Fit System',
      'Fashion Design',
      'Aerodynamic design',
      'lightweight',
    ],
    keywords: 'Road Helmet',
  },
  {
    url: 'assets/images/index/featured_products/4.png',
    title: 'HC-059',
    introduction: [
      'Removable, washable and antibacterial pads',
      'Fashion design',
      'lightweight',
    ],
    keywords: 'Kids Helmet',
  },
];

const focus = ref(0);
const enter = (key: number) => {
  focus.value = key;
};

onMounted(() => {
  const ss = new Swiper('.feature-products .phone-content .swiper', {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
});
</script>

<style scoped lang="scss">
.feature-products {
  background: linear-gradient(to right, #e2e2e2, #ffffff, #eef0f1);
  background: -webkit-linear-gradient(to right, #e2e2e2, #ffffff, #eef0f1);
  background: -o-linear-gradient(to right, #e2e2e2, #ffffff, #eef0f1);
  background: -ms-linear-gradient(to right, #e2e2e2, #ffffff, #eef0f1);
  background: -moz-linear-gradient(to right, #e2e2e2, #ffffff, #eef0f1);
  padding-bottom: 55px;

  .content {
    margin: 0 auto;
    display: flex;
    .show-item {
      width: 25%;
      height: 43rem;
      background: linear-gradient(to right bottom, #9f9f9f, #3e3d3d);
      background: -webkit-linear-gradient(to right bottom, #9f9f9f, #3e3d3d);
      background: -o-linear-gradient(to right bottom, #9f9f9f, #3e3d3d);
      background: -ms-linear-gradient(to right bottom, #9f9f9f, #3e3d3d);
      background: -moz-linear-gradient(to right bottom, #9f9f9f, #3e3d3d);
      position: relative;
      color: #ffffff;
      overflow: hidden;
      transition: all 0.7s ease;
      -moz-transition: all 0.7s ease; /* Firefox 4 */
      -webkit-transition: all 0.7s ease; /* Safari and Chrome */
      -o-transition: all 0.7s ease; /* Opera */
      cursor: pointer;
      .product {
        position: absolute;
        left: 0;
        transform: translateX(-45%);
        -webkit-transform: translateX(-45%); /* for Chrome || Safari */
        -moz-transform: translateX(-45%); /* for Firefox */
        -ms-transform: translateX(-45%); /* for IE */
        -o-transform: translateX(-45%); /* for Opera */
        top: 5.25rem;
        width: 25rem;
        height: 25rem;
        transition: translate, width, height, top, left 1s;
        -moz-transition: translate, width, height, top, left 1s; /* Firefox 4 */
        -webkit-transition: translate, width, height, top, left 1s; /* Safari and Chrome */
        -o-transition: translate, width, height, top, left 1s; /* Opera */
      }

      .title {
        font-size: 1.25rem;
        font-weight: bold;
        position: absolute;
        top: 6%;
        left: 10%;
        width: 100%;
        text-align: left;
        transition: top, font-size 1s;
        -moz-transition: top, font-size 1s; /* Firefox 4 */
        -webkit-transition: top, font-size 1s; /* Safari and Chrome */
        -o-transition: top, font-size 1s; /* Opera */
      }

      .keywords {
        font-size: 1rem;
        position: absolute;
        bottom: 20%;
        width: 100%;
        text-align: center;
      }

      .arrow {
        width: 2rem;
        height: 2rem;
        position: absolute;
        bottom: 70px;
        right: 50%;
        transform: translateX(50%);
        -webkit-transform: translateX(50%); /* for Chrome || Safari */
        -moz-transform: translateX(50%); /* for Firefox */
        -ms-transform: translateX(50%); /* for IE */
        -o-transform: translateX(50%); /* for Opera */
      }

      .introduction {
        display: none;
      }
    }

    .focus-item {
      width: 40%;
      height: 43rem;
      transition: all 0.7s ease;
      -moz-transition: all 0.7s ease; /* Firefox 4 */
      -webkit-transition: all 0.7s ease; /* Safari and Chrome */
      -o-transition: all 0.7s ease; /* Opera */
      .product {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        -webkit-transform: translateX(-50%); /* for Chrome || Safari */
        -moz-transform: translateX(-50%); /* for Firefox */
        -ms-transform: translateX(-50%); /* for IE */
        -o-transform: translateX(-50%); /* for Opera */
        top: 5.25rem;
        width: 25rem;
        height: 25rem;
        transition: translate, width, height, top 1s;
        -moz-transition: translate, width, height, top 1s; /* Firefox 4 */
        -webkit-transition: translate, width, height, top 1s; /* Safari and Chrome */
        -o-transition: translate, width, height, top 1s; /* Opera */
      }

      .title {
        font-size: 2.5rem;
        font-weight: bold;
        position: absolute;
        white-space: nowrap;
        top: 3%;
        left: 10%;
        text-align: left;
        transition: top, font-size 0.1s;
        -moz-transition: top, font-size 0.1s; /* Firefox 4 */
        -webkit-transition: top, font-size 0.1s; /* Safari and Chrome */
        -o-transition: top, font-size 0.1s; /* Opera */
      }

      .keywords {
        display: none;
      }

      .arrow {
        display: none;
      }

      .introduction {
        display: block;
        width: 20rem;
        font-size: 1.11rem;
        position: absolute;
        bottom: 10%;
        left: 15%;
        white-space: nowrap;
      }
    }
  }

  .phone-content {
    display: none;
  }
}

@media only screen and (max-width: 900px) {
  .feature-products {
    .content {
      .focus-item {
        .introduction {
          width: 12rem;
        }
      }
    }
  }
}

@media only screen and (max-width: 750px) {
  .feature-products {
    padding-bottom: 0;
    .content {
      display: none;
    }
    .phone-content {
      display: block;
      transform: translate3d(0, 0, 0);
      overflow: hidden;
      .swiper-slide {
        transform: translate3d(0, 0, 0);
        width: 100%;
        background: linear-gradient(to right bottom, #9f9f9f, #3e3d3d);
        background: -webkit-linear-gradient(to right bottom, #9f9f9f, #3e3d3d);
        background: -o-linear-gradient(to right bottom, #9f9f9f, #3e3d3d);
        background: -ms-linear-gradient(to right bottom, #9f9f9f, #3e3d3d);
        background: -moz-linear-gradient(to right bottom, #9f9f9f, #3e3d3d);
        position: relative;
        color: #ffffff;
        .title {
          font-size: 2rem;
          position: absolute;
          top: 2rem;
          left: 2rem;
        }
        .introduction {
          font-size: 0.8rem;
          position: absolute;
          bottom: 2rem;
          left: 2rem;
          width: 60%;
        }
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
