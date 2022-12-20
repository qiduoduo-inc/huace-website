<template>
  <div class="testimonials container-fluid">
    <div class="box-title">
      <p>TESTIMONIALS</p>
    </div>
    <div class="small-title">
      <p>What our clients and partners say about us</p>
    </div>
    <div class="video container">
      <VideoBox
        ref="videoBox"
        :img-url="'../../assets/images/index/testimonials/1.png'"
        :video-url="'../../assets/video/video1.mp4'"
      />
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

<script lang="ts" setup></script>

<style scoped lang="scss">
.testimonials {
  background: linear-gradient(to right, rgba(0, 0, 0, 81%), #000000);
  background: -webkit-linear-gradient(to right, rgba(0, 0, 0, 81%), #000000);
  background: -o-linear-gradient(to right, rgba(0, 0, 0, 81%), #000000);
  background: -ms-linear-gradient(to right, rgba(0, 0, 0, 81%), #000000);
  background: -moz-linear-gradient(to right, rgba(0, 0, 0, 81%), #000000);
  color: #ffffff;
  position: relative;
  overflow: hidden;
  padding: 0 10%;

  .small-title {
    text-align: center;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  .video {
    position: relative;
    z-index: 99;
    padding-bottom: 4rem;
    img {
      width: 100%;
    }
  }

  .barrage {
    overflow: hidden;
    .barrage-item {
      opacity: 0;
      filter: alpha(opacity=0);
      -moz-opacity: 0;
      -khtml-opacity: 0;
      border: 1px #ffffff solid;
      border-radius: 100px;
      -moz-border-radius: 100px;
      -webkit-border-radius: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.1rem 1.2rem;
      transition: all 0.5s;
      -moz-transition: all 0.5s; /* Firefox 4 */
      -webkit-transition: all 0.5s; /* Safari and Chrome */
      -o-transition: all 0.5s; /* Opera */
    }
    .barrage-item:first-child {
      position: absolute;
      top: 1%;
      animation: right2left 15s linear infinite;
    }
    .barrage-item:nth-child(2) {
      position: absolute;
      top: 18%;
      animation: right2left 15s linear 2s infinite;
    }
    .barrage-item:nth-child(3) {
      position: absolute;
      top: 27%;
      animation: right2left 15s linear 6s infinite;
    }
    .barrage-item:nth-child(4) {
      position: absolute;
      top: 42%;
      animation: right2left 15s linear 4s infinite;
    }
    .barrage-item:nth-child(5) {
      position: absolute;
      top: 54%;
      animation: right2left 15s linear 10s infinite;
    }
    .barrage-item:nth-child(6) {
      position: absolute;
      top: 80%;
      animation: right2left 15s linear 16s infinite;
    }
  }
}

@keyframes right2left {
  0% {
    opacity: 0.3;
    filter: alpha(opacity=30);
    -moz-opacity: 0.3;
    -khtml-opacity: 0.3;
    transform: translate(100vw);
    -webkit-transform: translate(100vw); /* for Chrome || Safari */
    -moz-transform: translate(100vw); /* for Firefox */
    -ms-transform: translate(100vw); /* for IE */
    -o-transform: translate(100vw); /* for Opera */
  }
  100% {
    opacity: 0.3;
    filter: alpha(opacity=30);
    -moz-opacity: 0.3;
    -khtml-opacity: 0.3;
    transform: translate(-200%);
    -webkit-transform: translate(-200%); /* for Chrome || Safari */
    -moz-transform: translate(-200%); /* for Firefox */
    -ms-transform: translate(-200%); /* for IE */
    -o-transform: translate(-200%); /* for Opera */
  }
}

@media only screen and (max-width: 750px) {
  .testimonials {
    padding: 0;
    .small-title {
      font-size: 1rem;
    }
    .video {
      width: 100%;
    }
    .barrage {
      display: none;
    }
  }
}
</style>
