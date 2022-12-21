<template>
  <transition>
    <div class="international-exhibitions container-fluid">
      <div class="box-title">
        <p>INTERNATIONAL EXHIBITIONS</p>
      </div>
      <div class="photo-wall container-fluid" ref="photoWall">
        <div class="photo-item" v-for="(item, index) in itemList">
          <img :src="item.url" alt="" />
        </div>
        <div class="year-box">
          <div class="year">
            <p>2015</p>
          </div>
          <div class="year">
            <p>2016</p>
          </div>
          <div class="year">
            <p>2017</p>
          </div>
          <div class="year">
            <p>2018</p>
          </div>
          <div class="year">
            <p>2019</p>
          </div>
        </div>
      </div>
      <div class="photo-wall bottom" ref="photoWallOld">
        <div class="photo-item" v-for="(item, index) in itemListOld">
          <img :src="item.url" alt="" />
        </div>
      </div>
      <div class="h-photo-wall container-fluid" ref="hPhotoWall">
        <div class="photo-item" v-for="(item, index) in hItemList">
          <img :src="item.url" alt="" />
        </div>
        <div class="year-box">
          <div class="year">
            <p>2015</p>
          </div>
          <div class="year">
            <p>2016</p>
          </div>
          <div class="year">
            <p>2017</p>
          </div>
          <div class="year">
            <p>2018</p>
          </div>
          <div class="year">
            <p>2019</p>
          </div>
        </div>
      </div>
      <div class="h-photo-wall bottom" ref="hPhotoWallOld">
        <div class="photo-item" v-for="(item, index) in hItemListOld">
          <img :src="item.url" alt="" />
        </div>
      </div>
      <div class="title">
        <p>INTERNATIONAL EXHIBITIONS</p>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
const itemList = ref([
  {
    url: '../../assets/images/index/international_exhibitions/1.png',
    type: 2,
  },
  {
    url: '../../assets/images/index/international_exhibitions/2.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/3.png',
    type: 3,
  },
  {
    url: '../../assets/images/index/international_exhibitions/4.jpg',
    type: 2,
  },
  {
    url: '../../assets/images/index/international_exhibitions/5.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/6.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/7.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/8.png',
    type: 3,
  },
  {
    url: '../../assets/images/index/international_exhibitions/9.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/10.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/11.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/12.png',
    type: 2,
  },
  {
    url: '../../assets/images/index/international_exhibitions/13.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/14.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/15.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/16.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/17.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/18.png',
    type: 3,
  },
  {
    url: '../../assets/images/index/international_exhibitions/19.png',
    type: 3,
  },
  {
    url: '../../assets/images/index/international_exhibitions/20.png',
    type: 3,
  },
  {
    url: '../../assets/images/index/international_exhibitions/21.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/22.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/23.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/24.png',
    type: 3,
  },
  {
    url: '../../assets/images/index/international_exhibitions/25.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/26.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/27.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/28.png',
    type: 2,
  },
  {
    url: '../../assets/images/index/international_exhibitions/29.png',
    type: 3,
  },
  {
    url: '../../assets/images/index/international_exhibitions/30.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/31.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/32.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/33.png',
    type: 2,
  },
  {
    url: '../../assets/images/index/international_exhibitions/34.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/35.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/36.png',
    type: 2,
  },
  {
    url: '../../assets/images/index/international_exhibitions/37.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/38.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/39.png',
    type: 2,
  },
  {
    url: '../../assets/images/index/international_exhibitions/40.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/41.png',
    type: 2,
  },
  {
    url: '../../assets/images/index/international_exhibitions/42.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/43.png',
    type: 3,
  },
  {
    url: '../../assets/images/index/international_exhibitions/44.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/45.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/46.png',
    type: 1,
  },
]);

