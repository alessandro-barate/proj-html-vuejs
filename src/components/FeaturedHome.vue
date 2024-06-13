<script>
export default {
  name: 'FeaturedHome',
  props: ['workImgs']
}
</script>
<template>
  <div class="container pt-100">
    <div class="row">
      <div class="col-12">
        <div class="content text-center">
          <!-- TITOLI -->
          <h4>Our Works</h4>
          <h2 class="text-purple">Featured Productions</h2>
          <p class="text-purple">Here's just a small sample of some of those projects that we're quite proud of. <br>If
            you're looking for something specific feel free to get in contact with us.
          </p>
        </div>
      </div>
      <!-- IMMAGINI DINAMICHE -->
      <div class="col-6 gy-4 position-relative" v-for="workImg in workImgs">
        <div class="work">
          <img :src="workImg.url" :alt="workImg.workTitle">
          <a href="#" class="video-link position-absolute top-50 end-50 z-1">
            <i class="fas fa-play position-absolute"></i>
          </a>
        </div>
      </div>
    </div>
    <!-- BOTTONE -->
    <div class="work-btn text-center mt-4">
      <button type="button" class="btn btn-light text-purple">See Our Work</button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.pt-100 {
  padding-top: 100px;
}

h4 {
  color: #4d36dc
}

h2 {
  font-size: 57px;
  font-weight: 700;
}

.text-purple {
  color: #311852;
}

p {
  font-size: 18px;
}

.video-link {
  display: none;
}

.work:hover {

  .video-link {
    transform: translate(-50%, -50%);
    display: block;
    background-color: white;
    padding: 35px;
    border-radius: 50%;
  }

  i {
    transform: translate(-50%, -50%);
    color: #ff7a1f;
    font-size: 26px;
  }
}

.work-btn {
  button {
    font-size: 18px;
    padding: 12px 38px 12px;
    border-radius: 30px;
  }
}
</style>