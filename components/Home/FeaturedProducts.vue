<!--
 * @Author: 王鑫
 * @Description: 
 * @Date: 2022-12-16 22:09:16
-->
<template>
  <div class="feature-products">
    <div class="box-title">
      <p>FEATURED PRODUCTS</p>
    </div>
    <div class="content">
      <div
        v-for="(item, index) in itemList"
        :key="index"
        class="show-item"
        :class="{ 'focus-item': focus === index }"
        @mouseenter="enter(index)"
      >
        <img class="product" :src="item.url" alt="" />
        <p class="title">{{ item.title }}</p>
        <p class="keywords">{{ item.keywords }}</p>
        <p class="introduction">{{ item.introduction }}</p>
        <img
          class="arrow"
          src="@/assets/images/index/featuredProducts/arrow.png"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const itemList = [
  {
    url: '../../assets/images/index/featuredProducts/1.png',
    title: 'The Name',
    introduction:
      'Characteristic keywords With a combined 10+ years of experience, Huace Sports Helmethas the working knowledge',
    keywords: 'Characteristic keywords',
  },
  {
    url: '../../assets/images/index/featuredProducts/2.png',
    title: 'The Name',
    introduction:
      'Characteristic keywords With a combined 10+ years of experience, Huace Sports Helmethas the working knowledge',
    keywords: 'Characteristic keywords',
  },
  {
    url: '../../assets/images/index/featuredProducts/3.png',
    title: 'The Name',
    introduction:
      'Characteristic keywords With a combined 10+ years of experience, Huace Sports Helmethas the working knowledge',
    keywords: 'Characteristic keywords',
  },
  {
    url: '../../assets/images/index/featuredProducts/4.png',
    title: 'The Name',
    introduction:
      'Characteristic keywords With a combined 10+ years of experience, Huace Sports Helmethas the working knowledge',
    keywords: 'Characteristic keywords',
  },
];

const focus = ref(0);
const enter = (key: number) => {
  focus.value = key;
};
</script>

<style scoped lang="scss">
.feature-products {
  background: linear-gradient(to right, #e2e2e2, #ffffff, #eef0f1);
  padding-bottom: 55px;
  overflow: hidden;
  
  .box-title {
    padding-top: 80px;
  }

  .content {
    width: 1720px;
    margin: 0 auto;
    display: flex;
    .show-item {
      width: 344px;
      height: 688px;
      background: linear-gradient(to right bottom, #9f9f9f, #3e3d3d);
      position: relative;
      color: #ffffff;
      overflow: hidden;
      transition: 0.5s;
      .product {
        position: absolute;
        right: 0;
        top: 140px;
        width: 475px;
        height: 475px;
      }

      .title {
        font-size: 50px;
        font-weight: bold;
        position: absolute;
        top: 75px;
        width: 100%;
        text-align: center;
      }

      .keywords {
        font-size: 20px;
        position: absolute;
        bottom: 165px;
        width: 100%;
        text-align: center;
      }

      .arrow {
        width: 40px;
        height: 40px;
        position: absolute;
        bottom: 70px;
        right: 50%;
        transform: translateX(50%);
      }

      .introduction {
        display: none;
      }
    }

    .focus-item {
      width: 688px;
      height: 688px;
      .product {
        position: absolute;
        right: 50%;
        transform: translateX(50%);
        top: 140px;
        width: 475px;
        height: 475px;
      }

      .title {
        font-size: 50px;
        font-weight: bold;
        position: absolute;
        top: 75px;
        left: 90px;
        text-align: left;
      }

      .keywords {
        display: none;
      }

      .arrow {
        display: none;
      }

      .introduction {
        display: block;
        width: 300px;
        font-size: 20px;
        position: absolute;
        bottom: 70px;
        left: 90px;
      }
    }
  }
}
</style>
