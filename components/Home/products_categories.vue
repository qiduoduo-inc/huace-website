<!--
 * @Author: 王鑫
 * @Description: 
 * @Date: 2022-12-16 23:10:48
-->
<template>
  <div class="products-categories container-fluid">
    <div class="box-title">
      <p>PRODUCTS CATEGORIES</p>
    </div>
    <div class="tabs">
      <div class="btn" :class="{ checked: checked === 0 }" @click="tabClick(0)">
        <span>Cycling Helmets</span>
      </div>
      <div class="btn" :class="{ checked: checked === 1 }" @click="tabClick(1)">
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
          <div class="btn">
            See details
            <img
              class="arrow"
              src="@/assets/images/index/tiers/arrow.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="row" v-show="checked === 1">
        <div
          class="show-item col"
          v-for="(item, index) in itemList1"
          :key="index"
        >
          <img class="product" :src="item.url" alt="" />
          <p class="title">{{ item.title }}</p>
          <div class="btn">
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
    <div class="phone-content">
      <div class="swiper-container swiper">
        <transition :duration="duration">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(item, index) in swiperList"
              :key="index"
            >
              <img :src="item.url" alt="" />
              <p class="title">{{ item.title }}</p>
              <div class="btn">
                See details
                <img
                  class="arrow"
                  src="@/assets/images/index/tiers/arrow.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Swiper, { Autoplay, Pagination } from 'swiper';

import 'swiper/swiper.scss';
Swiper.use([Autoplay, Pagination]);
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
    title: 'Casual',
  },
  {
    url: '../../assets/images/index/products_categories/4.png',
    title: 'E-bike',
  },
  {
    url: '../../assets/images/index/products_categories/5.png',
    title: 'Kids',
  },
]);

const itemList1 = ref([
  {
    url: '../../assets/images/index/products_categories/1.png',
    title: '1',
  },
  {
    url: '../../assets/images/index/products_categories/2.png',
    title: '2',
  },
  {
    url: '../../assets/images/index/products_categories/3.png',
    title: '3',
  },
  {
    url: '../../assets/images/index/products_categories/4.png',
    title: '4',
  },
  {
    url: '../../assets/images/index/products_categories/5.png',
    title: '5',
  },
]);

const swiperList = computed(() => {
  return checked.value === 0 ? itemList.value : itemList1.value;
});

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
    .btn {
      width: 20rem;
      height: 2rem;
      font-size: 20;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: 0.5s;
    }

    .checked {
      border: 2px #000000 solid;
    }
  }

  .content {
    margin: 1rem 0 1.5rem 0;
    .show-item {
      height: 28rem;
      text-align: center;
      background-color: #f9f9f9;
      position: relative;
      margin-right: 1rem;
      padding-top: 2rem;
      .product {
        width: 90%;
        transition: 0.5s;
      }
      .title {
        position: absolute;
        bottom: 25%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 2rem;
        font-weight: bold;
      }
      .btn {
        position: absolute;
        bottom: 10%;
        left: 50%;
        transform: translateX(-50%);
        width: 10rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        font-weight: bold;
        border: 2px #000000 solid;
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
        width: 100%;
      }
    }
  }
  .phone-content {
    display: none;
  }
}

@media only screen and (max-width: 750px) {
  .products-categories {
    .content {
      display: none;
    }

    .phone-content {
      margin-top: 1rem;
      display: block;
      .swiper-slide {
        height: 38rem;
        background-color: #f9f9f9;
        text-align: center;
        position: relative;
        .title {
          position: absolute;
          bottom: 6rem;
          left: 50%;
          transform: translateX(-50%);
          font-size: 3rem;
          font-weight: bold;
          margin: 0 auto;
        }
        .btn {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          margin: 0 auto;
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
