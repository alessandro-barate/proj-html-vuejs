<script>
export default {
  name: "SmartComponent",
};
</script>
<template>
  <div class="container-fluid position-relative">
    <div class="container">
      <div class="row">
        <!-- OFFSET PER IMMAGINE -->
        <div class="col-9 offset-3">
          <div class="position-relative z-index">
            <div class="row">
              <div class="col-9">
                <div class="content text-center text-white">
                  <h4>Our Love For Animation</h4>
                  <h2 class="text-purple">We're Storytelling Experts <br>With Creative Smarts</h2>
                  <p class="text-purple">Our culture inspires the creative and innovative spirit found throughout our
                    <br>Studio. We breathe life into new ideas!
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              sa
            </div>
          </div>
        </div>
      </div>
      <div class="smart-container">
        <img class="smart" src="/img/smart.png" alt="smart">
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.position-relative {
  position: relative;
  padding: 100px 0;
}

.z-index {
  z-index: 1;
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

.smart-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 500px;
  height: 950px;

  .smart {
    width: 100%;
    height: 100%;
  }
}
</style>