const itemListOld = ref([
  {
    url: '../../assets/images/index/international_exhibitions/1.png',
    type: 2,
  },
  {
    url: '../../assets/images/index/international_exhibitions/2.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/3.png',
    type: 3,
  },
  {
    url: '../../assets/images/index/international_exhibitions/4.jpg',
    type: 2,
  },
  {
    url: '../../assets/images/index/international_exhibitions/5.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/6.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/7.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/8.png',
    type: 3,
  },
  {
    url: '../../assets/images/index/international_exhibitions/9.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/10.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/11.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/12.png',
    type: 2,
  },
  {
    url: '../../assets/images/index/international_exhibitions/13.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/14.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/15.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/16.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/17.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/18.png',
    type: 3,
  },
  {
    url: '../../assets/images/index/international_exhibitions/19.png',
    type: 3,
  },
  {
    url: '../../assets/images/index/international_exhibitions/20.png',
    type: 3,
  },
  {
    url: '../../assets/images/index/international_exhibitions/21.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/22.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/23.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/24.png',
    type: 3,
  },
  {
    url: '../../assets/images/index/international_exhibitions/25.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/26.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/27.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/28.png',
    type: 2,
  },
  {
    url: '../../assets/images/index/international_exhibitions/29.png',
    type: 3,
  },
  {
    url: '../../assets/images/index/international_exhibitions/30.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/31.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/32.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/33.png',
    type: 2,
  },
  {
    url: '../../assets/images/index/international_exhibitions/34.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/35.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/36.png',
    type: 2,
  },
  {
    url: '../../assets/images/index/international_exhibitions/37.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/38.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/39.png',
    type: 2,
  },
  {
    url: '../../assets/images/index/international_exhibitions/40.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/41.png',
    type: 2,
  },
  {
    url: '../../assets/images/index/international_exhibitions/42.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/43.png',
    type: 3,
  },
  {
    url: '../../assets/images/index/international_exhibitions/44.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/45.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/46.png',
    type: 1,
  },
]);

const hItemList = ref([
  {
    url: '../../assets/images/index/international_exhibitions/1.png',
    type: 2,
  },
  {
    url: '../../assets/images/index/international_exhibitions/2.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/3.png',
    type: 3,
  },
  {
    url: '../../assets/images/index/international_exhibitions/4.jpg',
    type: 2,
  },
  {
    url: '../../assets/images/index/international_exhibitions/5.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/6.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/7.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/8.png',
    type: 3,
  },
  {
    url: '../../assets/images/index/international_exhibitions/9.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/10.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/11.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/12.png',
    type: 2,
  },
  {
    url: '../../assets/images/index/international_exhibitions/13.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/14.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/15.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/16.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/17.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/18.png',
    type: 3,
  },
  {
    url: '../../assets/images/index/international_exhibitions/19.png',
    type: 3,
  },
  {
    url: '../../assets/images/index/international_exhibitions/20.png',
    type: 3,
  },
  {
    url: '../../assets/images/index/international_exhibitions/21.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/22.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/23.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/24.png',
    type: 3,
  },
  {
    url: '../../assets/images/index/international_exhibitions/25.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/26.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/27.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/40.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/29.png',
    type: 3,
  },
  {
    url: '../../assets/images/index/international_exhibitions/30.png',
    type: 1,
  },
]);

const hItemListOld = ref([
  {
    url: '../../assets/images/index/international_exhibitions/1.png',
    type: 2,
  },
  {
    url: '../../assets/images/index/international_exhibitions/2.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/3.png',
    type: 3,
  },
  {
    url: '../../assets/images/index/international_exhibitions/4.jpg',
    type: 2,
  },
  {
    url: '../../assets/images/index/international_exhibitions/5.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/6.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/7.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/8.png',
    type: 3,
  },
  {
    url: '../../assets/images/index/international_exhibitions/9.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/10.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/11.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/12.png',
    type: 2,
  },
  {
    url: '../../assets/images/index/international_exhibitions/13.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/14.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/15.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/16.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/17.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/18.png',
    type: 3,
  },
  {
    url: '../../assets/images/index/international_exhibitions/19.png',
    type: 3,
  },
  {
    url: '../../assets/images/index/international_exhibitions/20.png',
    type: 3,
  },
  {
    url: '../../assets/images/index/international_exhibitions/21.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/22.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/23.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/24.png',
    type: 3,
  },
  {
    url: '../../assets/images/index/international_exhibitions/25.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/26.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/27.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/40.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/international_exhibitions/29.png',
    type: 3,
  },
  {
    url: '../../assets/images/index/international_exhibitions/30.png',
    type: 1,
  },
]);

const photoWall = ref(null);
const photoWallOld = ref(null);
const hPhotoWall = ref(null);
const hPhotoWallOld = ref(null);

