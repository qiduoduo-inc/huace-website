<!--
 * @Author: 王鑫
 * @Description: AboutUs
 * @Date: 2022-12-17 07:53:23
-->
<template>
  <div class="about-us container-fluid" id="aboutUs" ref="aboutUs">
    <div class="row">
      <div
        class="left-img col-2"
        ref="left"
        :style="{
          transform: `translateX(${lTranslateX}%)`,
        }"
      >
        <img src="@/assets/images/index/about_us/1.png" alt="" />
      </div>
      <div class="center-img col-8">
        <div class="content container">
          <p class="title">ABOUT US</p>
          <p class="detail">
            With a combined 10+ years of experience, Huace Sports Helmet has the
            working knowledge and network of resources to meet the ever-changing
            demand of market trend. Our headquarter is based in hangzhou city,
            China where main office and manufacturing teams of over 300
            expertise staff are located. With state-of-art manufacturing
            facilities spread over an area of more than 12,000 sq. mts and
            having the capability to churn out millions of helmets every year.
          </p>
        </div>
      </div>
      <div
        class="right-img col-2"
        ref="right"
        :style="{
          transform: `translateX(${rTranslateX}%)`,
        }"
      >
        <img src="@/assets/images/index/about_us/3.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
let left = ref(null);
let right = ref(null);
const lTranslateX = ref<number>(-65);
const rTranslateX = ref<number>(65);
const handleScroll = () => {
  let scroll = document.documentElement.scrollTop || document.body.scrollTop;
  const elOffsetTop = document.getElementById('aboutUs').offsetTop;
  const viewPortHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  if (elOffsetTop - document.documentElement.scrollTop <= viewPortHeight) {
    const transform = (scroll - elOffsetTop) / 14;
    lTranslateX.value = transform >= 0 ? 0 : transform;
    rTranslateX.value = transform >= 0 ? 0 : -transform;
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
  background: linear-gradient(to right, #e2e2e2, #ffffff, #eef0f1);
  background: -webkit-linear-gradient(to right, #e2e2e2, #ffffff, #eef0f1);
  background: -o-linear-gradient(to right, #e2e2e2, #ffffff, #eef0f1);
  background: -ms-linear-gradient(to right, #e2e2e2, #ffffff, #eef0f1);
  background: -moz-linear-gradient(to right, #e2e2e2, #ffffff, #eef0f1);
  overflow: hidden;
  .center-img {
    background-image: url('@/assets/images/index/about_us/2.png');
    background-size: 51.5625rem 28.5rem;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .title {
        font-size: 3.125rem;
        font-weight: bold;
      }

      .detail {
        font-size: 1.125rem;
        width: 35.3125rem;
      }
    }
  }

  .left-img {
    img {
      height: 56.25rem;
    }
  }

  .right-img {
    display: flex;
    justify-content: flex-end;
    img {
      height: 56.25rem;
    }
  }
}
@media only screen and (max-width: 750px) {
  .about-us {
    .center-img {
      background-image: url('@/assets/images/index/about_us/2.png');
      background-size: 13rem 8rem;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .title {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .detail {
          font-size: 0.3rem;
          width: 10rem;
        }
      }
    }

    .left-img {
      img {
        height: 15rem;
      }
    }

    .right-img {
      display: flex;
      justify-content: flex-end;
      img {
        height: 15rem;
      }
    }
  }
}
</style>
