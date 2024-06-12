<script>
import jumbotronComponent from "../components/jumbotronAboutUs.vue";
import counterComp from "../components/countercomp.vue";
import ourServicecomp from "../components/ourServicecomp.vue";
import smartComponent from "../components/SmartComponent.vue";
import storyTelling from "../components/AppStorytelling.vue";
import teamMemberCarosel from "../components/teamMemberCarosel.vue";
import clientsSlider from "../components/clientsSlider.vue";

export default {
  name: "AppAboutUs",
  data() {
    return {
      Pagename: "AboutUs",
      title: "About Us",

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
  methods: {},
};
</script>
<template>
  <jumbotronComponent
    :name="title"
    :title="Pagename"
    :Image="jumboImg"
  ></jumbotronComponent>
  <smartComponent :cards="cards"></smartComponent>
  <counterComp></counterComp>
  <ourServicecomp></ourServicecomp>
  <teamMemberCarosel></teamMemberCarosel>
  <clientsSlider></clientsSlider>
  <storyTelling></storyTelling>
</template>
<style scoped lang="scss"></style>
