<script>
import JumboHome from '../components/JumboHome.vue';
import SmartHome from '../components/SmartHome.vue';
export default {
  name: "AppHomepage",
  components: {
    JumboHome,
    SmartHome,
  }
};
</script>
<template>
  <JumboHome></JumboHome>
  <SmartHome></SmartHome>
</template>
<style scoped lang="scss">
.page-title {
  font-size: 5rem;
}
</style>
