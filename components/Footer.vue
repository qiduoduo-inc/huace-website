<!--
 * @Author: 王鑫
 * @Description: 
 * @Date: 2022-12-17 10:28:23
-->
<template>
  <div class="footer container-fluid">
    <div class="pc container">
      <div class="row">
        <div class="left-box col">
          <div class="title">HUACE SPORTS</div>
          <div class="informations">
            <div class="item">
              <img src="@/assets/images/footer/1.png" alt="" />
              <p>
                CHONGXIAN TOWN, LINPING DIST. HANGZHOU CITY, ZHEJIANG, CHINA.
              </p>
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
              <p>huacesports@gmail.com</p>
            </div>
          </div>
          <div class="patent">Copyright Huace Sports 2022©</div>
        </div>
        <div class="right-box col">
          <div class="right-top-box row justify-content-between">
            <div class="col-8"></div>
            <!-- <div class="tab col">HOME</div>
            <div class="tab col">PRODUCTS</div> -->
            <div class="follow-us col-4">
              <p>FOLLOW US</p>
              <div class="icon-group row text-center">
                <div class="icon col">
                  <img src="@/assets/images/footer/4.png" alt="" />
                </div>
                <div class="icon col">
                  <img src="@/assets/images/footer/5.png" alt="" />
                </div>
                <div class="icon col">
                  <img src="@/assets/images/footer/6.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="right-bottom-box row">
            <div class="item col">
              <img src="@/assets/images/footer/7.png" alt="" />
              <span>CN</span>
            </div>
            <div class="item col">
              <img src="@/assets/images/footer/7.png" alt="" /><span> EN</span>
            </div>
            <div class="item col">
              <img src="@/assets/images/footer/7.png" alt="" /><span> FR</span>
            </div>
            <div class="item col">
              <img src="@/assets/images/footer/7.png" alt="" /><span> DE</span>
            </div>
            <div class="item col">
              <img src="@/assets/images/footer/7.png" alt="" /><span> KR</span>
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
    </div>
    <div class="h5 container">
      <div class="top-box">
        <div class="title">HUACE SPORTS</div>
        <div class="informations">
          <div class="item">
            <img src="@/assets/images/footer/1.png" alt="" />
            <p>CHONGXIAN TOWN, LINPING DIST. HANGZHOU CITY, ZHEJIANG, CHINA.</p>
          </div>
          <div class="item">
            <img
              src="@/assets/images/footer/2.png"
              alt=""
            />
            <p>+86-571-86275871</p>
          </div>
          <div class="item">
            <img src="@/assets/images/footer/3.png" alt="" />
            <p>huacesports@gmail.com</p>
          </div>
        </div>
      </div>
      <div class="bottom-box">
        <div class="right-top-box">
          <div class="tab">HOME</div>
          <div class="tab">PRODUCTS</div>
          <div class="follow-us">
            <p>FOLLOW US</p>
            <div class="icon-group">
              <div class="icon">
                <img src="@/assets/images/footer/4.png" alt="" />
              </div>
              <div class="icon">
                <img src="@/assets/images/footer/5.png" alt="" />
              </div>
              <div class="icon">
                <img src="@/assets/images/footer/6.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="right-bottom-box row">
          <div class="item col">
            <img src="@/assets/images/footer/7.png" alt="" />
            <span>CN</span>
          </div>
          <div class="item col">
            <img src="@/assets/images/footer/7.png" alt="" /><span> EN</span>
          </div>
          <div class="item col">
            <img src="@/assets/images/footer/7.png" alt="" /><span> FR</span>
          </div>
          <div class="item col">
            <img src="@/assets/images/footer/7.png" alt="" /><span> DE</span>
          </div>
          <div class="item col">
            <img src="@/assets/images/footer/7.png" alt="" /><span> KR</span>
          </div>
        </div>
        <div class="patent">Copyright Huace Sports 2022©</div>
      </div>
      <div id="components-back-top-demo-custom">
        <a-back-top>
          <div class="ant-back-top-inner">
            <img src="@/assets/images/footer/arrow.png" alt="" />
          </div>
        </a-back-top>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.footer {
  background-color: #000000;
  color: #ffffff;
  padding: 4rem 0;
  position: relative;
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  .left-box {
    .title {
      font-size: 2rem;
      font-weight: bold;
    }
    .informations {
      .item {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 2rem;
        font-size: 1rem;
        cursor: pointer;
        img {
          width: 1.875rem;
          margin-right: 0.5rem;
        }
        p {
          width: 20rem;
        }
      }
    }

    .patent {
      font-size: 1rem;
      margin-top: 10rem;
      color: #ffffff;
      opacity: 0.65;
    }
  }

  .right-box {
    position: relative;
    .right-top-box {
      .tab {
        display: none;
        font-size: 1.5rem;
        font-weight: bold;
        position: relative;
        height: 2.5rem;
      }
      .tab:after {
        width: 5rem;
        height: 0.2rem;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #ffffff;
        content: '';
      }
      .follow-us {
        font-size: 1.5rem;
        font-weight: bold;
        .icon-group {
          margin-top: 1rem;
          .icon {
            width: 2.25rem;
            img {
              cursor: pointer;
            }
          }
        }
      }
    }

    .right-bottom-box {
      position: absolute;
      bottom: 0;
      right: 0;
      display: none;
      .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: 1rem;
        font-size: 1rem;
        cursor: pointer;
        img {
          width: 1.5rem;
          height: 0.9rem;
          margin-right: 0.2rem;
        }
      }
    }
  }

  .h5 {
    display: none;
  }
}

#components-back-top-demo-custom {
  .ant-back-top-inner {
    width: 2rem;
    height: 2rem;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 1rem;
    }
  }
}

@media only screen and (max-width: 750px) {
  .footer {
    .pc {
      display: none;
    }

    .h5 {
      display: block;
      padding-left: 1rem;

      .top-box {
        .title {
          font-size: 1rem;
          font-weight: bold;
        }
        .informations {
          .item {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-top: 2rem;
            font-size: .5rem;
            img {
              width: .9rem;
              margin-right: 0.5rem;
            }
            p {
              width: 99%;
            }
          }
        }
      }

      .bottom-box {
        margin-top: 1.5rem;
        position: relative;
        .right-top-box {
          .tab {
            display: none;
            font-size: 1.5rem;
            font-weight: bold;
            position: relative;
            height: 2rem;
            margin-top: 1rem;
          }
          .tab:after {
            width: 8rem;
            height: 0.2rem;
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: #ffffff;
            content: '';
          }
          .follow-us {
            font-size: .75rem;
            margin-top: 1rem;
            font-weight: bold;
            .icon-group {
              margin-top: 1rem;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              .icon {
                width: 1.125rem;
                margin-right: 2rem;
                img {
                  width: 100%;
                }
              }
            }
          }
        }

        .right-bottom-box {
          margin-top: 2rem;
          display: flex;
          .item {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin-left: 1rem;
            font-size: 1rem;
            display: none;
            img {
              width: 1.5rem;
              height: 0.8rem;
              margin-right: 0.1rem;
            }
          }
        }
        .patent {
          margin-top: 2rem;
          color: #ffffff;
          opacity: 0.65;
          font-size: .5rem;
        }
      }
    }
  }
}
</style>
