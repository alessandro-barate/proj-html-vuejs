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

  <section>
    <div class="container form-contacts"> 
      <div class="row bg-lightpink">
        <img class="bg-lightpink p-0" src="../../public/img/footer/shape-top.png" alt="">
        <div class="col-6 left-side">
          <h3>Reach us directly!</h3>
          <ul class="main-list">
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

          <hr>

          <div class="socials-button">
            <h5>Follow us</h5>
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item">Fontawesome FB</li>
              <li class="list-group-item">Fontawesome IG</li>
              <li class="list-group-item">Fontawesome TW</li>
              <li class="list-group-item">Fontawesome WA</li>
            </ul>
          </div>
        </div>

        <div class="col-6 right-side">
          <div class="form-container p-4">      
            <div class="text-center">
              <h2>Contact form</h2>
              <p class="mb-4">Tell us your story and let's make it awesome</p>
            </div>
        
            <form>
              <div class="mb-4">
                <label for="exampleInputText1" class="form-label">NAME</label>
                <input type="text" class="form-control p-tb-12 border-radius-10" id="exampleInputText1" placeholder="What's your name?">
              </div>

              <div class="mb-4">
                <label for="exampleInputEmail1" class="form-label">EMAIL</label>
                <input type="email" class="form-control p-tb-12 border-radius-10" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="What's your email?">
              </div>

              <div class="mb-4">
                <label for="exampleInputNumber1" class="form-label">NUMBER</label>
                <input type="number" class="form-control p-tb-12 border-radius-10" id="exampleInputNumber1" aria-describedby="emailHelp" placeholder="Your number">
              </div>

              <div class="mb-5">
                <label for="exampleFormControlTextarea1" class="form-label">LEAVE A MESSAGE</label>
                <textarea class="form-control p-tb-12 border-radius-10" id="exampleFormControlTextarea1" rows="3" placeholder="Please type your message here..."></textarea>
              </div>

              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
        <img src="../../public/img/footer/shape-bottom.png" class="bg-lightpink p-0" alt="">
      </div> 
    </div>
  </section>

  <section>
    <div class="container">
      <div class="row">
        <img src="../../public/img/footer/" alt="">
        <div class="col wrapper text-center">
          <h5>We Create New Worlds!</h5>
          <h2>Want Tips On Your Storytelling?</h2>
          <p>Join our newsletter for tips on how to elevate your brand through storytelling</p>
        </div>
      </div>
    </div>
  </section>
</template>





<style scoped lang="scss">

.reach-us {
  width: 50%;
  margin-top: 80px;
  margin-bottom: 80px;
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

p {
    font-size: 18px;
}

.col-6 ul {
  list-style: none;
}

ul a {
  display: block;
  text-decoration: none;
  color: black;
}

.main-list li {
  width: 90%;
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
  margin-right: 20px;
  border-radius: 50%;
  text-align: center;
}

.contact-symbol img {
  width: 50%;
}

.p-tb-12 {
  padding-top: 12px;
  padding-bottom: 12px;
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

.width-105 {
  width: 105%;
}

.left-side {
  font-weight: bold;
  padding-top: 160px;

  hr {
    width: 86%;
    margin-left: 30px;
  }

  h3 {
    margin-left: 30px;
  }
}

.form-container {
  background-color: #F7F0FE;
  margin: 80px 30px 0 0;
  border-radius: 30px;
  border: 1px solid #B8AACA;

  button {
    width: 100%;
    border-radius: 50px;
    padding: 10px 0 10px 0;
  }
}

.socials-button {
  margin-left: 30px;
}

.socials-button li {
  background-color: transparent;
  border: none;
  margin-left: -20px;
}

form label {
  font-size: 18px;
  font-weight: 600;
}

.border-radius-10 {
  border-radius: 10px;
}

textarea {
  height: 150px;
}

.right-side {
  margin-bottom: 80px;
}

.wrapper {
  width: 60%;
  background-color: red;
}

</style>
