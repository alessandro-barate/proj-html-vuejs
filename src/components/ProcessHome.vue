<script>
export default {
  name: 'ProcessHome'
}
</script>
<template>
  <div class="container-fluid position-relative">
    <div class="container pt-5">
      <div class="row flex-row-reverse">
        <div class="col-6">
          <h4>Our Process</h4>
          <h2 class="text-purple">Our Process for Your Animation Production</h2>
          <p class="text-purple">We have an effective process for working on animation</p>
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

.thumb {
  width: 900px;
  position: absolute;
  top: 0;
  left: -250px;
}
</style>