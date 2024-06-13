<script>
import JumboHome from "../components/JumboHome.vue";
import SmartComponent from "../components/SmartComponent.vue";
import Countercomp from "../components/countercomp.vue";
import FeaturedHome from "../components/FeaturedHome.vue";
import ProcessHome from "../components/ProcessHome.vue";
import TeamMemberCarosel from "../components/teamMemberCarosel.vue";
import ClientsSlider from "../components/clientsSlider.vue";
import AppStorytelling from "../components/AppStorytelling.vue";
import { store } from "../store";
export default {
  name: "AppHomepage",
  data() {
    return {
      store,
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
      workImgs: [
        {
          url: "/img/homepage/work1.png",
          workTitle: "work1",
        },
        {
          url: "/img/homepage/work2.png",
          workTitle: "work2",
        },
        {
          url: "/img/homepage/work3.png",
          workTitle: "work3",
        },
        {
          url: "/img/homepage/work4.png",
          workTitle: "work4",
        },
      ],
      processes: [
        {
          processTitle: "Scripting",
          url: "/img/homepage/process1.png",
        },
        {
          processTitle: "Pre-Production",
          url: "/img/homepage/process2.png",
        },
        {
          processTitle: "Scripting",
          url: "/img/homepage/process1.png",
        },
        {
          processTitle: "Pre-Production",
          url: "/img/homepage/process2.png",
        },
      ],
    };
  },
  components: {
    JumboHome,
    SmartComponent,
    Countercomp,
    FeaturedHome,
    ProcessHome,
    TeamMemberCarosel,
    AppStorytelling,
    ClientsSlider,
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      if (window.scrollY > 300) {
        store.scroll = true;
      }
      if (window.scrollY < 300) {
        store.scroll = false;
      }
    },
    goPageStart() {
      window.scrollTo({ top: 0, behavior: "smooth" });
      console.log("click up");
    },
  },
};
</script>

<template>
  <JumboHome></JumboHome>
  <SmartComponent :cards="cards"></SmartComponent>
  <Countercomp></Countercomp>
  <FeaturedHome :workImgs="workImgs"></FeaturedHome>
  <ProcessHome :processes="processes"></ProcessHome>
  <TeamMemberCarosel></TeamMemberCarosel>
  <ClientsSlider></ClientsSlider>
  <AppStorytelling></AppStorytelling>
  <button class="buttonUp" @click="goPageStart()" v-if="store.scroll">
    <i class="fa-solid fa-arrow-up"></i>
  </button>
</template>
<style scoped lang="scss"></style>
