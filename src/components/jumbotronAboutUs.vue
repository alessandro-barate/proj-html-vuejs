<script>
export default {
  name: "jumbotronAboutUs",
  data() {
    return {};
  },
  methods: {
    backgroundimg(Background) {
      return `background-image: url(${Background});`;
    },
  },

  components: {},
  props: { title: String, Image: String, name: String, background: String },
};
</script>
<template>
  <div class="jumbotron position-relative" :style="backgroundimg(background)">
    <div class="container">
      <div class="row">
        <h1 class="z-2 fw-bold mt-5">{{ name }}</h1>
        <h3 class="z-2">
          <router-link :to="{ name: 'Home' }" class="fw-bold linkheader">
            Home
          </router-link>
          <i class="fas fa-arrow-right-long"></i>

          <router-link :to="{ name: title }" class="fw-bold linkheader">
            {{ name }}
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
h1 {
  font-size: 76px;
  font-weight: 700;
}

h3 {
  font-size: 18px;
}

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

  background-position: center;

  .globe1 {
    position: absolute;
    top: 12%;
    left: 9%;
    width: 130px;
    animation: globe1 5s linear infinite;
    @keyframes globe1 {
      0% {
        transform: rotate(360deg);
      }
    }
  }
  .globe2 {
    position: absolute;
    top: 18%;
    right: 28%;
    width: 100px;
    animation: globe2 5s linear infinite;
    @keyframes globe2 {
      0% {
        transform: rotate(360deg);
      }
    }
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
    animation: myfirst 2s linear infinite;
  }

  @keyframes myfirst {
    0% {
      right: 20%;
      bottom: 10%;
    }
    20% {
      right: 16%;
      bottom: 14%;
    }
    40% {
      right: 18%;
      bottom: 12%;
    }
    60% {
      right: 18%;
      bottom: 12%;
    }
    80% {
      right: 16%;
      bottom: 14%;
    }
    100% {
      right: 20%;
      bottom: 10%;
    }
  }

  .ufo {
    position: absolute;
    right: 9%;
    top: 10%;
    z-index: 1;
    @keyframes ufo {
      0% {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
