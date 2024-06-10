<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import AppHomepage from "./pages/AppHomepage.vue";
import AppAboutUs from "./pages/AppAboutUs.vue";
import AppContactPage from "./pages/AppContactPage.vue";
export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    AppHomepage,
    AppAboutUs,
    AppContactPage,
  },
};
</script>
<template>
  <AppHeader></AppHeader>
  <router-view></router-view>
</template>
<style scoped lang="scss"></style>
