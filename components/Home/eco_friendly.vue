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
        <VideoBox
          ref="videoBox"
          :img-url="'../../assets/images/index/eco_friendly/2.png'"
          :video-url="'https://test-1255378077.cos.ap-nanjing.myqcloud.com/%E6%9D%AD%E5%B7%9E%E5%8D%8E%E7%AD%96%E5%B7%A5%E8%B4%B8%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-%E6%88%90%E7%89%87.mp4'"
        />
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
        <VideoBox
          ref="videoBox"
          :img-url="'../../assets/images/index/eco_friendly/2.png'"
          :video-url="'https://test-1255378077.cos.ap-nanjing.myqcloud.com/%E6%9D%AD%E5%B7%9E%E5%8D%8E%E7%AD%96%E5%B7%A5%E8%B4%B8%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-%E6%88%90%E7%89%87.mp4'"
        />
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
          font-size: 2rem;
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
