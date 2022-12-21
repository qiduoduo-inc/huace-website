<!--
 * @Author: 王鑫
 * @Description: 
 * @Date: 2022-12-20 10:55:29
-->
<template>
  <div class="video-box">
    <div class="video-mask" v-show="showVideo">
      <div class="video-player">
        <video ref="myVideo" :src="videoUrl" autoplay="true" controls>
          <!-- <source :src="videoUrl" type="video/mp4" /> -->
        </video>
      </div>
    </div>
    <div class="videoBox" v-show="!showVideo">
      <div class="container-fluid">
        <div class="videoMovie" @click="palyVideo">
          <img class="paly-btn" src="@/assets/video/paly.png" alt="" />
          <img :src="imgUrl" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  imgUrl: string;
  videoUrl: string;
  key?: number;
}>();

const showVideo = ref<boolean>(false);
const myVideo = ref(null);
const palyVideo = () => {
  showVideo.value = true;
  myVideo.value.play();
};

watch(
  () => props.key,
  () => {
    palyVideo();
  }
);
</script>

<style scoped lang="scss">
.video-box {
  position: relative;
  img {
    width: 100%;
  }

  .paly-btn {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 3.5625rem;
    height: 3.5625rem;
    cursor: pointer;
  }
  video {
    width: 100%;
    height: 100%;
  }
}
</style>
