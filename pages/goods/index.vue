<template>
  <div class="goods_view">
    <Header />
    <div class="goods_view_detail" v-if="checked === 0">
      <div class="goods_view_detail_banners"></div>
      <div class="goods_view_detail_info">
        <h3 class="goods_view_detail_info_title">Huace EN 1078 GB24429 22 Air Vents 250g Lightweight Mountain Bike MTB Helmet</h3>
      </div>
    </div>
    <div class="goods_view_banner" v-if="checked === 1">
      <p class="goods_view_banner_desc">
        Huace EN 1078 GB24429<br />
        Mountain Bike MTB Helmet
      </p>
      <img
        src="@/assets/images/goods/goods.jpeg"
        class="goods_view_banner_img"
      />
      <div class="goods_view_banner_list">
        <img
          v-for="item in state.bannerList"
          :key="item"
          src="@/assets/images/goods/goods_img1.png"
          class="goods_view_banner_list_item"
          :class="{ active: item == state.activeBanner }"
        />
      </div>
      <div class="goods_view_banner_descirbe">
        <img
          src="@/assets/images/goods/transform.png"
          class="goods_view_banner_descirbe_transform"
        />
        <div class="goods_view_banner_descirbe_info">
          <p class="goods_view_banner_descirbe_info_label">Air Vents</p>
          <p class="goods_view_banner_descirbe_info_value">22</p>
          <p class="goods_view_banner_descirbe_info_label">weight</p>
          <p class="goods_view_banner_descirbe_info_value">250g</p>
          <p class="goods_view_banner_descirbe_info_label">aerodynamics</p>
          <div class="goods_view_banner_descirbe_info_stars">
            <img
              v-for="item in state.stars"
              :key="item"
              src="@/assets/images/goods/star.png"
              class="goods_view_banner_descirbe_info_stars_item"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="goods_view_tabs">
      <div class="goods_view_tabs_btn introduction" :class="{ checked: checked === 0 }" @click="tabClick(0)">
        <span>Product introduction</span>
      </div>
      <div class="goods_view_tabs_btn profile" :class="{ checked: checked === 1 }" @click="tabClick(1)">
        <span>Company Profile</span>
      </div>
    </div>
    <GoodsIntroduction v-if="checked === 0" />
    <GoodsCompany v-if="checked === 1" />
    <Footer />
  </div>
</template>
<script setup lang="ts">
const state = reactive({
  stars: [1,2,3,4],
  bannerList: [1,2,3,4],
  activeBanner: 1
});
const checked = ref(0);
const tabClick = (key: number) => {
  checked.value = key;
};
</script>
<style lang="scss" scoped>
  @import './scss/index.scss';
</style>
