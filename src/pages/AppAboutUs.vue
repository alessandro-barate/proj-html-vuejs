<script>
import jumbotronComponent from "../components/jumbotronAboutUs.vue";
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
  },
};
</script>
<template>
  <jumbotronComponent :title="Pagename" :Image="jumboImg"></jumbotronComponent>
</template>
<style scoped lang="scss"></style>
