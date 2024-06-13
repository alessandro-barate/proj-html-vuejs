<script>
import { store } from "../store";
export default {
  name: "AppHeader",
  data() {
    return { store };
  },
  props: {},
};
</script>
<template>
  <header
    class="py-3 bg-invisible position-fixed start-0 end-0"
    :class="{ bg: store.scroll }"
  >
    <nav class="navbar">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img
            src="/img/logo.png"
            alt="Logo"
            width="100px"
            class="d-inline-block align-text-top"
          />
        </a>
        <ul class="navbar-nav list-group-horizontal">
          <li class="mx-3 nav-item">
            <router-link :to="{ name: 'Home' }" class="fw-bold linkheader">
              Home
            </router-link>
          </li>
          <li class="mx-3 nav-item">
            <router-link :to="{ name: 'AboutUs' }" class="fw-bold linkheader">
              About Us
            </router-link>
          </li>

          <li class="mx-3 nav-item">
            <router-link :to="{ name: '' }" class="fw-bold linkheader">
              Portfolio
            </router-link>
          </li>
          <li class="mx-3 nav-item">
            <router-link :to="{ name: '' }" class="fw-bold linkheader">
              Our Process
            </router-link>
          </li>
          <li class="mx-3 nav-item">
            <router-link :to="{ name: '' }" class="fw-bold linkheader">
              Pricing
            </router-link>
          </li>
          <li class="mx-3 nav-item">
            <router-link :to="{ name: '' }" class="fw-bold linkheader">
              Blog
            </router-link>
          </li>
          <li class="mx-3 nav-item">
            <router-link :to="{ name: 'Contact' }" class="fw-bold linkheader">
              Contact
            </router-link>
          </li>
          <button class="buttonHeader"><span>Get a quote</span></button>
        </ul>
      </div>
    </nav>
  </header>
</template>
<style scoped lang="scss">
header {
  z-index: 80;
}
.bg-invisible {
  background-color: transparent;
}
.bg {
  background-color: #260262;
}
.linkheader {
  text-decoration: none;
  color: white;
  display: block;
  align-self: center;
  &:hover {
    color: #ff7a1f;
  }
}
.nav-item {
  display: flex;
  align-items: center;
}

.buttonHeader {
  border-radius: 100px;
  font-size: 18px;
  font-weight: 600;
  width: 200px;
  height: 50px;
  display: inline-block;
  color: black;
  border: none;

  transition: all 0.5s;

  background-color: #ffdfec;

  &:hover {
    background-color: transparent;
  }

  span {
    border-radius: 100px;
    background-color: transparent;
    transition: all 0.5s;
  }
  &:hover {
    border: none;

    span {
      padding: 14px 49px;
      transition: all 0.2s;

      border-radius: 100px;
      background-color: transparent;
      color: white;
      border: 1px solid white;
    }
  }
}
</style>
