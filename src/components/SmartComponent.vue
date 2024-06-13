<script>
export default {
  name: "SmartComponent",
  props: ['cards']
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
                  <p class="text-purple">Our culture inspires the creative and innovative spirit found throughout
                    our
                    <br>Studio. We breathe life into new ideas!
                  </p>
                </div>
              </div>
            </div>
            <!-- RIGA PER CARD -->
            <div class="row mt-3">
              <div class="col-4 text-center" v-for="card in cards">
                <div class="smart-cards">
                  <div class="image">
                    <img :src="card.img" :alt="card.title">
                  </div>
                  <a href="#" class="text-purple">{{ card.title }}</a>
                  <p class="text-purple">We constantly ask questions. It helps us shape your story and deliver the
                    results you crave. Yep,
                    we'll drill deep to deliver above and beyond your expectations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- CONTAINER IMMAGINE A SINISTRA -->
      <div class="smart-container">
        <img class="smart" src="/img/smart.png" alt="smart">
      </div>
    </div>
    <!-- RAZZO -->
    <div class="rocket">
      <img src="/img/smart4.png" alt="rocket">
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

.smart-cards {
  background-image: -webkit-linear-gradient(90deg, rgba(255, 122, 31, 0.10196) 0%, rgba(1, 5, 48, 0) 100%);
  border-radius: 10%;
  padding: 1rem;
  border: 1px solid #d8dae8;

  img {
    width: 80px;
  }

  a {
    text-decoration: none;
    font-size: 32px;
    font-weight: 500;
  }
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

.rocket {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 140px;
}
</style>