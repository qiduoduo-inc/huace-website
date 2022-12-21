<template>
  <div class="contact-us container-fluid">
    <div class="box-title">
      <p>CONTACT US</p>
    </div>
    <div class="center-img pc-show">
      <img src="@/assets/images/index/contact_us/1.png" alt="" />
    </div>
    <div class="row pc-show">
      <div class="left-box col-6">
        <div class="content">
          <p class="title">HELMET SOURCING</p>
          <p class="number">2022</p>
          <p class="detail">
            We‘d love to hear from you! Send us a message using the opposite, or
            email us.
          </p>
          <div class="btn" @click="showDialog">
            Get A Quote
            <img src="@/assets/images/index/contact_us/2.png" alt="" />
          </div>
        </div>
      </div>
      <div class="right-box col-6">
        <div class="content">
          <p class="small-title">SUBSCRIBE NEWSLETTER</p>
          <p class="title">GET CATALOGE TODAY!</p>
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
            Your personal details are strictly for our use,and you can
            unsubscribe at any time
          </p>
        </div>
      </div>
    </div>

    <div class="h5-show">
      <div class="top-box">
        <div class="content">
          <p class="title">HELMET SOURCING</p>
          <p class="number">2022</p>
          <p class="detail">
            We‘d love to hear from you! Send us a message using the opposite, or
            email us.
          </p>
          <div class="btn" @click="showDialog">
            Get A Quote
            <img src="@/assets/images/index/contact_us/2.png" alt="" />
          </div>
        </div>
      </div>
      <div class="bottom-box">
        <div class="content">
          <p class="small-title">SUBSCRIBE NEWSLETTER</p>
          <p class="title">GET CATALOGE TODAY!</p>
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
            Your personal details are strictly for our use,and you can
            unsubscribe at any time
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { isEmail } from '@/utils/validator';
import { message } from 'ant-design-vue';

const emit = defineEmits(['showDialog']);
const showDialog = () => {
  emit('showDialog', true);
};
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
.contact-us {
  position: relative;
  background: linear-gradient(to right, #e2e2e2, #ffffff, #eef0f1);
  background: -webkit-linear-gradient(to right, #e2e2e2, #ffffff, #eef0f1);
  background: -o-linear-gradient(to right, #e2e2e2, #ffffff, #eef0f1);
  background: -ms-linear-gradient(to right, #e2e2e2, #ffffff, #eef0f1);
  background: -moz-linear-gradient(to right, #e2e2e2, #ffffff, #eef0f1);
  overflow: hidden;

  .box-title {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%); /* for Chrome || Safari */
    -moz-transform: translateX(-50%); /* for Firefox */
    -ms-transform: translateX(-50%); /* for IE */
    -o-transform: translateX(-50%); /* for Opera */
  }

  .center-img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%); /* for Chrome || Safari */
    -moz-transform: translate(-50%, -50%); /* for Firefox */
    -ms-transform: translate(-50%, -50%); /* for IE */
    -o-transform: translate(-50%, -50%); /* for Opera */
    width: 10rem;
    height: 10rem;
    img {
      width: 100%;
    }
  }
  .left-box {
    background-color: rgba(0, 0, 0, 4%);
    padding: 12rem 0 8rem 4rem;
    display: flex;
    align-items: center;
    .content {
      color: #000000;
      .title {
        font-size: 3.75rem;
        font-weight: bold;
        line-height: 3.75rem;
      }
      .number {
        font-size: 6.25rem;
        font-weight: bold;
        line-height: 6.25rem;
        margin-bottom: 1rem;
      }
      .detail {
        font-size: 1.25rem;
        width: 25rem;
      }

      .btn {
        background-color: #f0831e;
        color: #ffffff;
        font-size: 1.25rem;
        font-weight: bold;
        margin-top: 10rem;
        padding: 0.5rem 1rem;
        cursor: pointer;
        border-radius: 0;
        -moz-border-radius: 0;
        -webkit-border-radius: 0;
        img {
          margin-left: 0.5rem;
          width: 1rem;
        }
      }
    }
  }

  .right-box {
    display: flex;
    justify-content: flex-end;
    padding: 12rem 4rem 8rem 4rem;
    .content {
      margin-left: 10rem;
      .small-title {
        font-size: 1.5rem;
        font-weight: bold;
        line-height: 1.5rem;
      }
      .title {
        font-size: 3.75rem;
        font-weight: bold;
        line-height: 3.75rem;
        margin: 1rem 0;
        margin-bottom: 1rem;
        padding-right: 0.5rem;
      }
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
    }
  }

  .h5-show {
    display: none;
  }
}
@media only screen and (max-width: 960px) {
  .contact-us {
    .left-box {
      padding: 6rem 0 4rem 2rem;
      .content {
        .title {
          font-size: 1rem;
          font-weight: bold;
        }
        .number {
          font-size: 2rem;
          font-weight: bold;
          line-height: 2rem;
        }
        .detail {
          font-size: 0.5rem;
          width: 20rem;
        }

        .btn {
          font-size: 0.4rem;
        }
      }
    }

    .right-box {
      padding: 6rem 2rem 4rem 2rem;
      .content {
        .small-title {
          font-size: 1rem;
          font-weight: bold;
        }
        .title {
          font-size: 2rem;
          font-weight: bold;
          line-height: 2rem;
          margin: 0;
          margin-bottom: 1rem;
        }
        .input-box {
          height: 2rem;
          input {
            border: none;
            width: 8rem;
            height: 1.5rem;
            padding-left: 1rem;
          }
          .btn {
            font-size: 0.5rem;
          }
        }
        .message {
          font-size: 0.5rem;
        }
      }
    }
  }
}
@media only screen and (max-width: 750px) {
  .contact-us {
    .box-title {
      position: static;
      transform: translateX(0);
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
    }
    .pc-show {
      display: none;
    }

    .h5-show {
      display: block;

      .top-box {
        width: 100%;
        padding: 1rem 0 4rem 2rem;
        .content {
          color: #000000;
          .title {
            font-size: 1.4rem;
            font-weight: bold;
            line-height: 1.4rem;
            margin-bottom: 0.5rem;
          }
          .number {
            font-size: 1.4rem;
            font-weight: bold;
            line-height: 1.4rem;
            margin-bottom: 1rem;
          }
          .detail {
            font-size: 1rem;
          }

          .btn {
            background-color: #f0831e;
            color: #ffffff;
            font-size: 1rem;
            font-weight: bold;
            margin-top: 2rem;
            padding: 0.5rem 1rem;
            cursor: pointer;
            border-radius: 0;
            -moz-border-radius: 0;
            -webkit-border-radius: 0;
            img {
              margin-left: 0.2rem;
              width: 1rem;
            }
          }
        }
      }
      .bottom-box {
        padding: 1rem 2rem 4rem 2rem;
        width: 100%;
        .content {
          margin-left: 。5rem;
          .small-title {
            font-size: 1rem;
            font-weight: bold;
            line-height: 1rem;
          }
          .title {
            font-size: 1.4rem;
            font-weight: bold;
            line-height: 1.4rem;
            margin: 1rem 0;
            margin-bottom: 1rem;
          }
          .input-box {
            border: 2px #000000 solid;
            width: 100%;
            height: 2.8rem;
            margin-left: 0.1rem;
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
              font-size: 1rem;
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
        }
      }
    }
  }
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
</style>
