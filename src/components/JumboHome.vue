<script>
export default {
  name: "JumboHome",
};
</script>
<template>
  <!-- CONTAINER 100% PER SFONDO -->
  <div class="container-fluid position-relative">
    <!-- ANIMAZIONE OMINI -->
    <div class="left-man position-absolute">
      <img src="/img/homepage/left-man.png" alt="left-man">
    </div>
    <div class="right-man position-absolute">
      <img src="/img/homepage/right-man.png" alt="right-man">
    </div>
    <!-- ANIMAZIONI PIANETI -->
    <div class="globe-1 position-absolute">
      <img src="/img/globe1.png" alt="globe1">
    </div>
    <div class="globe-2 position-absolute">
      <img src="/img/globe2.png" alt="globe2">
    </div>
    <div class="globe-3 position-absolute">
      <img src="/img/globe3.png" alt="globe3">
    </div>
    <!-- PUNTINI -->
    <div class="dots-left position-absolute">
      <img src="/img/dots-left.png" alt="dots-left">
    </div>
    <div class="dots-right position-absolute">
      <img src="/img/dots-right.png" alt="dots-right">
    </div>
    <!-- ASTRONAVE -->
    <div class="light position-absolute">
      <img src="/img/light.png" alt="light">
    </div>

    <!-- CONTAINER -->
    <div class="container pt-5">
      <div class="row">
        <div class="col-9">
          <div class="content text-center text-white">
            <!-- TITOLI -->
            <h3 class="text-orange">Imagine, Create, Experience</h3>
            <h1 class="page-title">We Animate <br>With Ninja-Like Precision</h1>
            <p>We are a character-driven animation studio striving to make high-quality animations.</p>
            <div class="banner py-5 position-relative">
              <!-- BOTTONI -->
              <button type="button" class="btn btn-light rounded-pill me-3">Start a Project</button>
              <button type="button" class="btn btn-dark rounded-pill me-5">Portfolio</button>
            </div>
          </div>
          <!-- THUMBNAIL -->
          <div class="thumb position-relative text-center">
            <img src="/img/homepage/middle.png" alt="middle">
          </div>
        </div>
      </div>
    </div>
    <div class="shape-bottom position-absolute">
      <img src="/img/homepage/bottom-shape.png" alt="bottom-shape">
    </div>
  </div>
</template>
<style scoped lang="scss">
.container-fluid {
  background-image: url(/img/homepage/banner-bg.png);
  padding-top: 150px;
  margin-bottom: 200px;
}

.col-9 {
  margin: 0 auto;
}

@keyframes fly1 {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-15px);
  }

  100% {
    transform: translateY(0px);
  }
}

.position-absolute {
  position: absolute;
}

.position-relative {
  position: relative;
}

.left-man {
  top: 30%;
  animation: fly1 3s linear infinite;
}

.right-man {
  animation: fly1 4s linear infinite;
  top: 30%;
  right: 0;
  max-width: 332px;
}

@keyframes globe1 {
  0% {
    transform: rotate(360deg);
  }
}

.globe-1 {
  width: 130px;
  top: 12%;
  left: 9%;
  animation: globe1 4s linear infinite;
}

.globe-2 {
  width: 100px;
  top: 18%;
  right: 28%;
  animation: globe1 4s linear infinite;
}

.globe-3 {
  width: 300px;
  left: 33%;
  top: -18%;
}

.dots-left {
  left: 5%;
  top: 15%;
  max-width: 550px;
}

.dots-right {
  right: 1%;
  top: 8%;
  max-width: 750px;
}

@keyframes lightopen {
  50% {
    transform: rotate(10deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

.light {
  z-index: 1;
  top: 10%;
  right: 9%;
  animation: lightopen 2s linear infinite;
}

h1 {
  font-weight: 700;
}

p {
  font-size: 24px;
}

.text-orange {
  color: #ff7a1f;
}

.thumb {
  transform: translateY(200px);
  z-index: 2;
  margin-top: -200px;
}

.page-title {
  font-size: 76px;
}

button {
  font-size: 18px;
  padding: 12px 38px;
}

.shape-bottom {
  bottom: 0;
  left: 0;
}
</style>