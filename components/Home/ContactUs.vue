<template>
  <div class="contact-us">
    <div class="box-title">
      <p>CONTACT US</p>
    </div>
    <div class="center-img">
      <img src="@/assets/images/index/contactUs/1.png" alt="" />
    </div>
    <div class="left-box">
      <div class="content">
        <p class="title">HELMET SOURCING</p>
        <p class="number">2022</p>
        <p class="detail">
          We‘d love to hear from you! Send us a message using the opposite, or
          email us.
        </p>
        <div class="btn">
          Get a Quoute
          <img src="@/assets/images/index/contactUs/2.png" alt="" />
        </div>
      </div>
    </div>
    <div class="right-box">
      <div class="content">
        <p class="small-title">SUBSCRIBE NEWSLETTER</p>
        <p class="title">GET CATALOGE TODAY!</p>
        <div class="input-box">
          <input type="text" placeholder="Enter your email" />
          <div class="btn">Subscribe</div>
        </div>
        <p class="message">
          Your personal details are strictly for our use,and you can unsubscribe
          at any time
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.contact-us {
  height: 900px;
  position: relative;
  background: linear-gradient(to right, #e2e2e2, #ffffff, #eef0f1);
  overflow: hidden;
  .box-title {
    padding-top: 80px;
  }

  .center-img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    height: 350px;
    img {
      width: 100%;
    }
  }
  .left-box {
    width: 960px;
    height: 900px;
    background-color: rgba(0, 0, 0, 4%);
    position: absolute;
    left: 0;
    top: 0;
    padding-left: 100px;
    display: flex;
    align-items: center;
    .content {
      width: 510px;
      height: 388px;
      color: #000000;
      .title {
        font-size: 50px;
        font-weight: bold;
        line-height: 75px;
      }
      .number {
        font-size: 100px;
        font-weight: bold;
        line-height: 100px;
        margin-bottom: 20px;
      }
      .detail {
        font-size: 20px;
        width: 475px;
      }

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 50px;
        background-color: #f0831e;
        color: #ffffff;
        font-size: 20px;
        font-weight: bold;
        margin-top: 100px;
        cursor: pointer;
        img {
          margin-left: 8px;
          width: 14px;
        }
      }
    }
  }

  .right-box {
    width: 960px;
    height: 900px;
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .content {
      margin-left: 80px;
      .small-title {
        font-size: 24px;
        font-weight: bold;
      }
      .title {
        width: 500px;
        font-size: 60px;
        font-weight: bold;
        line-height: 65px;
        margin: 10px 0;
        margin-bottom: 20px;
      }
      .input-box {
        display: flex;
        border: 2px #000000 solid;
        width: 600px;
        height: 50px;
        input {
          border: none;
          width: 400px;
          padding-left: 20px;
        }
        .btn {
          width: 200px;
          height: 46px;
          background-color: #f0831e;
          color: #ffffff;
          font-size: 20px;
          line-height: 46px;
          text-align: center;
          cursor: pointer;
        }
      }
      .message {
        color: #999999;
        font-size: 16px;
        margin-top: 20px;
      }
    }
  }
}
</style>
