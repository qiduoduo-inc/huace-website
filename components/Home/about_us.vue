<!--
 * @Author: 王鑫
 * @Description: AboutUs
 * @Date: 2022-12-17 07:53:23
-->
<template>
  <div class="about-us container-fluid" id="aboutUs" ref="aboutUs">
    <div class="pc row">
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
            In year 2013, Hangzhou Huace Manufacture and Trade Co., Ltd started
            our journey into the sports helmet industry. We are committed to
            promoting our Huace-made sports helmets worldwide, providing our
            global customers with one-stop, multi-series sports helmet products.
            After years of development, we completed the gorgeous transition
            from manufacturing to export sales, providing O E M and O D M
            service for more than 200 customers in over 50 countries and
            regions. Our company has successfully ranked among the first echelon
            of comprehensive strength in China's sports helmet industry,
            becoming the major exporter of sports helmet products in China.
          </p>
          <p class="detail">
            From design, research, testing, production and quality control,
            Huace has a group of professional talents, we master the complete
            production management of helmets, to ensure the quality of products.
            Meanwhile, Huace set up our design teams in Korea and Europe
            respectively, and one research and development team in Hong Kong
            China. The research and development center is actively exploring new
            breakthroughs while developing new products. Eco-friendly materials
            are one of the crucial directions for the research and development
            to follow.
          </p>
          <p class="detail">
            In the future, Huace will continue to aim for becoming a global
            high-caliber helmet intelligent manufacturer. Our vision is to be
            the world's leading manufacturer offering all categories of sports
            helmets with independently-developed designs and intellectual
            property rights.
          </p>
          <p class="detail">
            Create more value through innovation and make cycling full of
            infinite possibilities. Huace will accompany and protect you on the
            road.
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
    <div class="h5 row">
      <div class="center-img col">
        <div class="content container">
          <p class="title">ABOUT US</p>

          <p class="detail">
            In year 2013, Hangzhou Huace Manufacture and Trade Co., Ltd started
            our journey into the sports helmet industry. We are committed to
            promoting our Huace-made sports helmets worldwide, providing our
            global customers with one-stop, multi-series sports helmet products.
            After years of development, we completed the gorgeous transition
            from manufacturing to export sales, providing O E M and O D M
            service for more than 200 customers in over 50 countries and
            regions. Our company has successfully ranked among the first echelon
            of comprehensive strength in China's sports helmet industry,
            becoming the major exporter of sports helmet products in China.
          </p>
          <p class="detail">
            From design, research, testing, production and quality control,
            Huace has a group of professional talents, we master the complete
            production management of helmets, to ensure the quality of products.
            Meanwhile, Huace set up our design teams in Korea and Europe
            respectively, and one research and development team in Hong Kong
            China. The research and development center is actively exploring new
            breakthroughs while developing new products. Eco-friendly materials
            are one of the crucial directions for the research and development
            to follow.
          </p>
          <p class="detail">
            In the future, Huace will continue to aim for becoming a global
            high-caliber helmet intelligent manufacturer. Our vision is to be
            the world's leading manufacturer offering all categories of sports
            helmets with independently-developed designs and intellectual
            property rights.
          </p>
          <p class="detail">
            Create more value through innovation and make cycling full of
            infinite possibilities. Huace will accompany and protect you on the
            road.
          </p>
        </div>
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
  .pc {
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
          margin-bottom: 1rem;
        }

        .detail {
          font-size: 1.125rem;
          width: 80%;
          margin-bottom: 1rem;
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

  .h5 {
    display: none;
  }
}
@media only screen and (max-width: 750px) {
  .about-us {
    padding: 4rem 0;
    .pc {
      display: none;
    }

    .h5 {
      display: block;
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
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 1rem;
          }

          .detail {
            font-size: 0.65rem;
            width: 80%;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
}
</style>
