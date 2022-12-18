<!--
 * @Author: 王鑫
 * @Description: 
 * @Date: 2022-12-16 21:27:26
-->
<template>
  <div class="why-choose">
    <div class="box-title">
      <p>WHY CHOOSE HUACE SPORTS HELMET</p>
    </div>
    <div class="choose-video">
      <div class="left-box">
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
          <img src="@/assets/images/index/whyChoose/people.png" alt="" />
          <p>R&D Teams in Hongkong and Hangzhou</p>
          <p>Design Teams in South Korea and Europe</p>
        </div>
      </div>
      <div class="video">
        <img src="@/assets/images/index/whyChoose/video1.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const checked = '../../assets/images/index/whyChoose/checked.png';
const uncheck = '../../assets/images/index/whyChoose/uncheck.png';

const checkId = ref(1);
const clickTab = (key: number) => {
  checkId.value = key;
};

const tabList = [
  {
    title: 'Design & RD',
    key: 1,
  },
  {
    title: 'Manufacturing Management',
    key: 2,
  },
  {
    title: 'Quality Control',
    key: 3,
  },
  {
    title: 'Service',
    key: 4,
  },
];
</script>

<style scoped lang="scss">
.why-choose {
  background-image: url('@/assets/images/index/whyChoose/1.png');
  background-repeat: no-repeat;
  background-size: 100%;
  color: #ffffff;
  overflow: hidden;

  .box-title {
    padding-top: 70px;
  }

  .choose-video {
    width: 1720px;
    margin: 0 auto;
    height: 673px;
    display: flex;
    justify-content: flex-start;
    position: relative;
    .left-box {
      width: 522px;
      background-color: #000000;
      opacity: 0.88;
      .top-box {
        height: 361px;
        .choose-item {
          opacity: 1;
          padding-left: 70px;
          height: 90px;
          display: flex;
          align-items: center;
          font-size: 20px;
          img {
            width: 24px;
            height: 24px;
            margin-right: 8px;
          }
        }
        .checked {
          background-color: #f0831e;
          transition: .3s;
        }
      }
      .bottom-box {
        position: absolute;
        left: 70px;
        bottom: 45px;
        img {
          margin-bottom: 20px;
        }
        p {
          margin-bottom: 15px;
        }
      }
    }

    .video {
      width: 1198px;
      img {
        width: 100%;
      }
    }
  }
}
</style>
