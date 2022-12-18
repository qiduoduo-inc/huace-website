<!--
 * @Author: 王鑫
 * @Description: patent-wall
 * @Date: 2022-12-17 09:08:31
-->
<template>
  <div class="patent-wall">
    <div class="bg">
      <img src="@/assets/images/index/patentWall/2.png" alt="" />
    </div>
    <div class="box-title">
      <p>PATENT WALL</p>
    </div>
    <div class="content wow animate__fadeInUp" data-wow-duration="2s">
      <img src="@/assets/images/index/patentWall/1.png" alt="" />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.patent-wall {
  background: linear-gradient(to right, rgba(0, 0, 0, 65%), rgba(0, 0, 0, 76%));
  height: 900px;
  position: relative;
  overflow: hidden;

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    height: 900px;
    z-index: -1;
    img {
      height: 100%;
    }
  }
  .box-title {
    padding-top: 80px;
    color: #ffffff;
  }

  .content {
    width: 1675px;
    height: 516px;
    margin: 0 auto;
    z-index: 9;
    img {
      width: 100%;
    }
  }
}
</style>
