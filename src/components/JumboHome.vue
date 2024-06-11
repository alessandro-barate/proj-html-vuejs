<script>
export default {
  name: "JumboHome",
};
</script>
<template>
  <div class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="content text-center text-white">
            <h3 class="text-orange">Imagine, Create, Experience</h3>
            <h1 class="page-title">We Animate <br>With Ninja-Like Precision</h1>
            <h4>We are a character-driven animation studio striving to make high-quality animations.</h4>
            <div class="banner py-5">
              <button type="button" class="btn btn-light rounded-pill me-3">Start a Project</button>
              <button type="button" class="btn btn-dark rounded-pill me-5">Portfolio</button>
            </div>
          </div>
        </div>
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