<script>
import JumboHome from '../components/JumboHome.vue';
import SmartComponent from '../components/SmartComponent.vue';
import Countercomp from '../components/countercomp.vue';
export default {
  name: "AppHomepage",
  components: {
    JumboHome,
    SmartComponent,
    Countercomp,
  }
};
</script>
<template>
  <JumboHome></JumboHome>
  <SmartComponent></SmartComponent>
  <Countercomp></Countercomp>
</template>
<style scoped lang="scss"></style>
