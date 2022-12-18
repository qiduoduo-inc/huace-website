<!--
 * @Author: 王鑫
 * @Description: 
 * @Date: 2022-12-16 18:23:51
-->
<template>
  <div class="header">
    <div class="big-header">
      <div class="header-menu">
        <div class="header-logo">
          <img src="@/assets/images/header/logo.png" alt="" />
        </div>
        <div class="">
          <a href="/" style="margin-left: 60px">Home</a>
          <a-dropdown>
            <a class="ant-dropdown-link" @click.prevent>
              Products
              <DownOutlined />
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <a href="/">xxxx</a>
                </a-menu-item>
                <a-menu-item>
                  <a href="/">xxxx</a>
                </a-menu-item>
                <a-menu-item>
                  <a href="/">xxxx</a>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
          <a href="/">About Huace</a>
          <a href="/">Contact us</a>
          <a href="/">Service</a>
        </div>
      </div>
      <div class="header-left">
        <a-button ghost class="header-left-btn">QUOTE NOW</a-button>
        <img src="@/assets/images/header/uk.png" alt="" />
        <span>EN</span>
      </div>
    </div>
    <div class="small-header"></div>
  </div>
</template>

<script lang="ts" setup>
import { DownOutlined } from '@ant-design/icons-vue';
</script>

<style scoped lang="scss">
.header {
  .big-header {
    height: 90px;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: space-between;

    .header-menu {
      display: flex;
      align-items: center;
      font-size: 24px;
      font-weight: bold;
      .header-logo {
        width: 106px;
        height: 63px;
        margin-left: 100px;
        img {
          width: 100%;
        }
      }
      a {
        color: #ffffff;
        margin-right: 60px;
      }
    }

    .header-left {
      margin-right: 100px;
      display: flex;
      align-items: center;
      .header-left-btn {
        height: 40px;
        width: 165px;
        margin-right: 24px;
        font-size: 20px;
        font-weight: bold;
      }
      img {
        width: 24px;
        height: 24px;
      }
      span {
        color: #cccccc;
        line-height: 24px;
        margin-left: 8px;
        font-size: 24px;
        font-weight: bold;
      }
    }
  }

  .mini-header {
    display: none;
  }
}

@media only screen and (max-width: 750px) {
  .header {
    .big-header {
      display: none;
    }
  }
}
</style>
