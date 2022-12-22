<!--
 * @Author: 王鑫
 * @Description: patent-wall
 * @Date: 2022-12-17 09:08:31
-->
<template>
  <div class="patent-wall container-fluid">
    <div class="bg container-fludid">
      <!-- <img src="/images/index/patent_wall/2.png" alt="" /> -->
    </div>
    <div class="box-title">
      <p>PATENT WALL</p>
    </div>
    <!-- wow animate__fadeInUp -->
    <div class="content container reset">
      <img src="/images/index/patent_wall/1.png" alt="" />
    </div>
    <div class="phone-content" ref="phoneContent">
      <img class="img" src="/images/index/patent_wall/1.png" alt="" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { $ScrollReveal } = useNuxtApp();
async function loadImages() {
  await $ScrollReveal().reveal('.reset', {
    distance: '10rem',
    origin: 'bottom',
    cleanup: true,
    duration: 2000,
    reset: true,
  });
}

onMounted(async () => {
  await nextTick();
  await loadImages();
});
</script>

<style scoped lang="scss">
.patent-wall {
  background: linear-gradient(to right, rgba(0, 0, 0, 65%), rgba(0, 0, 0, 76%));
  background: -webkit-linear-gradient(
    to right,
    rgba(0, 0, 0, 65%),
    rgba(0, 0, 0, 76%)
  );
  background: -o-linear-gradient(
    to right,
    rgba(0, 0, 0, 65%),
    rgba(0, 0, 0, 76%)
  );
  background: -ms-linear-gradient(
    to right,
    rgba(0, 0, 0, 65%),
    rgba(0, 0, 0, 76%)
  );
  background: -moz-linear-gradient(
    to right,
    rgba(0, 0, 0, 65%),
    rgba(0, 0, 0, 76%)
  );

  position: relative;
  overflow: hidden;

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    background-image: url('/images/index/patent_wall/2.png');
    background-size: cover;
    img {
      width: 100%;
    }
  }
  .box-title {
    color: #ffffff;
  }

  .content {
    margin: 0 auto;
    padding: 1.5rem 0 2rem;
    z-index: 9;
    img {
      width: 100%;
    }
  }

  .phone-content {
    display: none;
  }
}
@media only screen and (max-width: 750px) {
  .patent-wall {
    background-size: 100% 100%;
    .content {
      display: none !important;
    }

    .phone-content {
      display: flex;
      height: 22rem;
      overflow-x: scroll;
      margin-bottom: 1rem;
      padding: 1rem;
      img {
        height: 100%;
      }
    }
  }
}
</style>
