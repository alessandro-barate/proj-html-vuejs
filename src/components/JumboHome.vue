<script>
export default {
  name: "JumboHome",
};
</script>
<template>
  <!-- CONTAINER 100% PER SFONDO -->
  <div class="container-fluid">
    <!-- ANIMAZIONE UOMO SINISTRA -->
    <div class="left-man position-absolute">
      <img src="/img/homepage/left-man.png" alt="left-man">
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
    <div class="dots-left position-absolute">
      <img src="/img/dots-left.png" alt="dots-left">
    </div>
    <!-- CONTAINER -->
    <div class="container pt-5">
      <div class="row">
        <div class="col">
          <div class="content text-center text-white">
            <!-- TITOLI -->
            <h3 class="text-orange">Imagine, Create, Experience</h3>
            <h1 class="page-title">We Animate <br>With Ninja-Like Precision</h1>
            <h4>We are a character-driven animation studio striving to make high-quality animations.</h4>
            <div class="banner py-5">
              <!-- BOTTONI -->
              <button type="button" class="btn btn-light rounded-pill me-3">Start a Project</button>
              <button type="button" class="btn btn-dark rounded-pill me-5">Portfolio</button>
            </div>
          </div>
        </div>
        <!-- THUMBNAIL -->
        <div class="thumb text-center">
          <img src="/img/homepage/middle.png" alt="middle">
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.container-fluid {
  background-image: url(/img/homepage/banner-bg.png);
  padding-top: 100px;
  position: relative;
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

.left-man {
  top: 20%;
  animation: fly1 3s linear infinite;
}

@keyframes globe1 {
  0% {
    transform: rotate(360deg);
  }
}

.globe-1 {
  width: 130px;
  left: 9%;
  animation: globe1 4s linear infinite;
}

.globe-2 {
  width: 100px;
  top: 12%;
  right: 28%;
  animation: globe1 4s linear infinite;
}

.globe-3 {
  width: 300px;
  left: 33%;
  top: -15%;
}

.dots-left {
  left: 5%;
  max-width: 550px;
}

h1 {
  font-weight: 700;
}

.text-orange {
  color: orange
}

.thumb {
  // transform: translateY(200px);
  position: relative;
}

.page-title {
  font-size: 5rem;
}

button {
  font-size: 18px;
  padding: 12px 38px;
}
</style>