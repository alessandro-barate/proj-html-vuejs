<script>
import jumbotronComponent from "../components/jumbotronAboutUs.vue";
import counterComp from "../components/countercomp.vue";
import ourServicecomp from "../components/ourServicecomp.vue";
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
  },
  methods: {},
};
</script>
<template>
  <jumbotronComponent :title="Pagename" :Image="jumboImg"></jumbotronComponent>
  <counterComp></counterComp>
  <ourServicecomp></ourServicecomp>
</template>
<style scoped lang="scss"></style>
