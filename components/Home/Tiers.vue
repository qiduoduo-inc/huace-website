<!--
 * @Author: 王鑫
 * @Description: 
 * @Date: 2022-12-16 20:43:21
-->
<template>
  <div class="tiers container">
    <div class="box-title">
      <p>BE WITH THE TOP TIERS, TRUST IN HUACE</p>
    </div>
    <div class="content">
      <div class="row">
        <div
          class="col-4 col-md-2 tiers-item"
          v-for="(item, index) in imgList"
          :key="index"
        >
          <img :src="item" alt="" />
        </div>
      </div>
    </div>
    <div class="join-us">
      <a-button class="join-us-btn" @click="showDialog"
        >Join Us <img src="@/assets/images/index/tiers/arrow.png" alt=""
      /></a-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const imgList = [
  '../../assets/images/index/tiers/1.png',
  '../../assets/images/index/tiers/2.png',
  '../../assets/images/index/tiers/3.png',
  '../../assets/images/index/tiers/4.png',
  '../../assets/images/index/tiers/5.png',
  '../../assets/images/index/tiers/6.png',
  '../../assets/images/index/tiers/7.png',
  '../../assets/images/index/tiers/8.png',
  '../../assets/images/index/tiers/9.png',
  '../../assets/images/index/tiers/10.png',
  '../../assets/images/index/tiers/11.png',
  '../../assets/images/index/tiers/12.png',
];

const emit = defineEmits(['showDialog']);
const showDialog = () => {
  emit('showDialog', true);
};
</script>

<style scoped lang="scss">
.tiers {
  overflow: hidden;
  .content {
    margin: 0 auto;
    .tiers-item {
      padding: 2.75rem 4.125rem;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
      }
    }

    .tiers-item:first-child {
      background-color: #f4f4f4;
    }
    .tiers-item:nth-child(2) {
      background-color: #f9f9f9;
    }
    .tiers-item:nth-child(3) {
      background-color: #f4f4f4;
    }
    .tiers-item:nth-child(4) {
      background-color: #f9f9f9;
    }
    .tiers-item:nth-child(5) {
      background-color: #f4f4f4;
    }
    .tiers-item:nth-child(6) {
      background-color: #f9f9f9;
    }
    .tiers-item:nth-child(7) {
      background-color: #f9f9f9;
    }
    .tiers-item:nth-child(8) {
      background-color: #f4f4f4;
    }
    .tiers-item:nth-child(9) {
      background-color: #f9f9f9;
    }
    .tiers-item:nth-child(10) {
      background-color: #f4f4f4;
    }
    .tiers-item:nth-child(11) {
      background-color: #f9f9f9;
    }
    .tiers-item:nth-child(12) {
      background-color: #f4f4f4;
    }

    .tiers-item:hover {
      background-color: rgba($color: #999999, $alpha: 0.7);
    }
  }

  .join-us {
    text-align: center;
    .join-us-btn {
      width: 8rem;
      height: 2.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.25rem;
      margin: 0 auto;
      border: 2px #000000 solid;
      margin-top: 1rem;
      margin-bottom: 2rem;
      img {
        width: 1rem;
        height: 0.8rem;
        margin-left: 0.8rem;
      }
    }
  }
}
@media only screen and (min-width: 1360px) and (max-width: 1200px) {
  .tiers {
    .content {
      .tiers-item {
        padding: 1.3875rem 2.0675rem;
      }
    }
  }
}

@media only screen and (max-width: 750px) {
  .tiers {
    .content {
      .tiers-item {
        padding: 1.3875rem 2.0675rem;
      }
    }
  }
}
</style>
