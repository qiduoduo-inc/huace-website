<!--
 * @Author: 王鑫
 * @Description: 
 * @Date: 2022-12-21 21:36:07
-->
<template>
  <div class="fixed-footer container-fluid">
    <div class="pc row justify-content-between">
      <div class="col-3 left-box">
        <p class="small-title">SUBSCRIBE NEWSLETTER</p>
        <p class="title">GET CATALOGE TODAY!</p>
      </div>
      <div class="col-4 right-box">
        <div
          class="input-box row text-center"
          :class="{ 'err-message': isFEmail }"
        >
          <input
            class="col"
            type="text"
            placeholder="Enter your email"
            v-model="email"
          />
          <div class="btn col-4" @click="submit">Subscribe</div>
        </div>
        <p class="message">
          Your personal details are strictly for our use,and you can unsubscribe
          at any time
        </p>
      </div>
    </div>
    <div class="h5">
      <div class="top-box">
        <p class="title">GET CATALOGE TODAY!</p>
      </div>
      <div class="bottom-box">
        <div
          class="input-box row text-center"
          :class="{ 'err-message': isFEmail }"
        >
          <input
            class="col"
            type="text"
            placeholder="Enter your email"
            v-model="email"
          />
          <div class="btn col-4" @click="submit">Subscribe</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { isEmail } from '@/utils/validator';
import { message } from 'ant-design-vue';

const email = ref<string>('');
const isFEmail = ref<boolean>(false);
watch(email, (val) => {
  isFEmail.value = !isEmail(val);
});

const submit = () => {
  isFEmail.value = !isEmail(email.value);
  if (isFEmail.value) return;
  message.success('Success');
};
</script>

<style scoped lang="scss">
.fixed-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  padding: 1rem 6.25rem;
  z-index: 99999;
  box-shadow: 10px 10px 24px #000000;
  animation: bottom2top 1s;

  .pc {
    .left-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .small-title {
        font-size: 1.5rem;
        font-weight: bold;
        line-height: 2rem;
      }
      .title {
        font-size: 2.5rem;
        font-weight: bold;
        line-height: 3rem;
      }
    }
    .right-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .input-box {
        border: 2px #000000 solid;
        width: 100%;
        height: 3rem;
        margin-left: 0.1rem;
        font-size: 1.25rem;
        input {
          border: none;
          width: 8rem;
          height: 2.5rem;
          padding-left: 1rem;
        }
        input:focus {
          outline: none;
        }
        .btn {
          border-radius: 0;
          -moz-border-radius: 0;
          -webkit-border-radius: 0;
          background-color: #f0831e;
          color: #ffffff;
          font-size: 1.25rem;
          line-height: 1rem;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .message {
        color: #999999;
        font-size: 1rem;
        margin-top: 1rem;
      }
      .err-message {
        position: relative;
        transition: all 1s;
      }
      .err-message::after {
        content: '* email adrress is invalid';
        color: red;
        position: absolute;
        font-size: 1rem;
        top: 100%;
        left: 0;
        white-space: nowrap;
      }
    }
  }

  .h5 {
    display: none;
  }
}

@media only screen and (max-width: 1920px) {
  .fixed-footer {
    .pc {
      .left-box {
        .small-title {
          font-size: 1.25rem;
        }
        .title {
          font-size: 2rem;
        }
      }
      .right-box {
        .input-box {
          height: 2.5rem;
          input {
            height: 2rem;
          }
        }
        .btn {
          font-size: 1rem;
        }
        .message {
          font-size: 0.8rem;
        }
        .err-message::after {
          font-size: 0.8rem;
        }
      }
    }
  }
}

@media only screen and (max-width: 1500px) {
  .fixed-footer {
    .pc {
      .left-box {
        .small-title {
          font-size: 1rem;
        }
        .title {
          font-size: 1.5rem;
        }
      }
      .right-box {
        .input-box {
          height: 2.25rem;
          input {
            height: 1.75rem;
          }
        }
        .btn {
          font-size: 0.75rem;
        }
        .message {
          font-size: 0.6rem;
        }
        .err-message::after {
          font-size: 0.6rem;
        }
      }
    }
  }
}

@media only screen and (max-width: 1380px) {
  .fixed-footer {
    .pc {
      .right-box {
        .message {
          font-size: 0.4rem;
          white-space: nowrap;
        }
        .err-message::after {
          font-size: 0.4rem;
        }
      }
    }
  }
}

@media only screen and (max-width: 1180px) {
  .fixed-footer {
    padding: 0.5rem 6.25rem;
    .pc {
      .left-box {
        .small-title {
          font-size: 0.75rem;
          line-height: 1rem;
        }
        .title {
          font-size: 1.25rem;
          line-height: 1.5rem;
        }
      }
      .right-box {
        .input-box {
          height: 1.25rem;
          input {
            font-size: 0.7rem;
            height: 0.75rem;
          }
        }
        .btn {
          height: 1rem;
          font-size: 0.75rem;
        }
        .message {
          font-size: 0.4rem;
          line-height: 0.4rem;
        }
      }
    }
  }
}

@media only screen and (max-width: 750px) {
  .fixed-footer {
    padding: 0.5rem 1rem;
    .pc {
      display: none;
    }

    .h5 {
      display: block;
      .top-box {
        .small-title {
          font-size: 0.8125rem;
          font-weight: bold;
          line-height: 1rem;
        }
        .title {
          font-size: 1.06rem;
          font-weight: bold;
          line-height: 2rem;
          margin-bottom: 0.5rem;
        }
      }
      .bottom-box {
        .input-box {
          border: 2px #000000 solid;
          width: 100%;
          height: 2.5rem;
          margin-left: 0.1rem;
          font-size: 0.75rem;
          input {
            border: none;
            width: 8rem;
            height: 2.25rem;
            padding-left: 1rem;
          }
          input:focus {
            outline: none;
          }
          .btn {
            border-radius: 0;
            -moz-border-radius: 0;
            -webkit-border-radius: 0;
            background-color: #f0831e;
            color: #ffffff;
            font-size: 0.8125rem;
            line-height: 1rem;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
        .message {
          color: #999999;
          font-size: 0.75rem;
          margin-top: 1rem;
        }
        .err-message {
          position: relative;
          transition: all 1s;
        }
        .err-message::after {
          content: '* email adrress is invalid';
          color: red;
          position: absolute;
          font-size: 0.75rem;
          top: 110%;
          left: 0;
          white-space: nowrap;
        }
      }
    }
  }
}

@keyframes bottom2top {
  0% {
    opacity: 0.3;
    filter: alpha(opacity=30);
    -moz-opacity: 0.3;
    -khtml-opacity: 0.3;
    transform: translateY(100vh);
    -webkit-transform: translateY(100vh); /* for Chrome || Safari */
    -moz-transform: translateY(100vh); /* for Firefox */
    -ms-transform: translateY(100vh); /* for IE */
    -o-transform: translateY(100vh); /* for Opera */
  }
  100% {
    opacity: 1;
    filter: alpha(opacity=100);
    -moz-opacity: 1;
    -khtml-opacity: 1;
    transform: translateY(0);
    -webkit-transform: translateY(0); /* for Chrome || Safari */
    -moz-transform: translateY(0); /* for Firefox */
    -ms-transform: translateY(0); /* for IE */
    -o-transform: translateY(0); /* for Opera */
  }
}
</style>
