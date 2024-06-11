<script>
export default {
  name: "SmartHome",
};
</script>
<template>
  <div class="container-fluid position-relative">
    <div class="row">
      <div class="col">
        <div class="content text-center text-white">
          <h4>Our Love For Animation</h4>
          <h2 class="text-purple">We're Storytelling Experts <br>With Creative Smarts</h2>
          <p class="text-purple">Our culture inspires the creative and innovative spirit found throughout our
            <br>Studio. We breathe life into new ideas!
          </p>
        </div>
      </div>
    </div>
    <img class="smart" src="/img/smart.png" alt="smart">
  </div>
</template>
<style scoped lang="scss">
.position-relative {
  position: relative;
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

.smart {
  position: absolute;
  left: 0;
  top: 0
}
</style>