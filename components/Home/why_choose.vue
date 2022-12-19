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
            <img :src="checkId === item.key ? checked : uncheck" alt="" />
            <p>{{ item.title }}</p>
          </div>
        </div>
        <div class="bottom-box">
          <img src="@/assets/images/index/why_choose/people.png" alt="" />
          <p>R&D Teams in Hongkong and Hangzhou</p>
          <p>Design Teams in South Korea and Europe</p>
        </div>
      </div>
      <div class="video col-8" v-show="checkId === 1">
        <img src="@/assets/images/index/why_choose/video1.png" alt="" />
      </div>
      <div class="video col-8" v-show="checkId !== 1">
        <img src="@/assets/images/index/why_choose/video2.png" alt="" />
      </div>
    </div>

    <div class="phone-video">
      <div
        class="phone-video-item"
        v-for="(item, index) in tabList"
        :key="index"
      >
        <p class="title">{{ item.title }}</p>
        <img :src="item.url" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const checked = '../../assets/images/index/why_choose/checked.png';
const uncheck = '../../assets/images/index/why_choose/uncheck.png';

const checkId = ref(1);
const clickTab = (key: number) => {
  checkId.value = key;
};

const tabList = [
  {
    url: '../../assets/images/index/why_choose/video1.png',
    title: 'Design & RD',
    key: 1,
  },
  {
    url: '../../assets/images/index/why_choose/video2.png',
    title: 'Manufacturing Management',
    key: 2,
  },
  {
    url: '../../assets/images/index/why_choose/video2.png',
    title: 'Quality Control',
    key: 3,
  },
  {
    url: '../../assets/images/index/why_choose/video2.png',
    title: 'Service',
    key: 4,
  },
];
</script>

<style scoped lang="scss">
.why-choose {
  background-image: url('@/assets/images/index/why_choose/1.png');
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
      .top-box {
        .choose-item {
          opacity: 1;
          padding-left: 3rem;
          display: flex;
          align-items: center;
          font-size: 1rem;
          line-height: 4.1rem;
          font-weight: bold;
          img {
            width: 1rem;
            height: 1rem;
            margin-right: 1rem;
          }
        }
        .checked {
          background-color: #f0831e;
          transition: 0.3s;
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

    .video {
      // width: 1198px;
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
    padding:0 1rem;
    .choose-video {
      display: none;
    }
    .phone-video {
      display: block;
      .phone-video-item {
        width: 100%;
        padding-bottom: 1rem;
        .title{
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
