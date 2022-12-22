<!--
 * @Author: 王鑫
 * @Description: 
 * @Date: 2022-12-16 18:23:51
-->
<template>
  <nav class="header navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><img src="/images/header/logo.png" alt=""
      /></a>
      <button
        class="navbar-toggler"
        style="border: none; color: #ffffff; display: none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          class="bi"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          ></path>
        </svg>
      </button>
      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
        style="justify-content: flex-end"
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="display: none">
          <li class="menu-item nav-item">
            <div class="header-logo">
              <a class="nav-link active item" aria-current="page" href="#"
                >Home</a
              >
            </div>
          </li>
          <li class="menu-item nav-item dropdown">
            <a
              class="nav-link dropdown-toggle item"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Products
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="menu-item nav-item">
            <a class="nav-link item" href="#">About Huace</a>
          </li>
          <li class="menu-item nav-item">
            <a class="nav-link item" href="#">Contact us</a>
          </li>
          <li class="menu-item nav-item">
            <a class="nav-link item" href="#">Service</a>
          </li>
        </ul>
        <div class="header-left d-flex">
          <a-button ghost class="header-left-btn" @click="showDialog"
            >QUOTE NOW</a-button
          >
          <!-- <img src="/images/header/uk.png" alt="" />
          <span>EN</span> -->
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
const emit = defineEmits(['showDialog']);
const showDialog = () => {
  emit('showDialog', true);
};
</script>

<style scoped lang="scss">
.header {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.1rem 6.25rem;

  .navbar-brand {
    img {
      height: 4rem;
      max-width: 100%;
    }
  }

  .menu-item {
    .item {
      color: #ffffff;
      font-size: 1.5rem;
      margin-left: 4rem;
      font-weight: bold;
    }
  }
  .header-left {
    // margin-right: 5rem;
    display: flex;
    align-items: center;
    .header-left-btn {
      height: 3rem;
      width: 10rem;
      margin-right: 1.5rem;
      font-size: 1.25rem;
      font-weight: bold;
    }
    img {
      display: none;
      width: 1.5rem;
      height: 1.5rem;
    }
    span {
      display: none;
      color: #cccccc;
      line-height: 1.5rem;
      margin-left: 0.5rem;
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
}

@media only screen and (max-width: 1440px) {
  .header {
    font-size: 1.3rem !important;
    padding: 0.625rem 2.25rem;
    .menu-item {
      font-size: 1.3rem !important;
      .item {
        font-size: 1.3rem !important;
        margin-left: 2rem;
      }
    }

    .header-left {
      .header-left-btn {
        height: 2rem;
        width: 8rem;
        line-height: 1rem;
        font-size: 1rem;
        margin-left: 0;
      }
    }
  }
}

@media only screen and (max-width: 1024px) {
  .header {
    font-size: 1.15rem !important;
    padding: 0.625rem 2.25rem;
    .menu-item {
      font-size: 1.15rem !important;
      .item {
        font-size: 1.15rem !important;
        margin-left: 2rem;
      }
    }

    .header-left {
      .header-left-btn {
        height: 2rem;
        width: 8rem;
        line-height: 1rem;
        font-size: 1rem;
        margin-left: 0;
      }
    }
  }
}

@media only screen and (max-width: 750px) {
  .header {
    background-color: #333333;
    padding: 0.1rem 1rem;
    .navbar-brand {
      margin-left: 1rem;
      img {
        height: 2rem;
        max-width: 100%;
      }
    }
  }
  .menu-item {
    .item {
      font-size: 1rem !important;
      margin-left: 2rem !important;
      font-weight: bold;
    }
  }

  .header-left {
    display: none !important;
  }
}
</style>
