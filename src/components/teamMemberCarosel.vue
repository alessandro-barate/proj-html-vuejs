<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "teamCarosel",
  data() {
    return {
      teams: [
        {
          name: "Hector Vargas",
          work: "Owner and Creative director",
          img: "/img/teams/team1.png",
        },
        {
          name: "Robert cooleman",
          work: "Project lead & administrator",
          img: "/img/teams/team2.png",
        },
        {
          name: "Thomas Nash",
          work: "2animator & compositor",
          img: "/img/teams/team4.png",
        },
        {
          name: "Don Woods",
          work: "Administrator",
          img: "/img/teams/team1.png",
        },
        {
          name: "Robert Cooleman",
          work: "Owner and Creative director",
          img: "/img/teams/team2.png",
        },
        {
          name: "Hector Vargas",
          work: "Owner and Creative director",
          img: "/img/teams/team1.png",
        },
        {
          name: "Robert cooleman",
          work: "Project lead & administrator",
          img: "/img/teams/team2.png",
        },
        {
          name: "Thomas Nash",
          work: "2animator & compositor",
          img: "/img/teams/team4.png",
        },
        {
          name: "Don Woods",
          work: "Administrator",
          img: "/img/teams/team1.png",
        },
        {
          name: "Robert Cooleman",
          work: "Owner and Creative director",
          img: "/img/teams/team2.png",
        },
        {
          name: "Hector Vargas",
          work: "Owner and Creative director",
          img: "/img/teams/team1.png",
        },
        {
          name: "Robert cooleman",
          work: "Project lead & administrator",
          img: "/img/teams/team2.png",
        },
        {
          name: "Thomas Nash",
          work: "2animator & compositor",
          img: "/img/teams/team4.png",
        },
        {
          name: "Don Woods",
          work: "Administrator",
          img: "/img/teams/team1.png",
        },
        {
          name: "Robert Cooleman",
          work: "Owner and Creative director",
          img: "/img/teams/team2.png",
        },
        {
          name: "Robert cooleman",
          work: "Project lead & administrator",
          img: "/img/teams/team2.png",
        },
      ],
      carouselTransition: 0.6,
      carouselTranslate: 0,
    };
  },
  methods: {
    carouselTranslateIncrement() {
      if (this.carouselTranslate >= 0) {
        this.carouselTransition = 0;
        this.carouselTranslate = -3840;
      } else {
        this.carouselTranslate += 320;
        this.carouselTransition = 0.6;
      }
    },
    carouselTranslateDecrement() {
      if (this.carouselTranslate <= -3840) {
        this.carouselTransition = 0;
        this.carouselTranslate = 0;
      } else {
        this.carouselTranslate -= 320;
        this.carouselTransition = 0.6;
      }
    },

    carouselTranslatefunc() {
      return `transform: translate3d(${this.carouselTranslate}px, 0px, 0px); transition: ${this.carouselTransition}s;`;
    },
    startAutoplay() {
      // CAMBIA SLIDE OGNI 1,8 SECONDI
      this.autoplayInterval = setInterval(
        this.carouselTranslateDecrement,
        1800
      );
    },
  },

  mounted() {
    // INIZIA L'AUTOPLAY QUANDO IL COMPONENTE SARA' MONTATO
    this.startAutoplay();
  },
};
</script>
<template>
  <div class="team-member-carosel position-relative">
    <div class="bg-image sx">
      <img src="/public/img/ballcarousel.png" alt="" />
    </div>
    <div class="bg-image dx">
      <img src="/public/img/ball2carousel.png" alt="" />
    </div>
    <div class="container">
      <h5 class="mb-3 text-center">Anidio Magic Team Member</h5>
      <h2 class="mb-1 text-center">Let Us Animate Your Project</h2>
      <p class="mb-3 text-center">
        We create new worlds! Let’s collaborate and create engaging, effective,
        award-winning animations
      </p>
      <div class="teams-slider">
        <div class="row-slider" :style="carouselTranslatefunc()">
          <div class="col" v-for="member in teams">
            <div class="card">
              <div class="card-image">
                <img :src="member.img" alt="" />
              </div>
              <div class="member-name">{{ member.name }}</div>
              <div class="member-work">{{ member.work }}</div>
              <div class="member-social">
                <button type="button" class="social">
                  <i class="fa-brands fa-facebook-f"></i>
                </button>
                <button type="button" class="social">
                  <i class="fa-brands fa-instagram"></i>
                </button>
                <button type="button" class="social">
                  <i class="fa-brands fa-twitter"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="buttonsSlider">
        <button
          type="button"
          @click="carouselTranslateIncrement()"
          class="process-prev me-2"
        >
          <i class="fa-solid fa-arrow-left"></i>
        </button>
        <button
          type="button"
          @click="carouselTranslateDecrement()"
          class="process-next"
        >
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.team-member-carosel {
  margin: 100px auto;

  .bg-image {
    position: absolute;
    max-width: 680px;
    &.sx {
      bottom: 0;
      left: 0;
    }
    &.dx {
      top: 0;
      right: 0;
    }
  }

  h2 {
    font-size: 57px;
    font-weight: 700;
  }

  h5 {
    font-size: 24px;
    padding-top: 20px;
    line-height: 25px;
    font-weight: bold;
    color: #4d36dc;
  }

  p {
    font-size: 18px;
  }

  .buttonsSlider {
    z-index: 900;
    width: 50%;
    left: 25%;
    top: 30px;
    button {
      border-radius: 50%;
      text-align: center;
      width: 50px;
      height: 50px;
      border: 1px solid #d8dae8;
      background-color: white;

      &:hover {
        background-color: #ff7a1f;
        border-color: #ff7a1f;

        i {
          color: white;
        }
      }

      i {
        color: #9f9ea1;
      }
    }

    text-align: center;
    position: relative;
  }
  .teams-slider {
    margin-top: 30px;
    height: 400px;
    display: flex;
    align-items: flex-end;
    overflow-x: hidden;
    .row-slider {
      display: flex;
      height: 350px;
      width: 5000px;
    }

    .card {
      width: 290px;
      margin: 0 15px;
      height: 350px;
      padding: 20px;
      border-radius: 20px;
      background-color: #fff5f0;

      .card-image {
        width: 200px;
        height: 200px;
        margin: 0 auto;
        position: absolute;
        bottom: 200px;
        left: 45px;
        z-index: 2;
      }
      .member-name {
        margin-top: 150px;
        font-size: 30px;
        text-align: center;
      }
      .member-work {
        font-size: 18px;
        margin-bottom: 30px;
        text-align: center;
      }
      .member-social {
        margin: 0 auto;
        button {
          border-radius: 50%;
          text-align: center;
          width: 40px;
          height: 40px;
          margin: 0 5px;
          border: 1px solid #d8dae8;
          background-color: white;

          &:hover {
            background-color: #ff7a1f;
            border-color: #ff7a1f;

            i {
              color: white;
            }
          }

          i {
            color: #9f9ea1;
          }
        }
      }
    }
  }
}
</style>
