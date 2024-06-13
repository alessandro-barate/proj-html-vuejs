<script>
import jumbotronComponent from "../components/jumbotronAboutUs.vue";
import counterComp from "../components/countercomp.vue";
import ourServicecomp from "../components/ourServicecomp.vue";
import smartComponent from "../components/SmartComponent.vue";
import storyTelling from "../components/AppStorytelling.vue";
import teamMemberCarosel from "../components/teamMemberCarosel.vue";
import clientsSlider from "../components/clientsSlider.vue";
import { store } from "../store";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "AppAboutUs",
  data() {
    return {
      Pagename: "AboutUs",
      title: "About Us",
      bacgroundJumbo: "/img/jumbobackground.png",

      jumboImg: "/img/rocket-banner.png",
      cards: [
        {
          title: "3D modeling",
          img: "/img/smart1.png",
        },
        {
          title: "Collaboration",
          img: "/img/smart2.png",
        },
        {
          title: "Creativity",
          img: "/img/smart3.png",
        },
      ],
      store,
    };
  },
  props: {
    title1: String,
  },
  components: {
    jumbotronComponent,
    counterComp,
    ourServicecomp,
    smartComponent,
    storyTelling,
    teamMemberCarosel,
    clientsSlider,
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      if (window.scrollY > 300) {
        store.scroll = true;
      }
      if (window.scrollY < 300) {
        store.scroll = false;
      }
    },
    goPageStart() {
      window.scrollTo({ top: 0, behavior: "smooth" });
      console.log("click up");
    },
  },
};
</script>
<template>
  <jumbotronComponent
    :name="title"
    :title="Pagename"
    :Image="jumboImg"
    :background="bacgroundJumbo"
  ></jumbotronComponent>
  <smartComponent :cards="cards"></smartComponent>
  <counterComp></counterComp>
  <ourServicecomp></ourServicecomp>
  <teamMemberCarosel></teamMemberCarosel>
  <clientsSlider></clientsSlider>
  <storyTelling></storyTelling>
  <button class="buttonUp" @click="goPageStart()" v-if="store.scroll">
    <i class="fa-solid fa-arrow-up"></i>
  </button>
</template>
<style scoped lang="scss"></style>
