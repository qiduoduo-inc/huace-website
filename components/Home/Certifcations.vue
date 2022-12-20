<template>
  <div class="certifcations container-fluid">
    <div class="box-title">
      <p>CERTIFICATIONS</p>
    </div>
    <div class="small-title">
      <p>BSCI、SG、CE、CPSC、AS/NZS、KC</p>
    </div>
    <div class="certifications-swiper">
      <div class="swiper-container swiper">
        <div class="swiper-wrapper">
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
        <div class="swiper-button-next"></div>
      </div>
    </div>
    <div class="h5-certifications-swiper">
      <div class="swiper-container swiper">
        <div class="swiper-wrapper">
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
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Swiper, { Autoplay, Navigation } from 'swiper';

// swiper.less/sass/css 决定了基础的样式
import 'swiper/swiper.scss';
Swiper.use([Autoplay, Navigation]);

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
  const pp = new Swiper('.certifications-swiper .swiper', {
    watchSlidesProgress: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    loopedSlides: 6,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    on: {
      progress: function (swiper, progress) {
        for (let i = 0; i < this.slides.length; i++) {
          let slide = this.slides.eq(i);
          let slideProgress = slide[0].progress;
          let modify = 1;
          if (Math.abs(slideProgress) > 1) {
            modify = (Math.abs(slideProgress) - 1) * 0.2 + 1;
          }
          let translate = slideProgress * modify * 12 + 'rem';
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

  const hh = new Swiper('.h5-certifications-swiper .swiper', {
    watchSlidesProgress: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    loopedSlides: 6,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    on: {
      progress: function (swiper, progress) {
        for (let i = 0; i < this.slides.length; i++) {
          let slide = this.slides.eq(i);
          let slideProgress = slide[0].progress;
          let modify = 1;
          if (Math.abs(slideProgress) > 1) {
            modify = (Math.abs(slideProgress) - 1) * 0.2 + 1;
          }
          let translate = slideProgress * modify * 8 + 'rem';
          let scale = 1 - Math.abs(slideProgress) / 5;
          let zIndex = 98 - Math.abs(Math.round(10 * slideProgress));
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
  background-image: url('@/assets/images/index/certifications/1.png');
  background-size: 100%;
  overflow: hidden;
  .box-title {
    padding-top: 2rem;
    color: #ffffff;
    padding-bottom: 0;
  }

  .small-title {
    font-size: 1rem;
    text-align: center;
    color: #ffffff;
    margin-bottom: 2rem;
  }

  .certifications-swiper {
    position: relative;
    .swiper-container {
      // overflow: inherit !important;
    }

    .swiper-slide {
      width: 25.875rem;
      height: 35.9375rem;
      .swiperImg {
        background: linear-gradient(
          rgba(255, 255, 255, 0.33),
          rgba(255, 255, 255, 0.15),
          rgba(255, 255, 255, 0.71)
        );
        width: 23.8125rem;
        height: 33.75rem;
        display: flex;
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(14px) saturate(150%);
        opacity: 0.8;
        img {
          height: 90%;
          width: 90%;
        }
      }
    }

    .swiper-slide-active {
      .swiperImg {
        opacity: 1;
      }
    }
    .swiper-button-next {
      position: absolute;
      right: 6.25rem;
      top: 45%;
      width: 2.5rem;
      height: 2.5rem;
      background: url(@/assets/images/index/certifications/right-arrow.png)
        no-repeat;
      background-size: 100%;
      z-index: 99;
      cursor: pointer;
    }

    .swiper-button-prev {
      position: absolute;
      left: 6.25rem;
      top: 45%;
      width: 2.5rem;
      height: 2.5rem;
      background: url(@/assets/images/index/certifications/left-arrow.png)
        no-repeat;
      background-size: 100%;
      z-index: 99;
      cursor: pointer;
    }
  }

  .h5-certifications-swiper {
    display: none;
  }
}

@media only screen and (max-width: 750px) {
  .certifcations {
    // .swiper-slide {
    //   width: 17.6rem;
    //   height: 25rem;
    //   .swiperImg {
    //     width: 8rem;
    //     height: 13rem;
    //   }
    // }

    .certifications-swiper {
      display: none;
    }

    .h5-certifications-swiper {
      display: block;
      position: relative;
      .swiper-container {
        overflow: inherit !important;
      }

      .swiper-slide {
        width: 12.96rem;
        height: 18rem;
        .swiperImg {
          background: linear-gradient(
            rgba(255, 255, 255, 0.33),
            rgba(255, 255, 255, 0.15),
            rgba(255, 255, 255, 0.71)
          );
          width: 11.52rem;
          height: 16rem;
          display: flex;
          justify-content: center;
          align-items: center;
          backdrop-filter: blur(14px) saturate(150%);
          opacity: 0.8;
          img {
            height: 90%;
            width: 90%;
          }
        }
      }

      .swiper-slide-active {
        .swiperImg {
          opacity: 1;
        }
      }
    }

    .swiper-button-next {
      display: none;
    }

    .swiper-button-prev {
      display: none;
    }
  }
}
</style>
