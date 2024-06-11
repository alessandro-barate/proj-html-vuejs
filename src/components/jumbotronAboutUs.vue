<script>
export default {
  name: "jumbotronAboutUs",
  data() {
    return {};
  },
  components: {},
  props: { title: String, Image: String },
};
</script>
<template>
  <div class="jumbotron position-relative">
    <div class="container">
      <div class="row">
        <h1 class="z-2 fw-bold mt-5">{{ title }}</h1>
        <h3 class="z-2">
          <router-link :to="{ name: 'Home' }" class="fw-bold linkheader">
            Home
          </router-link>
          &RightArrowBar;

          <router-link :to="{ name: title }" class="fw-bold linkheader">
            {{ title }}
          </router-link>
        </h3>
      </div>
    </div>
    <div class="dots-left position-absolute start-0 col-50"></div>
    <div class="dots-right position-absolute end-0 col-50"></div>
    <div class="globe1">
      <img src="/img/globe1.png" alt="" />
    </div>
    <div class="globe2">
      <img src="/img/globe2.png" alt="" />
    </div>
    <div class="globe3">
      <img src="/img/globe3.png" alt="" />
    </div>
    <div class="ufo">
      <img src="/img/ufo.png" alt="" />
    </div>
    <div class="imgRight">
      <img :src="Image" alt="" />
    </div>
    <div class="position-absolute bottom-0 start-0 end-0">
      <img class="waveimage" src="/img/bottom-wave-shape.png" alt="" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.linkheader {
  text-decoration: none;
  color: white;
  &:hover {
    color: #ff7a1f;
  }
}
.dots-left {
  height: 400px;
  background-image: url(/img/dots-left.png);
}
.dots-right {
  height: 400px;

  background-image: url(/img/dots-right.png);
}
.jumbotron {
  color: white;
  width: 100%;
  padding: 135px 0 179px;
  background-image: url(/img/jumbobackground.png);
  background-position: center;

  .waveimage {
    width: 100%;
  }
  .globe1 {
    position: absolute;
    top: 12%;
    left: 9%;
    width: 130px;
  }
  .globe2 {
    position: absolute;
    top: 18%;
    right: 28%;
    width: 100px;
  }
  .globe3 {
    position: absolute;
    top: -18%;
    left: 33%;
    max-width: 300px;
    height: 300px;
  }
  .imgRight {
    width: 100%;
    position: absolute;
    bottom: 10%;
    right: 20%;
    max-width: 400px;
  }
  .ufo {
    position: absolute;
    right: 9%;
    top: 10%;
    z-index: 1;
  }
}
</style>
