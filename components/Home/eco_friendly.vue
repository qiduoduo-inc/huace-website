<!--
 * @Author: 王鑫
 * @Description: 
 * @Date: 2022-12-17 09:46:01
-->
<template>
  <div class="eco-friendlu container-fluid">
    <div class="pc row">
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
    <div class="h5">
      <div class="top-box">
        <div class="title">ECO-FRIENDLY</div>
        <div class="detail">
          We have mature technique for exhaust gas recirculation and
          continuously use Eco friendly materials to produce helmets.
        </div>
      </div>
      <div class="bottom-box">
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

  .h5 {
    display: none;
  }
}

@media only screen and (max-width: 750px) {
  .eco-friendlu {
    .pc {
      display: none;
    }

    .h5 {
      display: block;
      background-color: #cccccc;
      margin: 0;
      .top-box {
        text-align: center;
        padding: 1rem 1rem;
        .title {
          font-size: 2.5rem;
          font-weight: bold;
        }
        .detail {
          font-size: 1rem;
        }
      }

      .bottom-box {
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
