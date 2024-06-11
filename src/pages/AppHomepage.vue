<script>
import JumboHome from '../components/JumboHome.vue';
import SmartComponent from '../components/SmartComponent.vue';
import Countercomp from '../components/countercomp.vue';
export default {
  name: "AppHomepage",
  data() {
    return {
      cards: [
        {
          title: "3D modeling",
          img: '/img/smart1.png',
        },
        {
          title: "Collaboration",
          img: '/img/smart2.png',
        },
        {
          title: "Creativity",
          img: '/img/smart3.png',
        },
      ],
    };
  },
  components: {
    JumboHome,
    SmartComponent,
    Countercomp,
  }
};
</script>
<template>
  <JumboHome></JumboHome>
  <SmartComponent :cards="cards"></SmartComponent>
  <Countercomp></Countercomp>
</template>
<style scoped lang="scss"></style>
