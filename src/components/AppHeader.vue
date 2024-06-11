<script>
export default {
  name: "AppHeader",
  props: {},
};
</script>
<template>
  <header class="py-3 bg-transparent position-fixed z-3 start-0 end-0">
    <nav class="navbar">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img
            src="../../public/img/logo.png"
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
        </ul>
      </div>
    </nav>
  </header>
</template>
<style scoped lang="scss">
.bg-header-color {
  background-color: #260262;
}
.linkheader {
  text-decoration: none;
  color: white;
  &:hover {
    color: #ff7a1f;
  }
}
</style>
// Portfolio Our Process Pricing Blog
