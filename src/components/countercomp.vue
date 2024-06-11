<script>
export default {
  data() {
    return {};
  },
  methods: {},
  components: {},
  props: {},
};
</script>
<template>
  <div class="counter">
    <img
      class="position-absolute z-2 top-0 start-0 end-0"
      src="/img/shape-top-counter.png"
      alt=""
    />

    <h2 class="counter-title">Anidio Quick Facts</h2>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 m-auto">
      <div class="col">
        <div
          class="card z-2 rounded-4 border-white bg-transparent text-center py-5"
        >
          <div class="counterNumber">
            <h2>700+</h2>
          </div>
          <div class="counterText text-warning"><h4>Projects done</h4></div>
        </div>
      </div>
      <div class="col">
        <div
          class="card z-2 rounded-4 border-white bg-transparent text-center py-5"
        >
          <div class="counterNumber">
            <h2>250+</h2>
          </div>
          <div class="counterText text-warning"><h4>Happy Clients</h4></div>
        </div>
      </div>
      <div class="col">
        <div
          class="card z-2 rounded-4 border-white bg-transparent text-center py-5"
        >
          <div class="counterNumber">
            <h2>25+</h2>
          </div>
          <div class="counterText text-warning"><h4>Team Member</h4></div>
        </div>
      </div>
      <div class="col">
        <div
          class="card z-2 rounded-4 border-white bg-transparent text-center py-5"
        >
          <div class="counterNumber">
            <h2>12+</h2>
          </div>
          <div class="counterText text-warning">
            <h4>Years on the market</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="globe1">
      <img src="/img/globe1.png" alt="" />
    </div>
    <div class="position-absolute z-2 bottom-0 start-0 end-0">
      <img class="waveimage" src="/img/shape-bottom-counter.png" alt="" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.counter {
  margin-top: 50px;
  padding: 120px 0;
  position: relative;
  overflow: hidden;
  background-image: url(/img/counter-bg.png);
  h2.counter-title {
    text-align: center;
    font-size: 70px;
    color: white;
    position: relative;
    z-index: 2;
  }
  .counterNumber h2 {
    color: white;
    font-size: 40px;
    font-weight: bold;
  }
  .globe1 {
    position: absolute;
    left: calc(50% - 250px);
    top: calc(50% - 250px);
    height: 500px;
    width: 500px;
    z-index: 0;
  }
}
</style>
