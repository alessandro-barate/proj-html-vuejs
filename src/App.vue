<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  name: "App",
  data() {
    return {
      title: "questo e il titolo",
    };
  },
  methods: {},
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
<template>
  <app-header> </app-header>
  <router-view :title1="title"></router-view>
  <app-footer></app-footer>
</template>
<style scoped lang="scss"></style>
