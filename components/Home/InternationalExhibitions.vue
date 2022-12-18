<template>
  <div class="international-exhibitions">
    <div class="photo-wall">
      <div class="photo-item" v-for="(item, index) in itemList">
        <img :src="item.url" alt="" />
      </div>
    </div>

    <div class="title">
      <p>INTERNATIONAL EXHIBITIONS</p>
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
</template>

<script lang="ts" setup>
const itemList = ref([
  {
    url: '../../assets/images/index/internationalExhibitions/1.png',
    type: 2,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/2.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/3.png',
    type: 3,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/4.png',
    type: 2,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/5.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/6.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/7.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/8.png',
    type: 3,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/9.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/10.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/11.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/12.png',
    type: 2,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/13.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/14.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/15.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/16.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/17.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/18.png',
    type: 3,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/19.png',
    type: 3,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/20.png',
    type: 3,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/21.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/22.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/23.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/24.png',
    type: 3,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/25.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/26.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/27.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/28.png',
    type: 2,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/29.png',
    type: 3,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/30.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/31.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/32.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/33.png',
    type: 2,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/34.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/35.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/36.png',
    type: 2,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/37.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/38.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/39.png',
    type: 2,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/40.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/41.png',
    type: 2,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/42.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/43.png',
    type: 3,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/44.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/45.png',
    type: 1,
  },
  {
    url: '../../assets/images/index/internationalExhibitions/46.png',
    type: 1,
  },
]);

const changeImg = () => {
  let Arr = [];
  let add = 0;
  while (add < 3) {
    const num = Math.floor(46 * Math.random());
    if (Arr.indexOf(num) == -1 && itemList.value[num].type === 1) {
      Arr.push(num);
      add++;
    }
  }

  const a = itemList.value[Arr[0]];
  itemList.value[Arr[0]] = itemList.value[Arr[1]];
  itemList.value[Arr[1]] = itemList.value[Arr[2]];
  itemList.value[Arr[2]] = a;
};

let timer = setInterval(() => {
  changeImg();
}, 3000);

onBeforeUnmount(() => {
  clearTimeout(timer);
  timer = null;
});
</script>

<style scoped lang="scss">
.international-exhibitions {
  position: relative;
  overflow: hidden;
  .photo-wall {
    overflow: hidden;
    width: 1920px;
    height: 900px;
    display: grid;
    grid-template-rows: 150px 150px 150px 150px 150px 150px;
    grid-template-columns: 192px 192px 192px 192px 192px 192px 192px 192px 192px 192px;
    justify-content: center;
    align-content: center;
    grid-template-areas:
      'a1 a2 a3 a3 a4 a5 a6 a7 a8 a8'
      'a1 a9 a10 a11 a4 a12 a12 a13 a14 a15'
      'a16 a17 a18 a18 a19 a19 a20 a20 a21 a22'
      'a23 a24 a24 a25 a26 a27 a28 a29 a29 a30'
      'a31 a32 a33 a34 a35 a36 a28 a37 a38 a39'
      'a40 a41 a33 a42 a43 a43 a44 a45 a46 a39';
    .photo-item {
      overflow: hidden;
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

  .title {
    position: absolute;
    top: 300px;
    left: 384px;
    width: 1152px;
    height: 150px;
    font-size: 82px;
    line-height: 150px;
    font-weight: bold;
    background-color: rgba($color: #000000, $alpha: 0.75);
    color: #ffffff;
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
    width: 192px;
    height: 150px;
    font-size: 50px;
    font-weight: bold;
    color: #ffffff;
    z-index: 9;
    text-align: center;
    line-height: 150px;
  }
  .year:first-child {
    position: absolute;
    right: 192px;
    bottom: 150px;
  }
  .year:nth-child(2) {
    position: absolute;
    right: 768px;
    bottom: 150px;
  }
  .year:nth-child(3) {
    position: absolute;
    left: 192px;
    bottom: 150px;
  }
  .year:nth-child(4) {
    position: absolute;
    right: 192px;
    top: 150px;
  }
  .year:nth-child(5) {
    position: absolute;
    left: 192px;
    top: 150px;
  }
}
</style>
