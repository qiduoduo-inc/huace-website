<!--
 * @Author: 王鑫
 * @Description: 
 * @Date: 2022-12-16 21:27:26
-->
<template>
  <div class="why-choose container-fluid">
    <div class="box-title">
      <p>WHY CHOOSE HUACE SPORTS HELMET</p>
    </div>
    <div class="choose-video row">
      <div class="left-box col-4">
        <div class="top-box">
          <div
            class="choose-item"
            :class="{ checked: checkId === item.key }"
            @click="clickTab(item.key)"
            v-for="(item, index) in tabList"
            :key="item.key"
          >
            <img :src="checkId === item.key ? `${checked}` : `${uncheck}`" alt="" />
            <p>{{ item.title }}</p>
          </div>
        </div>
        <div class="bottom-box">
          <img src="/images/index/why_choose/people.png" alt="" />
          <p>R&D Teams in Hongkong and Hangzhou</p>
          <p>Design Teams in South Korea and Europe</p>
        </div>
      </div>
      <div class="video-box col-8">
        <VideoBox
          ref="videoBox"
          :img-url="`${tabList[checkId].url}`"
          :video-url="tabList[checkId].videoUrl"
          :key="tabList[checkId].key"
        />
      </div>
    </div>

    <div class="phone-video">
      <div
        class="phone-video-item"
        v-for="(item, index) in tabList"
        :key="index"
      >
        <p class="title">{{ item.title }}</p>
        <VideoBox
          ref="videoBox"
          :img-url="`${item.url}`"
          :video-url="item.videoUrl"
          :key="item.key"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const checked = '/images/index/why_choose/checked.png';
const uncheck = '/images/index/why_choose/uncheck.png';

const videoBox = ref(null);
const checkId = ref(0);
const clickTab = (key: number) => {
  checkId.value = key;
};

const tabList = [
  {
    url: '/images/index/why_choose/1.jpeg',
    title: 'Design & RD',
    key: 0,
    videoUrl: 'https://vod-icbu.alicdn.com/4f4e1c368ac918af/338c0d38e970196f/20221130_0f88e5389ecd635b_388795089333_mp4_264_hd_unlimit_taobao_aliyun.mp4',
  },
  {
    url: '/images/index/why_choose/2.jpeg',
    title: 'Manufacturing Management',
    key: 1,
    videoUrl: 'https://vod-icbu.alicdn.com/4f4e1c368ac918af/e222b924f8e86214/20221130_a6dc5ef3b0d26eff_388797669089_mp4_264_hd_unlimit_taobao_aliyun.mp4',
  },
  {
    url: '/images/index/why_choose/3.jpeg',
    title: 'Quality Control',
    key: 2,
    videoUrl: 'https://vod-icbu.alicdn.com/4f4e1c368ac918af/0614afb07a05ee40/20221130_0019dfe6b337d74d_388327344266_mp4_264_hd_unlimit_taobao_aliyun.mp4',
  },
  {
    url: '/images/index/why_choose/4.jpeg',
    title: 'Service',
    key: 3,
    videoUrl: 'https://vod-icbu.alicdn.com/4f4e1c368ac918af/ed880a969f9a7543/20221130_c13acc8822725a22_389669015816_mp4_264_hd_unlimit_taobao_aliyun.mp4',
  },
];
</script>

<style scoped lang="scss">
.why-choose {
  background-image: url('/images/index/why_choose/1.png');
  background-repeat: no-repeat;
  background-size: 100%;
  color: #ffffff;
  padding: 0 4rem;

  .choose-video {
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    position: relative;
    .left-box {
      background-color: #000000;
      opacity: 0.88;
      filter: alpha(opacity=88);
      -moz-opacity: 0.88;
      -khtml-opacity: 0.88;
      .top-box {
        .choose-item {
          opacity: 1;
          filter: alpha(opacity=100);
          -moz-opacity: 1;
          -khtml-opacity: 1;
          padding-left: 3rem;
          display: flex;
          align-items: center;
          font-size: 1rem;
          line-height: 4.1rem;
          font-weight: bold;
          cursor: pointer;
          img {
            width: 1rem;
            height: 1rem;
            margin-right: 1rem;
          }
        }
        .checked {
          background-color: #f0831e;
          transition: all 0.3s;
          -moz-transition: all 0.3s; /* Firefox 4 */
          -webkit-transition: all 0.3s; /* Safari and Chrome */
          -o-transition: all 0.3s; /* Opera */
        }
      }
      .bottom-box {
        position: absolute;
        left: 1rem;
        bottom: 1rem;
        img {
          margin-bottom: 1rem;
        }
        p {
          margin-bottom: 1rem;
        }
      }
    }

    .video-box {
      background-color: rgba($color: #000000, $alpha: 0.88);
      img {
        width: 100%;
      }
    }
  }

  .phone-video {
    display: none;
  }
}
@media only screen and (max-width: 750px) {
  .why-choose {
    background-size: 100% 100%;
    padding: 0 1rem;
    .choose-video {
      display: none;
    }
    .phone-video {
      display: block;
      .phone-video-item {
        width: 100%;
        padding-bottom: 1rem;
        .title {
          padding: 1rem 0;
          text-align: center;
          font-size: 1rem;
          background: #f0831e;
        }
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
