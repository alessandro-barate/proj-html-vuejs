<script>
import jumbotronComponent from "../components/jumbotronAboutUs.vue";
import counterComp from "../components/countercomp.vue";
import ourServicecomp from "../components/ourServicecomp.vue";
import smartComponent from "../components/SmartComponent.vue";
import storyTelling from "../components/AppStorytelling.vue";
export default {
  name: "AppAboutUs",
  data() {
    return {
      Pagename: "AboutUs",
      jumboImg: "/img/rocket-banner.png",
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
  },
  methods: {},
};
</script>
<template>
  <jumbotronComponent :title="Pagename" :Image="jumboImg"></jumbotronComponent>
  <smartComponent></smartComponent>
  <counterComp></counterComp>
  <ourServicecomp></ourServicecomp>
  <storyTelling></storyTelling>
</template>
<style scoped lang="scss"></style>
