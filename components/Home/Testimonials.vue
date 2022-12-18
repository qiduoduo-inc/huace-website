<template>
  <div class="testimonials">
    <div class="box-title">
      <p>TESTIMONIALS</p>
    </div>
    <div class="small-title">
      <p>What our clients and partners say about us</p>
    </div>
    <div class="video">
      <img src="@/assets/images/index/testimonials/1.png" alt="" />
    </div>
    <div class="barrage" ref="barrage">
      <div class="barrage-item">
        <p>The helmet quality is reliable</p>
        <img src="@/assets/images/index/testimonials/2.png" alt="" />
      </div>
      <div class="barrage-item">
        <p>The helmet quality is reliable</p>
        <img src="@/assets/images/index/testimonials/2.png" alt="" />
      </div>
      <div class="barrage-item">
        <p>The helmet quality is reliable</p>
        <img src="@/assets/images/index/testimonials/2.png" alt="" />
      </div>
      <div class="barrage-item">
        <p>The helmet quality is reliable</p>
        <img src="@/assets/images/index/testimonials/2.png" alt="" />
      </div>
      <div class="barrage-item">
        <p>The helmet quality is reliable</p>
        <img src="@/assets/images/index/testimonials/2.png" alt="" />
      </div>
      <div class="barrage-item">
        <p>The helmet quality is reliable</p>
        <img src="@/assets/images/index/testimonials/2.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
.testimonials {
  background: linear-gradient(to right, rgba(0, 0, 0, 81%), #000000);
  color: #ffffff;
  position: relative;
  height: 900px;
  overflow: hidden;

  .box-title {
    padding-top: 80px;
    padding-bottom: 10px;
  }
  .small-title {
    text-align: center;
    font-size: 16px;
    margin-bottom: 40px;
  }
  .video {
    position: absolute;
    top: 220px;
    left: 50%;
    transform: translateX(-50%);
    width: 1050px;
    height: 590px;
    z-index: 99;
    img {
      width: 100%;
    }
  }

  .barrage {
    position: absolute;
    height: 900px;
    left: 0;
    top: 0;
    z-index: 1;
    .barrage-item {
      opacity: 0;
      position: absolute;
      border: 1px #ffffff solid;
      border-radius: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px 40px;
      transition: 0.5s;
      p {
        width: 200px;
      }
    }
    .barrage-item:first-child {
      top: 90px;
      animation: right2left 15s linear infinite;
    }
    .barrage-item:nth-child(2) {
      top: 180px;
      animation: right2left 15s linear 2s infinite;
    }
    .barrage-item:nth-child(3) {
      top: 270px;
      animation: right2left 15s linear 6s infinite;
    }
    .barrage-item:nth-child(4) {
      top: 420px;
      animation: right2left 15s linear 4s infinite;
    }
    .barrage-item:nth-child(5) {
      top: 540px;
      animation: right2left 15s linear 10s infinite;
    }
    .barrage-item:nth-child(6) {
      top: 800px;
      animation: right2left 15s linear 16s infinite;
    }
  }
}

@keyframes right2left {
  0% {
    opacity: 0.3;
    transform: translate(100vw);
  }
  100% {
    opacity: 0.3;
    transform: translate(-100%);
  }
}
</style>
