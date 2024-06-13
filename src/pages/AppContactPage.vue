<script>
import jumbotronComponent from "../components/jumbotronAboutUs.vue";
import AppStorytelling from "../components/AppStorytelling.vue";
import AppSocialsButton from "../components/AppSocialsButton.vue";
export default {
  name: "AppContactPage",

  data() {
    return {
      Pagename: "Contact",
      title: "Contact",
      jumboImg: "/img/footer/",
      background: "",
      faqs: [
        {
          question: "How do I know what kind of video I need?",
          answer: "Quisque ultricies enim ac lacus feugiat mattis. In et ipsum sed tellus interdum mattis sit amet id mi. Phasellus nec eros in felis blandit cursus. Nulla facilisi. Nam in purus elit. Aenean tempor volutpat ante.",
        },

        {
          question: "Do you currently have career openings?",
          answer: "Quisque ultricies enim ac lacus feugiat mattis. In et ipsum sed tellus interdum mattis sit amet id mi. Phasellus nec eros in felis blandit cursus. Nulla facilisi. Nam in purus elit. Aenean tempor volutpat ante.",
        },

        {
          question: "How long will it take to create an animation video?",
          answer: "Quisque ultricies enim ac lacus feugiat mattis. In et ipsum sed tellus interdum mattis sit amet id mi. Phasellus nec eros in felis blandit cursus. Nulla facilisi. Nam in purus elit. Aenean tempor volutpat ante.",
        },

        {
          question: "How long do you need for the video creation process?",
          answer: "Quisque ultricies enim ac lacus feugiat mattis. In et ipsum sed tellus interdum mattis sit amet id mi. Phasellus nec eros in felis blandit cursus. Nulla facilisi. Nam in purus elit. Aenean tempor volutpat ante.",
        },

        {
          question: "Will I take part in the creation process?",
          answer: "Quisque ultricies enim ac lacus feugiat mattis. In et ipsum sed tellus interdum mattis sit amet id mi. Phasellus nec eros in felis blandit cursus. Nulla facilisi. Nam in purus elit. Aenean tempor volutpat ante.",
        },

        {
          question: "What type/format of animated video can I order?",
          answer: "Quisque ultricies enim ac lacus feugiat mattis. In et ipsum sed tellus interdum mattis sit amet id mi. Phasellus nec eros in felis blandit cursus. Nulla facilisi. Nam in purus elit. Aenean tempor volutpat ante.",
        },

        {
          question: "What if I don't like what you deliver?",
          answer: "Quisque ultricies enim ac lacus feugiat mattis. In et ipsum sed tellus interdum mattis sit amet id mi. Phasellus nec eros in felis blandit cursus. Nulla facilisi. Nam in purus elit. Aenean tempor volutpat ante.",
        },
      ],
      show: false,
    };
  },

  props: {
    title1: String,
  },

  components: {
    jumbotronComponent,
    AppStorytelling,
    AppSocialsButton,
  },

  methods: {
    showParagraph(){
      this.show = true;
      return this.show
    }
  }
};
</script>


<template>

<!-- Section Jumbotron -->
  <section>
    <jumbotronComponent :title="Pagename" :Image="jumboImg"/>
  </section>
  <!-- FINE Section Jumbotron -->

  <!-- Section Reach us -->
  <section>
    <div class="reach-us mx-auto text-center">
      <h5>Contact Us</h5>
      <h2>How to Reach Us</h2>
      <p class="px-5">We're always interested in having a chat or discussing your next big project, so drop us a line!</p>
    </div>
  </section>
  <!-- FINE Section Reach us -->

  <!-- Section Contact form -->
  <section>
    <div class="container form-contacts"> 
      <div class="row bg-lightpink">
        <img class="bg-lightpink p-0" src="../../public/img/footer/shape-top.png" alt="">
        <div class="col-6 left-side">
          <h3>Reach us directly!</h3>
          <ul class="main-list">
            <li class="d-flex">
              <div class="contact-symbol pt-21">
                <img id="width-40-map" src="../../public/img/footer/map.png" alt="">
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

            <AppSocialsButton/>

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
  <!-- FINE Section Contact form -->

  <!-- Section FAQ -->
   <section>
    <div class="faq-container">
      <div class="row">
        <div class="col text-center">
          <div class="col width-40 mx-auto text-center position-relative">
            <h5>We’re Here to Help</h5>
            <h2 class="my-3">Frequently Asked Questions</h2>
            <p class="mb-5">We're always interested in having a chat or discussing your next big project, so drop us a line!</p>
            <div class="circle-container">
              <img src="../../public/img/footer/big-circle.png" alt="">
            </div>
          </div>

          <div class="faq-list mx-auto">
            <div class="big-image position-relative">
              <img src="../../public/img/footer/left-man.png" alt="">
            </div>
            <ul class="faq-ul-list">
              <li class="justify-content-between mx-auto" v-for="(faq, index) in faqs">
                <p class="question"> {{ faq.question }}</p>
                <p class="d-inline-flex me-3">
                  <button @click="this.showParagraph" class="border-plus-btn mt-3" type="button">
                    <i class="fas fa-plus"></i>
                  </button>
                </p>
                <div>
                  <div>
                    <p class="p-4" v-show="this.show">{{ faq.answer }}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
   </section>
   <!-- FINE Section FAQ -->

  <!-- Section Storytelling -->
    <AppStorytelling/>
  <!-- FINE Section Storytelling -->
</template>


<style scoped lang="scss">

// Tag styles
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


// Spacing styles
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

.width-40,
#width-40-map {
  width: 40%;
}

.border-radius-10 {
  border-radius: 10px;
}


// Color utility
.bg-lightpink {
  background-color: #F6E9FC;
}


// Global styles
.reach-us {
  width: 50%;
  margin-top: 80px;
  margin-bottom: 80px;
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

textarea {
  height: 150px;
}

.right-side {
  margin-bottom: 80px;
}

.circle-container img {
  width: 110%;
  position: absolute;
  top: -100px;
  right: -450px;
}

.faq-container {
  margin-top: 120px;
  margin-bottom: 80px;
}

.faq-list {
  width: 70%;

  li {
    width: 80%;
  }
}

.faq-ul-list li {
  width: 90%;
  background-color: white;
  margin-bottom: 15px;
  border-radius: 10px;
  box-shadow: 5px 9px 10px 1px rgb(237, 232, 232);

  .question {
    font-size: 24px;
    font-weight: 600;
    padding-top: 22px;
    padding-left: 20px;
  }
}

.big-image img {
  width: 45%;
  position: absolute;
  top:-100px;
  left: -226px;
  z-index: -2;
}

.border-plus-btn {
  border: 1px solid #BFB4CB;
  border-radius: 50%;
  width: 50px;
  height: 48px;
}

</style>
