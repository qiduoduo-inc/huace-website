<!--
 * @Author: 王鑫
 * @Description: 
 * @Date: 2022-12-16 23:10:48
-->
<template>
  <transition :duration="duration">
    <div class="products-categories container-fluid">
      <div class="box-title">
        <p>PRODUCTS CATEGORIES</p>
      </div>
      <div class="tabs container">
        <div
          class="product-btn"
          :class="{ checked: checked === 0 }"
          @click="tabClick(0)"
        >
          <span>Cycling Helmets</span>
        </div>
        <div
          class="product-btn"
          :class="{ checked: checked === 1 }"
          @click="tabClick(1)"
        >
          <span>Ski Helmets</span>
        </div>
      </div>

      <div class="content container-fluid">
        <div class="row" v-show="checked === 0">
          <div
            class="show-item col"
            v-for="(item, index) in itemList"
            :key="index"
          >
            <img class="product" :src="item.url" alt="" />
            <p class="title">{{ item.title }}</p>
            <div class="product-btn">
              See details
              <img
                class="arrow"
                src="@/assets/images/index/tiers/arrow.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="row justify-content-md-center" v-show="checked === 1">
          <div class="col"></div>
          <div
            class="show-item col"
            v-for="(item, index) in itemList1"
            :key="index"
          >
            <img class="product" :src="item.url" alt="" />
            <p class="title">{{ item.title }}</p>
            <div class="product-btn">
              See details
              <img
                class="arrow"
                src="@/assets/images/index/tiers/arrow.png"
                alt=""
              />
            </div>
          </div>
          <div class="col"></div>
        </div>
      </div>
      <div class="phone-content container-fluid">
        <div class="swiper-container swiper">
          <div class="swiper-wrapper" v-show="checked === 0">
            <div
              class="swiper-slide"
              v-for="(item, index) in itemList"
              :key="index"
            >
              <img :src="item.url" alt="" />
              <p class="title">{{ item.title }}</p>
              <div class="product-btn">
                See details
                <img
                  class="arrow"
                  src="@/assets/images/index/tiers/arrow.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="swiper-wrapper" v-show="checked === 1">
            <div
              class="swiper-slide"
              v-for="(item, index) in itemList1"
              :key="index"
            >
              <img :src="item.url" alt="" />
              <p class="title">{{ item.title }}</p>
              <div class="product-btn">
                See details
                <img
                  class="arrow"
                  src="@/assets/images/index/tiers/arrow.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import Swiper, { Autoplay } from 'swiper';

import 'swiper/swiper.scss';
Swiper.use([Autoplay]);
const duration = ref(0);

const checked = ref(0);

const tabClick = (key: number) => {
  checked.value = key;
};

const itemList = ref([
  {
    url: '../../assets/images/index/products_categories/1.png',
    title: 'MTB',
  },
  {
    url: '../../assets/images/index/products_categories/2.png',
    title: 'Road',
  },
  {
    url: '../../assets/images/index/products_categories/3.png',
    title: 'Urban',
  },
  {
    url: '../../assets/images/index/products_categories/4.png',
    title: 'TT',
  },
  {
    url: '../../assets/images/index/products_categories/5.png',
    title: 'Kids',
  },
]);

const itemList1 = ref([
  {
    url: '../../assets/images/index/products_categories/1.jpg',
    title: 'SH-01',
  },
  {
    url: '../../assets/images/index/products_categories/3.jpg',
    title: 'SH-02',
  },
  {
    url: '../../assets/images/index/products_categories/5.jpg',
    title: 'SH-03',
  },
]);

onMounted(() => {
  const ss = new Swiper('.products-categories .phone-content .swiper', {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
});
</script>

<style scoped lang="scss">
.products-categories {
  overflow: hidden;
  .tabs {
    display: flex;
    justify-content: center;
    .product-btn {
      padding: 1.25rem 0;
      width: 20rem;
      height: 2rem;
      font-size: 1.25rem;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.1s;
      -moz-transition: all 0.1s; /* Firefox 4 */
      -webkit-transition: all 0.1s; /* Safari and Chrome */
      -o-transition: all 0.1s; /* Opera */
      margin: 0 1rem;
      border: 2px #ffffff solid;
      cursor: pointer;
    }

    .checked {
      border: 2px #000000 solid;
    }
  }

  .content {
    margin: 1rem 0 1.5rem 0;
    .show-item {
      width: 23.125rem;
      text-align: center;
      background-color: #f9f9f9;
      position: relative;
      margin: 0 0.5rem;
      padding-top: 2rem;
      .product {
        width: 100%;
        transform: scale(0.9);
        -webkit-transform: scale(0.9); /* for Chrome || Safari */
        -moz-transform: scale(0.9); /* for Firefox */
        -ms-transform: scale(0.9); /* for IE */
        -o-transform: scale(0.9); /* for Opera */
        transition: all 0.5s;
        -moz-transition: all 0.5s; /* Firefox 4 */
        -webkit-transition: all 0.5s; /* Safari and Chrome */
        -o-transition: all 0.5s; /* Opera */
      }
      .title {
        font-size: 3.125rem;
        font-weight: bold;
      }
      .product-btn {
        width: 10.5rem;
        height: 3.125rem;
        margin: 0 auto;
        margin-top: 1.6rem;
        margin-bottom: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        font-weight: bold;
        border: 2px #000000 solid;
        cursor: pointer;
        .arrow {
          margin-left: 0.5rem;
          width: 1rem;
        }
      }
    }

    .show-item:last-child {
      margin-right: 0;
    }

    .show-item:hover {
      .product {
        transform: scale(1);
      }
    }
  }
  .phone-content {
    display: none;
  }
}
@media only screen and (max-width: 1440px) {
  .products-categories {
    .content {
      .show-item {
        .title {
          font-size: 2.5rem;
        }
      }
    }
  }
}

@media only screen and (max-width: 1180px) {
  .products-categories {
    .content {
      .show-item {
        .title {
          font-size: 2rem;
        }
      }
    }
  }
}

@media only screen and (max-width: 750px) {
  .products-categories {
    .content {
      display: none;
    }

    .tabs {
      display: flex;
      justify-content: center;
      .product-btn {
        width: 20rem;
        height: 2rem;
        font-size: 1rem;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.1s;
        -moz-transition: all 0.1s; /* Firefox 4 */
        -webkit-transition: all 0.1s; /* Safari and Chrome */
        -o-transition: all 0.1s; /* Opera */
        margin: 0 1rem;
        border: 2px #ffffff solid;
        cursor: pointer;
      }

      .checked {
        border: 2px #000000 solid;
      }
    }

    .phone-content {
      margin-top: 1rem;
      display: block;
      transform: translate3d(0, 0, 0);
      overflow: hidden;
      .swiper-slide {
        width: 100%;
        height: 100%;
        background-color: #f9f9f9;
        transform: translate3d(0, 0, 0);
        text-align: center;
        position: relative;
        .title {
          font-size: 2rem;
          font-weight: bold;
          margin: 0 auto;
        }
        .product-btn {
          margin: 0 auto;
          margin-bottom: 5rem;
          width: 13rem;
          height: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1rem;
          font-weight: bold;
          border: 2px #000000 solid;
          .arrow {
            margin-left: 1rem;
            width: 1rem;
          }
        }
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
