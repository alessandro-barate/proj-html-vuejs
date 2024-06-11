<script>
import jumbotronComponent from "../components/jumbotronAboutUs.vue";
export default {
  name: "AppContactPage",

  data() {
    return {
      Pagename: "Contact",
      jumboImg: "/img/rocket-banner.png",
    };
  },

  props: {
    title1: String,
  },

  components: {
    jumbotronComponent,
  },
};
</script>





<template>

  <jumbotronComponent :title="Pagename" :Image="jumboImg"/>

  <div class="reach-us mx-auto text-center">
    <h5>Contact Us</h5>
    <h2>How to Reach Us</h2>
    <p class="px-5">We're always interested in having a chat or discussing your next big project, so drop us a line!</p>
  </div>

  <div class="container form-contacts">
    <img class="bg-lightpink" src="../../public/img/footer/shape-top.png" alt="">
    <div class="row bg-lightpink">
      <div class="col-6 left-side">
        <h3>Reach us directly!</h3>
        <ul>
          <li class="d-flex">
            <div class="contact-symbol pt-21">
              <img id="width-40" src="../../public/img/footer/map.png" alt="">
            </div>
            <a href="">
              <h5>Address</h5>2464 Royal Ln. Mesa, New Jersey 45463
            </a>
          </li>
          <li class="d-flex">
            <div class="contact-symbol pt-30">
              <img src="../../public/img/footer/email.png" alt="">
            </div>
            <a href="">
              <h5>Email</h5>example@gmail.com
            </a>
          </li>
          <li class="d-flex">
            <div class="contact-symbol pt-25">
              <img src="../../public/img/footer/phone.png" alt="">
            </div>
            <a href="">
              <h5>Phone</h5>(406) 555-0120
            </a>
          </li>
        </ul>
      </div>

      <div class="col-6">

        <div class="form-container">
        
          <div class="text-center">
            <h2>Contact form</h2>
            <p>Tell us your story and let's make it awesome</p>
          </div>
        
          <form>
            <div class="mb-3">
              <label for="exampleInputText1" class="form-label">s</label>
              <input type="text" class="form-control" id="exampleInputText1">
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>

            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>





<style scoped lang="scss">

.reach-us {
  width: 50%;
  margin-top: 80px;

  p {
    font-size: 18px;
  }
}

h2 {
  font-size: 57px;
  font-weight: 700;
}

h3 {
  font-size: 43px;
  font-weight: bold;
  margin-bottom: 40px;
}

h5 {
  font-size: 24px;
  padding-top: 20px;
  line-height: 25px;
  font-weight: bold;
}

.col-6 ul {
  list-style: none;
}

ul a {
  display: block;
  text-decoration: none;
  color: black;
}

ul li {
  width: 75%;
  background-color: white;
  padding: 10px 0 10px 20px;
  margin-bottom: 25px;
  border-radius: 10px;
  border: 1px solid #E2DAFA;

}

.bg-lightpink {
  background-color: #F6E9FC;
}

.contact-symbol {
  width: 100px;
  height: 100px;
  background-color: #EBE5FF;
  margin-right: 15px;
  border-radius: 50%;
  text-align: center;
}

.contact-symbol img {
  width: 50%;
}

.pt-21 {
  padding-top: 21px;
}

.pt-25 {
  padding-top: 25px;
}

.pt-30 {
  padding-top: 30px;
}

#width-40 {
  width: 40%;
}

.left-side {
  font-weight: bold;
}

</style>
