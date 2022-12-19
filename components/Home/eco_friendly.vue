<!--
 * @Author: 王鑫
 * @Description: 
 * @Date: 2022-12-17 09:46:01
-->
<template>
  <div class="eco-friendlu container-fluid">
    <div class="row">
      <div class="left-box col-4">
        <div class="title">ECO-FRIENDLY</div>
        <div class="detail">
          We have mature technique for exhaust gas recirculation and
          continuously use Eco friendly materials to produce helmets.
        </div>
      </div>
      <div class="right-box col-8">
        <img src="@/assets/images/index/eco_friendly/2.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.eco-friendlu {
  overflow: hidden;
  .left-box {
    position: relative;
    background-image: url('@/assets/images/index/eco_friendly/1.png');
    background-position: 0% -1px;
    background-size: 100%;
    .title {
      font-size: 2.5rem;
      font-weight: bold;
      position: absolute;
      left: 4rem;
      top: 2rem;
    }
    .detail {
      font-size: 1rem;
      position: absolute;
      left: 4rem;
      top: 7rem;
      width: 19rem;
    }
  }

  .right-box {
    img {
      width: 100%;
    }
  }
}

@media only screen and (max-width: 750px) {
  .eco-friendlu {
    .left-box {
      .title {
        font-size: 0.5rem;
        font-weight: bold;
        position: absolute;
        left: 1.4rem;
        top: 1.2rem;
      }
      .detail {
        font-size: 0.2rem;
        position: absolute;
        left: 1.4rem;
        top: 2rem;
        width: 3rem;
      }
    }
  }
}
</style>
