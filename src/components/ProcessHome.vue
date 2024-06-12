<script>
export default {
  name: 'ProcessHome',
  props: ['processes']
}
</script>
<template>
  <div class="container-fluid position-relative">
    <div class="container pt-5">
      <div class="row flex-row-reverse">
        <div class="col-6">
          <div class="content">
            <h4>Our Process</h4>
            <h2 class="text-purple">Our Process for Your Animation Production</h2>
            <p class="text-purple">We have an effective process for working on animation</p>
          </div>
          <div class="slider d-flex">
            <div class="col-6 slide text-center rounded-4 position-relative" v-for="(process, index) in processes">
              <div class="image d-flex align-center justify-content-center rounded-circle">
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
        </div>
      </div>
    </div>
    <div class="thumb">
      <img src="/img/homepage/process-thumb.png" alt="process">
    </div>
  </div>
</template>
<style scoped lang="scss">
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

.thumb {
  width: 900px;
  position: absolute;
  top: 0;
  left: -250px;
}
</style>