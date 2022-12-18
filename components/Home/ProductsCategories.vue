<!--
 * @Author: 王鑫
 * @Description: 
 * @Date: 2022-12-16 23:10:48
-->
<template>
  <div class="products-categories">
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

    <div class="content">
      <div class="show-item" v-for="(item, index) in itemList" :key="index">
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
</template>

<script lang="ts" setup>
const checked = ref(0);

const tabClick = (key: number) => {
  checked.value = key;
};

const itemList = [
  {
    url: '../../assets/images/index/productsCategories/1.png',
    title: 'MTB',
  },
  {
    url: '../../assets/images/index/productsCategories/2.png',
    title: 'Road',
  },
  {
    url: '../../assets/images/index/productsCategories/3.png',
    title: 'Casual',
  },
  {
    url: '../../assets/images/index/productsCategories/4.png',
    title: 'E-bike',
  },
  {
    url: '../../assets/images/index/productsCategories/5.png',
    title: 'Kids',
  },
];
</script>

<style scoped lang="scss">
.products-categories {
  overflow: hidden;

  .box-title {
    padding-top: 70px;
  }

  .tabs {
    display: flex;
    justify-content: center;
    .btn {
      width: 220px;
      height: 55px;
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
    width: 1920px;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    margin: 45px 0 75px 0;
    .show-item {
      width: 371px;
      height: 580px;
      text-align: center;
      background-color: #f9f9f9;
      position: relative;
      .product {
        width: 90%;
        transition: 0.5s;
      }
      .title {
        position: absolute;
        bottom: 135px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 50px;
        font-weight: bold;
      }
      .btn {
        position: absolute;
        bottom: 50px;
        left: 50%;
        transform: translateX(-50%);
        width: 168px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        font-weight: bold;
        border: 2px #000000 solid;
        .arrow {
          margin-left: 8px;
          width: 14px;
        }
      }
    }

    .show-item:hover {
      .product {
        width: 100%;
      }
    }
  }
}
</style>
