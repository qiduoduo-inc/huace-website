<!--
 * @Author: 王鑫
 * @Description: 
 * @Date: 2022-09-14 10:50:56
-->
<template>
  <HomeHeaderSwiper @show-dialog="showFDialog" />
  <HomeTiers @show-dialog="showFDialog" />
  <HomeWhyChoose />
  <HomeFeaturedProducts />
  <HomeProductsCategories />
  <HomeAboutUs />
  <HomePatentWall />
  <HomeCertifcations />
  <HomeEcoFriendly />
  <HomeInternationalExhibitions />
  <HomeTestimonials />
  <HomeContactUs @show-dialog="showFDialog" ref="contactus" id="contactUs" />
  <Footer />
  <FixedFooter v-if="showContact" />
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

const showContact = ref<boolean>(true);

const handleScroll1 = () => {
  let scroll = document.documentElement.scrollTop || document.body.scrollTop;
  let elOffsetTop = document.getElementById('contactUs').offsetTop;
  let elclientHeight = document.getElementById('contactUs').clientHeight;
  if (elOffsetTop - elclientHeight < scroll) {
    showContact.value = false;
  }
  if (scroll <= elOffsetTop - elclientHeight) {
    showContact.value = true;
  }
};

onMounted(() => {
  if (process.client) {
    window.addEventListener('scroll', handleScroll1, true);
  }
});
</script>
<style lang="scss" scoped></style>
