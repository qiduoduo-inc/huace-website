<!--
 * @Author: 王鑫
 * @Description: 
 * @Date: 2022-12-16 18:23:51
-->
<template>
  <nav class="header navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><img src="@/assets/images/header/logo.png" alt=""
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
          <a-button ghost class="header-left-btn">QUOTE NOW</a-button>
          <img src="@/assets/images/header/uk.png" alt="" />
          <span>EN</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.header {
  background-color: rgba(0, 0, 0, 0.5);
  .navbar-brand {
    margin-left: 2rem;
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
    margin-right: 5rem;
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
      width: 1.5rem;
      height: 1.5rem;
    }
    span {
      color: #cccccc;
      line-height: 1.5rem;
      margin-left: .5rem;
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
}

@media only screen and (max-width: 750px) {
  .header {
    background-color: rgba($color: #222222, $alpha: 0.7);
    .navbar-brand {
      margin-left: 2rem;
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
