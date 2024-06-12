<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
  name: 'ProcessHome',
  props: ['processes']
}
</script>
<template>
  <div class="container-fluid position-relative">
    <div class="container py-100">
      <div class="row flex-row-reverse">
        <div class="col-6">
          <!-- TEXT CONTENT -->
          <div class="content">
            <h4>Our Process</h4>
            <h2 class="text-purple">Our Process for Your Animation Production</h2>
            <p class="text-purple">We have an effective process for working on animation</p>
          </div>
          <!-- SLIDER -->
          <div class="slider d-flex">
            <div class="col-6 slide text-center rounded-4 position-relative" v-for="(process, index) in processes">
              <div class="image d-flex align-center justify-content-center rounded-circle mb-3">
                <img :src="process.url" :alt="process.processTitle">
              </div>
              <a href="#" class="text-purple">{{ process.processTitle }}</a>
              <p>
                We'll take your idea and create a technical script which consists of action notes and animation
                descriptions
              </p>
              <span class="d-flex align-items-end justify-content-center">{{ index + 1 }}</span>
            </div>
          </div>
          <!-- ARROWS -->
          <div class="arrows text-start mt-3">
            <button type="button" class="process-prev me-2">
              <i class="fa-solid fa-arrow-left"></i>
            </button>
            <button type="button" class="process-next">
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- THUMBNAIL BIG -->
    <div class="thumb">
      <img src="/img/homepage/process-thumb.png" alt="process">
    </div>
  </div>
</template>
<style scoped lang="scss">
.py-100 {
  padding: 100px 0;
}

.position-relative {
  position: relative;
}

.flex-row-reverse {
  flex-direction: row-reverse;
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

.slider {
  overflow: hidden;
  padding-right: 0.5rem;

  .slide {
    padding: 2rem;
    border: 1px solid #f6eeff;
    margin-right: 0.5rem;

    .image {
      padding: 2rem;
      background-color: #fff5f0;
      width: 140px;
      margin: 0 auto;

      img {
        width: 90px;
        height: 72px;
      }
    }
  }
}

a {
  text-decoration: none;
  font-size: 32px;
  font-weight: 500;
}

span {
  position: absolute;
  top: 0;
  right: 1.25rem;
  background-color: #f7f0ff;
  color: #8d829c;
  width: 44px;
  height: 82px;
  border-radius: 0 0 30% 30%;
  font-weight: 700;
  font-size: 18px;
}

button {
  border-radius: 50%;
  text-align: center;
  width: 50px;
  height: 50px;
  border: 1px solid #d8dae8;
  background-color: white;

  &:hover {
    background-color: #ff7a1f;
    border-color: #ff7a1f;

    i {
      color: white;
    }
  }

  i {
    color: #9f9ea1;
  }
}

.thumb {
  width: 900px;
  position: absolute;
  top: 60px;
  left: -250px;
}
</style>