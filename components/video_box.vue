<!--
 * @Author: 王鑫
 * @Description: 
 * @Date: 2022-12-20 10:55:29
-->
<template>
  <div class="video-box">
    <div class="video-mask" v-show="showVideo">
      <div class="video-player">
        <video ref="myVideo" autoplay="true" controls>
          <source :src="videoUrl" type="video/mp4" />
        </video>
      </div>
    </div>
    <div class="videoBox" v-show="!showVideo">
      <div class="container-fluid">
        <div class="videoMovie" @click="palyVideo">
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
  showVideo.value = true
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
  img {
    width: 100%;
  }
  video {
    width: 100%;
    height: 100%;
  }
}
</style>