const changeImg = () => {
  let Arr = [];
  let hArr = [];
  let add = 0;

  while (add < 3) {
    const num = Math.floor(46 * Math.random());
    if (Arr.indexOf(num) == -1 && itemList.value[num].type === 1) {
      Arr.push(num);
      add++;
    }
  }

  add = 0;
  while (add < 3) {
    const num = Math.floor(30 * Math.random());
    if (hArr.indexOf(num) == -1 && hItemList.value[num].type === 1) {
      hArr.push(num);
      add++;
    }
  }
  const a = itemListOld.value[Arr[0]];
  itemListOld.value[Arr[0]] = itemListOld.value[Arr[1]];
  itemListOld.value[Arr[1]] = itemListOld.value[Arr[2]];
  itemListOld.value[Arr[2]] = a;

  const b = hItemListOld.value[hArr[0]];
  hItemListOld.value[hArr[0]] = hItemListOld.value[hArr[1]];
  hItemListOld.value[hArr[1]] = hItemListOld.value[hArr[2]];
  hItemListOld.value[hArr[2]] = b;
  photoWallOld.value.childNodes[Arr[0] + 1].style.opacity = 0;
  photoWallOld.value.childNodes[Arr[1] + 1].style.opacity = 0;
  photoWallOld.value.childNodes[Arr[2] + 1].style.opacity = 0;
  hPhotoWallOld.value.childNodes[hArr[0] + 1].style.opacity = 0;
  hPhotoWallOld.value.childNodes[hArr[1] + 1].style.opacity = 0;
  hPhotoWallOld.value.childNodes[hArr[2] + 1].style.opacity = 0;

  setTimeout(() => {
    photoWallOld.value.childNodes[Arr[0] + 1].style.opacity = 1;
    photoWallOld.value.childNodes[Arr[1] + 1].style.opacity = 1;
    photoWallOld.value.childNodes[Arr[2] + 1].style.opacity = 1;
    hPhotoWallOld.value.childNodes[hArr[0] + 1].style.opacity = 1;
    hPhotoWallOld.value.childNodes[hArr[1] + 1].style.opacity = 1;
    hPhotoWallOld.value.childNodes[hArr[2] + 1].style.opacity = 1;
  }, 3000);
};
let timer;
onMounted(() => {
  timer = setInterval(() => {
    changeImg();
  }, 1000);
});

onBeforeUnmount(() => {
  clearTimeout(timer);
  timer = null;
});
</script>

