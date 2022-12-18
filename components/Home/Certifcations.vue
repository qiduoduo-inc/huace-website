<template>
  <div class="certifcations">
    <div class="box-title">
      <p>CERTIFICATIONS</p>
    </div>
    <div class="small-title">
      <p>BSCI、SG、CE、CPSC、AS/NZS、KC</p>
    </div>
    <div class="certifications-swiper">
      <div class="swiper-container swiper">
        <div class="swiper-wrapper" style=" translateX(-8%)">
          <div
            class="swiper-slide"
            v-for="(item, index) in imgList"
            :key="index"
          >
            <div class="swiperImg">
              <img :src="item" alt="" />
            </div>
          </div>
        </div>
        <div class="swiper-button-prev"></div>
        <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
        <div class="swiper-button-next"></div>
        <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Swiper, { Autoplay, Pagination } from 'swiper';

// swiper.less/sass/css 决定了基础的样式
import 'swiper/swiper.scss';
Swiper.use([Autoplay, Pagination]);

const imgList = [
  '../../assets/images/index/certifications/2.png',
  '../../assets/images/index/certifications/3.png',
  '../../assets/images/index/certifications/4.png',
  '../../assets/images/index/certifications/5.png',
  '../../assets/images/index/certifications/5.png',
  '../../assets/images/index/certifications/5.png',
];

const duration = ref(0);

onMounted(() => {
  const ss = new Swiper('.certifications-swiper .swiper', {
    watchSlidesProgress: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    loopedSlides: 6,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    on: {
      progress: function (swiper, progress) {
        for (let i = 0; i < this.slides.length; i++) {
          let slide = this.slides.eq(i);
          let slideProgress = slide[0].progress;
          let modify = 1;
          if (Math.abs(slideProgress) > 1) {
            modify = (Math.abs(slideProgress) - 1) * 0.2 + 1;
          }
          if (slideProgress < 0 && slideProgress >= -6) {
            slideProgress += 1;
          }
          let translate = slideProgress * modify * 200 + 'px';
          let scale = 1 - Math.abs(slideProgress) / 5;
          let zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
          slide[0].style.transform =
            'translateX(' + translate + ') scale(' + scale + ')';
          slide[0].style.zIndex = zIndex;
          slide[0].style.opacity = 1;
          if (Math.abs(slideProgress) > 3) {
            slide[0].style.opacity = 0;
          }
        }
      },
      setTransition: function (swiper, transition) {
        for (let i = 0; i < this.slides.length; i++) {
          let slide = this.slides.eq(i);
          slide[0].style.transitionDuration = transition + 'ms';
        }
      },
    },
  });
});
</script>

<style scoped lang="scss">
.certifcations {
  height: 900px;
  background-image: url('@/assets/images/index/certifications/1.png');
  background-size: 100%;
  min-width: 1920px;
  overflow: hidden;
  .box-title {
    padding-top: 80px;
    color: #ffffff;
    padding-bottom: 0;
  }

  .small-title {
    font-size: 16px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 60px;
  }

  .certifications-swiper {
    width: 1550px;
    position: relative;
    .swiper-container {
      overflow: inherit !important;
    }
    .swiper-slide {
      width: 414px;
      height: 575px;
      .swiperImg {
        background: linear-gradient(
          rgba(255, 255, 255, 0.33),
          rgba(255, 255, 255, 0.15),
          rgba(255, 255, 255, 0.71)
        );
        width: 400px;
        height: 575px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          height: 90%;
          width: 90%;
        }
      }
    }

    .swiper-slide-next,
    .swiper-slide-active {
      .swiperImg {
        opacity: 1;
      }
    }
  }
}
.swiper-button-next {
  position: absolute;
  right: -200px;
  top: 45%;
  width: 45px;
  height: 45px;
  background: url(@/assets/images/index/certifications/right-arrow.png)
    no-repeat;
  background-size: 100%;
  z-index: 99;
  cursor: pointer;
}

.swiper-button-prev {
  position: absolute;
  left: 100px;
  top: 45%;
  width: 45px;
  height: 45px;
  background: url(@/assets/images/index/certifications/left-arrow.png) no-repeat;
  background-size: 100%;
  z-index: 99;
  cursor: pointer;
}
</style>
