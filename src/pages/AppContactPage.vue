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
</template>
<style scoped lang="scss">

.reach-us {
  width: 50%;
  margin-top: 80px;

  p {
    font-size: 18px;
  }
}

h5 {
  font-size: 24px;
}

h2 {
  font-size: 57px;
  font-weight: 700;
}

</style>
