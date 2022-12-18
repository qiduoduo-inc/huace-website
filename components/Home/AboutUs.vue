<!--
 * @Author: 王鑫
 * @Description: AboutUs
 * @Date: 2022-12-17 07:53:23
-->
<template>
  <div class="about-us">
    <div class="center-img">
      <img src="@/assets/images/index/aboutUs/2.png" alt="" />
    </div>
    <div class="left-img" ref="left">
      <img
        src="@/assets/images/index/aboutUs/1.png"
        :style="{
          transform: `translate(${lTranslateX}%,-50%)`,
        }"
        alt=""
      />
    </div>
    <div class="right-img" ref="right">
      <img
        src="@/assets/images/index/aboutUs/1.png"
        :style="{
          transform: `translate(${rTranslateX}%,-50%)`,
        }"
        alt=""
      />
    </div>
    <div class="content">
      <p class="title">ABOUT US</p>
      <p class="detail">
        With a combined 10+ years of experience, Huace Sports Helmet has the
        working knowledge and network of resources to meet the ever-changing
        demand of market trend. Our headquarter is based in hangzhou city, China
        where main office and manufacturing teams of over 300 expertise staff
        are located. With state-of-art manufacturing facilities spread over an
        area of more than 12,000 sq. mts and having the capability to churn out
        millions of helmets every year.
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
let left = ref(null);
let right = ref(null);
const lTranslateX = ref<number>(-69);
const rTranslateX = ref<number>(69);
const handleScroll = () => {
  let scroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (scroll > 4057 && scroll < 4646) {
    const transform = (scroll - 4057) / 46 + 5;
    lTranslateX.value = -69 + transform;
    rTranslateX.value = 69 - transform - 3;
  }
};

onMounted(() => {
  if (process.client) {
    window.addEventListener('scroll', handleScroll, true);
  }
});

onBeforeUnmount(() => {
  if (process.client) {
    window.removeEventListener('scroll', handleScroll);
  }
});
</script>

<style scoped lang="scss">
.about-us {
  position: relative;
  overflow: hidden;
  height: 900px;
  background: linear-gradient(to right, #e2e2e2, #ffffff, #eef0f1);
  .center-img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 825px;
    height: 440px;
    img {
      width: 100%;
    }
  }

  .left-img {
    position: absolute;
    left: 0;
    top: 50%;
    img {
      height: 900px;
    }
  }

  .right-img {
    position: absolute;
    right: 0;
    top: 50%;
    img {
      height: 900px;
    }
  }

  .content {
    width: 825px;
    height: 440px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .title {
      font-size: 50px;
      font-weight: bold;
    }

    .detail {
      font-size: 20px;
      width: 575px;
    }
  }
}
</style>
