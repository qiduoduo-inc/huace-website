<!--
 * @Author: 王鑫
 * @Description: 
 * @Date: 2022-12-17 09:46:01
-->
<template>
  <div class="eco-friendlu">
    <div class="left-box">
      <div class="title">ECO-FRIENDLY</div>
      <div class="detail">
        We have mature technique for exhaust gas recirculation and continuously
        use Eco friendly materials to produce helmets.
      </div>
    </div>
    <div class="right-box">
      <img src="@/assets/images/index/ecoFriendly/2.png" alt="" />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.eco-friendlu {
  height: 900px;
  display: flex;
  overflow: hidden;
  .left-box {
    position: relative;
    width: 642px;
    background-image: url('@/assets/images/index/ecoFriendly/1.png');
    background-position: 0% -1px;
    background-size: 100%;
    .title {
      font-size: 50px;
      font-weight: bold;
      position: absolute;
      left: 100px;
      top: 80px;
    }
    .detail {
      width: 400px;
      font-size: 20px;
      position: absolute;
      left: 100px;
      top: 160px;
    }
  }

  .right-box {
    width: 1278px;
    img {
      width: 100%;
    }
  }
}
</style>