<style scoped lang="scss">
.international-exhibitions {
  position: relative;
  .box-title {
    display: none;
  }
  .photo-wall {
    position: relative;
    overflow: hidden;
    display: grid;
    grid-template-rows: 16.666% 16.666% 16.666% 16.666% 16.666% 16.666%;
    grid-template-columns: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
    align-content: top;
    grid-template-areas:
      'a1 a2 a3 a3 a4 a5 a6 a7 a8 a8'
      'a1 a9 a10 a11 a4 a12 a12 a13 a14 a15'
      'a16 a17 a18 a18 a19 a19 a20 a20 a21 a22'
      'a23 a24 a24 a25 a26 a27 a28 a29 a29 a30'
      'a31 a32 a33 a34 a35 a36 a28 a37 a38 a39'
      'a40 a41 a33 a42 a43 a43 a44 a45 a46 a39';
    .photo-item {
      overflow: hidden;
      transition: all 1s ease;
      -moz-transition: all 1s ease; /* Firefox 4 */
      -webkit-transition: all 1s ease; /* Safari and Chrome */
      -o-transition: all 1s ease; /* Opera */
      opacity: 1;
      filter: alpha(opacity=100);
      -moz-opacity: 1;
      -khtml-opacity: 1;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .photo-item:first-child {
      grid-area: a1;
    }
    .photo-item:nth-child(2) {
      grid-area: a2;
    }
    .photo-item:nth-child(3) {
      grid-area: a3;
    }
    .photo-item:nth-child(4) {
      grid-area: a4;
    }
    .photo-item:nth-child(5) {
      grid-area: a5;
    }
    .photo-item:nth-child(6) {
      grid-area: a6;
    }
    .photo-item:nth-child(7) {
      grid-area: a7;
    }
    .photo-item:nth-child(8) {
      grid-area: a8;
    }
    .photo-item:nth-child(9) {
      grid-area: a9;
    }
    .photo-item:nth-child(10) {
      grid-area: a10;
    }
    .photo-item:nth-child(11) {
      grid-area: a11;
    }
    .photo-item:nth-child(12) {
      grid-area: a12;
    }
    .photo-item:nth-child(13) {
      grid-area: a13;
    }
    .photo-item:nth-child(14) {
      grid-area: a14;
    }
    .photo-item:nth-child(15) {
      grid-area: a15;
    }
    .photo-item:nth-child(16) {
      grid-area: a16;
    }
    .photo-item:nth-child(17) {
      grid-area: a17;
    }
    .photo-item:nth-child(18) {
      grid-area: a18;
    }
    .photo-item:nth-child(19) {
      grid-area: a19;
    }
    .photo-item:nth-child(20) {
      grid-area: a20;
    }
    .photo-item:nth-child(21) {
      grid-area: a21;
    }
    .photo-item:nth-child(22) {
      grid-area: a22;
    }
    .photo-item:nth-child(23) {
      grid-area: a23;
    }
    .photo-item:nth-child(24) {
      grid-area: a24;
    }
    .photo-item:nth-child(25) {
      grid-area: a25;
    }
    .photo-item:nth-child(26) {
      grid-area: a26;
    }
    .photo-item:nth-child(27) {
      grid-area: a27;
    }
    .photo-item:nth-child(28) {
      grid-area: a28;
    }
    .photo-item:nth-child(29) {
      grid-area: a29;
    }
    .photo-item:nth-child(30) {
      grid-area: a30;
    }
    .photo-item:nth-child(31) {
      grid-area: a31;
    }
    .photo-item:nth-child(32) {
      grid-area: a32;
    }
    .photo-item:nth-child(33) {
      grid-area: a33;
    }
    .photo-item:nth-child(34) {
      grid-area: a34;
    }
    .photo-item:nth-child(35) {
      grid-area: a35;
    }
    .photo-item:nth-child(36) {
      grid-area: a36;
    }
    .photo-item:nth-child(37) {
      grid-area: a37;
    }
    .photo-item:nth-child(38) {
      grid-area: a38;
    }
    .photo-item:nth-child(39) {
      grid-area: a39;
    }
    .photo-item:nth-child(40) {
      grid-area: a40;
    }
    .photo-item:nth-child(41) {
      grid-area: a41;
    }
    .photo-item:nth-child(42) {
      grid-area: a42;
    }
    .photo-item:nth-child(43) {
      grid-area: a43;
    }
    .photo-item:nth-child(44) {
      grid-area: a44;
    }
    .photo-item:nth-child(45) {
      grid-area: a45;
    }
    .photo-item:nth-child(46) {
      grid-area: a46;
    }
  }

  .bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    .photo-item {
      overflow: hidden;
      transition: all 1s ease;
      -moz-transition: all 1s ease; /* Firefox 4 */
      -webkit-transition: all 1s ease; /* Safari and Chrome */
      -o-transition: all 1s ease; /* Opera */
      opacity: 1;
      filter: alpha(opacity=100);
      -moz-opacity: 1;
      -khtml-opacity: 1;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .h-photo-wall {
    display: none;
  }
  .title {
    position: absolute;
    top: 33.2%;
    left: 20%;
    width: 60%;
    height: 16.66%;
    font-size: 3rem;
    font-weight: bold;
    background-color: rgba($color: #000000, $alpha: 0.75);
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
  }

  .year-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .year {
    width: 10%;
    height: 16.66%;
    font-size: 2rem;
    font-weight: bold;
    color: #ffffff;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .year:first-child {
    position: absolute;
    right: 10%;
    bottom: 16.66%;
  }
  .year:nth-child(2) {
    position: absolute;
    right: 40%;
    bottom: 16.66%;
  }
  .year:nth-child(3) {
    position: absolute;
    left: 10%;
    bottom: 16.66%;
  }
  .year:nth-child(4) {
    position: absolute;
    right: 10%;
    bottom: 66.64%;
  }
  .year:nth-child(5) {
    position: absolute;
    left: 10%;
    bottom: 66.64%;
  }
}

@media only screen and (max-width: 1140px) {
  .international-exhibitions {
    .title {
      font-size: 1.5rem;
      font-weight: bold;
    }
    .year {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
}

@media only screen and (max-width: 750px) {
  .international-exhibitions {
    position: relative;
    .box-title {
      display: block;
    }
    .photo-wall {
      display: none;
    }
    .h-photo-wall {
      height: 100vh;
      overflow: hidden;
      display: grid;
      grid-template-rows: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
      grid-template-columns: 25% 25% 25% 25%;
      align-content: center;
      grid-template-areas:
        'a1 a2 a3 a3'
        'a1 a9 a10 a11 '
        'a4 a5 a6 a7'
        'a4 a12 a12 a13'
        'a8 a8 a14 a15'
        'a16 a17 a18 a18'
        'a19 a19 a20 a20'
        'a21 a22 a24 a24'
        'a23 a25 a26 a27'
        'a28 a29 a29 a30';
      .photo-item {
        overflow: hidden;
        transition: all 1s ease;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .photo-item:first-child {
        grid-area: a1;
      }
      .photo-item:nth-child(2) {
        grid-area: a2;
      }
      .photo-item:nth-child(3) {
        grid-area: a3;
      }
      .photo-item:nth-child(4) {
        grid-area: a4;
      }
      .photo-item:nth-child(5) {
        grid-area: a5;
      }
      .photo-item:nth-child(6) {
        grid-area: a6;
      }
      .photo-item:nth-child(7) {
        grid-area: a7;
      }
      .photo-item:nth-child(8) {
        grid-area: a8;
      }
      .photo-item:nth-child(9) {
        grid-area: a9;
      }
      .photo-item:nth-child(10) {
        grid-area: a10;
      }
      .photo-item:nth-child(11) {
        grid-area: a11;
      }
      .photo-item:nth-child(12) {
        grid-area: a12;
      }
      .photo-item:nth-child(13) {
        grid-area: a13;
      }
      .photo-item:nth-child(14) {
        grid-area: a14;
      }
      .photo-item:nth-child(15) {
        grid-area: a15;
      }
      .photo-item:nth-child(16) {
        grid-area: a16;
      }
      .photo-item:nth-child(17) {
        grid-area: a17;
      }
      .photo-item:nth-child(18) {
        grid-area: a18;
      }
      .photo-item:nth-child(19) {
        grid-area: a19;
      }
      .photo-item:nth-child(20) {
        grid-area: a20;
      }
      .photo-item:nth-child(21) {
        grid-area: a21;
      }
      .photo-item:nth-child(22) {
        grid-area: a22;
      }
      .photo-item:nth-child(23) {
        grid-area: a23;
      }
      .photo-item:nth-child(24) {
        grid-area: a24;
      }
      .photo-item:nth-child(25) {
        grid-area: a25;
      }
      .photo-item:nth-child(26) {
        grid-area: a26;
      }
      .photo-item:nth-child(27) {
        grid-area: a27;
      }
      .photo-item:nth-child(28) {
        grid-area: a28;
      }
      .photo-item:nth-child(29) {
        grid-area: a29;
      }
      .photo-item:nth-child(30) {
        grid-area: a30;
      }
    }

    .title {
      // position: absolute;
      // padding: 0 1rem;
      // top: 40%;
      // left: 25%;
      // width: 50%;
      // height: 13.2%;
      // font-size: 1.5rem;
      // font-weight: bold;
      // background-color: rgba(0, 0, 0, 0.75);
      // color: #ffffff;
      // display: flex;
      // justify-content: center;
      // align-items: center;
      display: none;
    }

    .year-box {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    .year {
      width: 25%;
      height: 6.66%;
      font-size: 1.5rem;
      font-weight: bold;
      color: #ffffff;
      z-index: 9;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .year:first-child {
      position: absolute;
      right: 25%;
      bottom: 10%;
    }
    .year:nth-child(2) {
      position: absolute;
      right: 25%;
      bottom: 36%;
    }
    .year:nth-child(3) {
      position: absolute;
      left: 25%;
      bottom: 36%;
    }
    .year:nth-child(4) {
      position: absolute;
      right: 25%;
      bottom: 70%;
    }
    .year:nth-child(5) {
      position: absolute;
      left: 25%;
      bottom: 70%;
    }
  }
}

@keyframes close {
  0% {
    opacity: 1;
    filter: alpha(opacity=100);
    -moz-opacity: 1;
    -khtml-opacity: 1;
  }
  100% {
    opacity: 0;
    filter: alpha(opacity=0);
    -moz-opacity: 0;
    -khtml-opacity: 0;
  }
}
@keyframes show {
  0% {
    opacity: 0;
    filter: alpha(opacity=0);
    -moz-opacity: 0;
    -khtml-opacity: 0;
  }
  100% {
    opacity: 1;
    filter: alpha(opacity=100);
    -moz-opacity: 1;
    -khtml-opacity: 1;
  }
}
</style>
