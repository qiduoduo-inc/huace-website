<!--
 * @Author: 王鑫
 * @Description: 
 * @Date: 2022-09-14 10:50:56
-->
<template>
  <HomeHeaderSwiper @show-dialog="showFDialog" />
  <HomeTiers />
  <HomeWhyChoose />
  <HomeFeaturedProducts />
  <HomeProductsCategories />
  <HomeAboutUs />
  <HomePatentWall />
  <HomeCertifcations />
  <HomeEcoFriendly />
  <HomeInternationalExhibitions />
  <HomeTestimonials />
  <HomeContactUs @show-dialog="showFDialog" />
  <Footer />
  <QuoteDialog :show-dialog="showDialog" @cancel-dialog="cancelDialog" />
</template>

<script setup lang="ts">
const showDialog = ref<false>(false);

const showFDialog = (value) => {
  showDialog.value = value;
};

const cancelDialog = (value) => {
  showDialog.value = value;
};
</script>
<style lang="scss" scoped></style>
