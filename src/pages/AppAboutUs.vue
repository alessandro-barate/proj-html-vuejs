<script>
import jumbotronComponent from "../components/jumbotronAboutUs.vue";
import counterComp from "../components/countercomp.vue";
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
  },
};
</script>
<template>
  <jumbotronComponent :title="Pagename" :Image="jumboImg"></jumbotronComponent>
  <counterComp></counterComp>
</template>
<style scoped lang="scss"></style>
