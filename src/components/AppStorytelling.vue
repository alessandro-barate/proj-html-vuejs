<script>
export default {
  name: "AppStorytelling",
  data() {
    return {};
  },
};
</script>
<template>
  <section class="margin-bt">
    <div class="jumbo-background">
      <img
        class="p-0"
        src="../../public/img/footer/shape-top-violet.png"
        alt=""
      />
      <div class="container pt-5">
        <div class="row">
          <div class="col text-center">
            <h5 class="text-orange">We Create New Worlds!</h5>
            <h2 class="width-60 mx-auto my-3 text-white">
              Want Tips On Your Storytelling?
            </h2>
            <p class="mb-5 text-white">
              Join our newsletter for tips on how to elevate your brand through
              storytelling
            </p>
          </div>
          <form class="input-wrapper">
            <input
              type="email"
              class="form-control p-4 border-radius width-60 mx-auto"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your email"
            />
            <button type="submit" class="border-radius">Submit</button>
          </form>
        </div>
      </div>
      <img
        class="p-0"
        src="../../public/img/footer/shape-bottom-violet.png"
        alt=""
      />
    </div>
  </section>
</template>
<style scoped lang="scss">
h2 {
  font-size: 57px;
  font-weight: 700;
}

h5 {
  font-size: 24px;
  padding-top: 20px;
  line-height: 25px;
  font-weight: bold;
}

p {
  font-size: 18px;
}

.margin-bt {
  margin-top: 60px;
  margin-bottom: 90px;
}

.jumbo-background {
  background-image: url(../../public/img/jumbobackground.png);
}

.text-orange {
  color: #ff791f;
}

.text-white {
  color: white;
}

.width-60 {
  width: 60%;
}

.input-wrapper {
  margin-bottom: 90px;
  position: relative;

  button {
    background-color: #ffdfec;
    padding: 12px 30px 12px 30px;
    font-size: 18px;
    font-weight: 600;
    border: none;
    position: absolute;
    right: 284px;
    bottom: 12px;
  }
}

.border-radius {
  border-radius: 50px;
}
</style>
