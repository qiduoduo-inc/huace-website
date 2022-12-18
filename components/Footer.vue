<!--
 * @Author: 王鑫
 * @Description: 
 * @Date: 2022-12-17 10:28:23
-->
<template>
  <div class="footer">
    <div class="left-box">
      <div class="title">HUACE SPORTS</div>
      <div class="informations">
        <div class="item">
          <img src="@/assets/images/footer/1.png" alt="" />
          <p>CHONGXIAN TOWN, LINPING DIST. HANGZHOU CITY, ZHEJIANG, CHINA.</p>
        </div>
        <div class="item">
          <img
            src="@/assets/images/footer/2.png"
            style="width: 24px; margin-left: 2px"
            alt=""
          />
          <p>+86-571-86275871</p>
        </div>
        <div class="item">
          <img src="@/assets/images/footer/3.png" alt="" />
          <p>XXXX@huacesports.com</p>
        </div>
      </div>
      <div class="patent">Copyright Huace Sports 2022©</div>
    </div>
    <div class="right-box">
      <div class="right-top-box">
        <div class="tab">HOME</div>
        <div class="tab">PRODUCTS</div>
        <div class="follow-us">
          <p>FOLLOW US</p>
          <div class="icon">
            <img src="@/assets/images/footer/4.png" alt="" />
            <img src="@/assets/images/footer/5.png" alt="" />
            <img src="@/assets/images/footer/6.png" alt="" />
          </div>
        </div>
      </div>
      <div class="right-bottom-box">
        <div class="item">
          <img src="@/assets/images/footer/7.png" alt="" />
          CN
        </div>
        <div class="item">
          <img src="@/assets/images/footer/7.png" alt="" />
          EN
        </div>
        <div class="item">
          <img src="@/assets/images/footer/7.png" alt="" />
          FR
        </div>
        <div class="item">
          <img src="@/assets/images/footer/7.png" alt="" />
          DE
        </div>
        <div class="item">
          <img src="@/assets/images/footer/7.png" alt="" />
          KR
        </div>
      </div>
    </div>
    <div id="components-back-top-demo-custom">
      <a-back-top>
        <div class="ant-back-top-inner">
          <img src="@/assets/images/footer/arrow.png" alt="" />
        </div>
      </a-back-top>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.footer {
  height: 425px;
  background-color: #000000;
  color: #ffffff;
  padding: 60px 280px;
  position: relative;
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  .left-box {
    width: 350px;
    height: 280px;
    .title {
      font-size: 32px;
      font-weight: bold;
    }
    .informations {
      .item {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 30px;
        width: 400px;
        img {
          width: 30px;
          margin-right: 8px;
        }
        p {
          width: 340px;
        }
      }
    }

    .patent {
      margin-top: 80px;
      color: #ffffff;
      opacity: 0.65;
    }
  }

  .right-box {
    width: 800px;
    display: flex;
    flex-direction: column;
    position: relative;
    .right-top-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .tab {
        font-size: 24px;
        font-weight: bold;
        position: relative;
        height: 40px;
      }
      .tab:after {
        width: 80px;
        height: 3px;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #ffffff;
        content: '';
      }
      .follow-us {
        height: 50px;
        font-size: 24px;
        font-weight: bold;
        padding-top: 5px;
        .icon {
          margin-top: 20px;
          width: 200px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
    }

    .right-bottom-box {
      position: absolute;
      bottom: 0;
      right: 0;
      display: flex;
      .item {
        margin-left: 20px;
        font-size: 16px;
        img {
          width: 25px;
          height: 15px;
        }
      }
    }
  }
}

#components-back-top-demo-custom {
  .ant-back-top-inner {
    width: 40px;
    height: 40px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: 15px;
    }
  }
}
</style>
