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
        <div class="col-6 col-md-2" v-for="(item, index) in imgList" :key="index">
          <img :src="item" alt="" />
        </div>
      </div>
    </div>
    <div class="join-us">
      <a-button class="join-us-btn"
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
</script>

<style scoped lang="scss">
.tiers {
  overflow: hidden;
  .content {
    margin: 0 auto;
    .img-div {
      img {
        width: 100%;
      }
    }
    img {
      width: 100%;
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
      font-size: 20px;
      margin: 0 auto;
      border: 2px #000000 solid;
      margin-top: 1rem;
      margin-bottom: 2rem;
      img {
        width: 13px;
        height: 8px;
        margin-left: 8px;
      }
    }
  }
}
@media only screen and (max-width: 900px) {
}
</style>
