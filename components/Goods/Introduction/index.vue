<template>
  <div class="information_view">
    <div class="product_detail">
      <h3 class="product_detail_title">Product details</h3>
      <div class="product_detail_list">
        <div class="product_detail_list_item">
          <div
            class="product_detail_list_item_control"
            v-for="(item, key) in state.details"
            :key="key"
          >
            <p class="product_detail_list_item_control_label">{{item.label}}</p>
            <p class="product_detail_list_item_control_input">{{item.value}}</p>
          </div>
        </div>
        <div class="product_detail_list_item">
          <div
            class="product_detail_list_item_control"
            v-for="(item, key) in state.details1"
            :key="key"
          >
            <p class="product_detail_list_item_control_label">{{item.label}}</p>
            <p class="product_detail_list_item_control_input">{{item.value}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="authentication_view">
      <h3 class="authentication_view_title">AUTHENTICATION</h3>
      <div class="authentication_view_main">
        <div class="authentication_view_main_product">
          <h3 class="authentication_view_main_product_title">Product<br/>certification</h3>
          <div class="authentication_view_main_product_list">
            <img
              src="@/assets/images/goods/product1.png"
              class="authentication_view_main_product_list_item"
            />
            <img
              src="@/assets/images/goods/product2.png"
              class="authentication_view_main_product_list_item"
            />
          </div>
        </div>
        <div class="authentication_view_main_factory">
          <h3 class="authentication_view_main_factory_title">Factory qualification</h3>
          <h4 class="authentication_view_main_factory_subtitle">BSCI, SG, BSI,ISO9001,ISO14001</h4>
          <div class="authentication_view_main_factory_list">
            <img
              src="@/assets/images/goods/factory.jpeg"
              class="authentication_view_main_factory_list_item"
            />
            <img
              src="@/assets/images/goods/factory.jpeg"
              class="authentication_view_main_factory_list_item"
            />
            <img
              src="@/assets/images/goods/factory.jpeg"
              class="authentication_view_main_factory_list_item"
            />
            <img
              src="@/assets/images/goods/factory.jpeg"
              class="authentication_view_main_factory_list_item"
            />
            <img
              src="@/assets/images/goods/factory.jpeg"
              class="authentication_view_main_factory_list_item"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="selling_view">
      <h3 class="selling_view_title">Product selling point display</h3>
      <img
        src="@/assets/images/goods/selling.jpeg"
        class="selling_view_img"
      />
      <div class="selling_view_other">
        <img
          class="selling_view_other_img"
          src="@/assets/images/goods/sell.jpeg"
        />
        <div class="selling_view_other_main">
          <h3 class="selling_view_other_main_title">OUR HIghlights</h3>
          <p class="selling_view_other_main_subtitle">A free product shooting for new customers.</p>
          <p class="selling_view_other_main_desc">Free of charge for each helmet for new customers <br/>A set of black hot pressing process lining.</p>
        </div>
      </div>
      <div class="selling_view_service">
        <h3 class="selling_view_service_title">SERVICE</h3>
        <div class="selling_view_service_list">
          <div class="selling_view_service_list_item">
            <img
              src="@/assets/images/goods/kefu.png"
              class="selling_view_service_list_item_icon"
            />
            <p class="selling_view_service_list_item_desc">Sales team 24 <br/>hours stand by</p>
          </div>
          <div class="selling_view_service_list_item">
            <img
              src="@/assets/images/goods/free.png"
              class="selling_view_service_list_item_icon"
            />
            <p class="selling_view_service_list_item_desc">Free samples offered for all <br/>of our samples (the 1st time)</p>
          </div>
          <div class="selling_view_service_list_item">
            <img
              src="@/assets/images/goods/photo.png"
              class="selling_view_service_list_item_icon"
            />
            <p class="selling_view_service_list_item_desc">Free professional photographic for our <br/>customers(odm customers)</p>
          </div>
          <div class="selling_view_service_list_item">
            <img
              src="@/assets/images/goods/dollar.png"
              class="selling_view_service_list_item_icon"
            />
            <p class="selling_view_service_list_item_desc">Free extra pads offered to <br/>all of our customers</p>
          </div>
        </div>
      </div>
    </div>
    <div class="packing_view">
      <h3 class="packing_view_title">PACKING</h3>
      <div class="packing_view_list">
        <div class="packing_view_list_item">
          <p class="packing_view_list_item_desc">HELMET BAG</p>
          <img
            src="@/assets/images/goods/packstep1.png"
            class="packing_view_list_item_img"
          />
        </div>
        <div class="packing_view_list_item">
          <p class="packing_view_list_item_desc">HEADCARD</p>
          <img
           src="@/assets/images/goods/packstep2.png"
            class="packing_view_list_item_img"
          />
        </div>
        <div class="packing_view_list_item">
          <p class="packing_view_list_item_desc">COLOR BOX</p>
          <img
           src="@/assets/images/goods/packstep3.png"
            class="packing_view_list_item_img"
          />
        </div>
        <div class="packing_view_list_item">
          <p class="packing_view_list_item_desc">CARTON BOX</p>
          <img
           src="@/assets/images/goods/packstep4.png"
            class="packing_view_list_item_img"
          />
        </div>
      </div>
    </div>
    <div class="logistics_view">
      <h3 class="logistics_view_title">OUR LOGISTICS WAYS</h3>
      <img
        src="@/assets/images/goods/logistics.jpeg"
        class="logistics_view_banner"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
const state = reactive({
  details: [
    {
      label: 'Place of Origin',
      value: 'Zhejiang, China'
    },
    {
      label: 'Model Number',
      value: 'HE-008'
    },
    {
      label: 'Used For',
      value: 'ADULTS/YOUTH/KIDS'
    },
    {
      label: 'Size(cm)',
      value: 'M(55-59)'
    },
    {
      label: 'Technology',
      value: 'In-mold'
    },
    {
      label: 'Weight',
      value: '250g'
    },
    {
      label: 'Air Vents',
      value: '22'
    },
    {
      label: 'Dimmersion(cm)',
      value: 'L27.5cm      W21.5cm   H16cm'
    },
    {
      label: 'Sizing System',
      value: '4# HC ADJUSTER'
    }
  ],
  details1: [
    {
      label: 'Color',
      value: 'Customized'
    },
    {
      label: 'Pads',
      value: 'Hot pressing pads'
    },
    {
      label: 'OEM&ODM',
      value: 'YES AND WELCOME'
    },
    {
      label: 'Ideal for',
      value: 'ROAD/SKATEBOARD'
    },
    {
      label: 'Special Feature ',
      value: '1.removable, washable and antibacterial pads'
    },
    {
      label: '',
      value: '2.removable Peak/Visor'
    },
    {
      label: '',
      value: '3.22 large vents with airflow channels'
    },
    {
      label: '',
      value: '4.removable,washable and antibacterial pads'
    },
    {
      label: '',
      value: '5.aerodyamic'
    },
  ]
})
</script>
<style scoped lang="scss">
  @import './index.scss';
</style>