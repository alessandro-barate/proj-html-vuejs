<script>
export default {
  data() {
    return {
      clients: [
        {
          name: "Supreme",
          img: "/img/clients/sponsor1.png",
        },
        {
          name: "Phoneix",
          img: "/img/clients/sponsor2.png",
        },
        {
          name: "Cooperation",
          img: "/img/clients/sponsor3.png",
        },
        {
          name: "BusinessX",
          img: "/img/clients/sponsor4.png",
        },
        {
          name: "Pillar",
          img: "/img/clients/sponsor5.png",
        },
        {
          name: "Digital Eagle",
          img: "/img/clients/sponsor6.png",
        },
        {
          name: "Supreme",
          img: "/img/clients/sponsor1.png",
        },
        {
          name: "Phoneix",
          img: "/img/clients/sponsor2.png",
        },
        {
          name: "Cooperation",
          img: "/img/clients/sponsor3.png",
        },
        {
          name: "BusinessX",
          img: "/img/clients/sponsor4.png",
        },
        {
          name: "Pillar",
          img: "/img/clients/sponsor5.png",
        },
        {
          name: "Digital Eagle",
          img: "/img/clients/sponsor6.png",
        },
        {
          name: "Supreme",
          img: "/img/clients/sponsor1.png",
        },
        {
          name: "Phoneix",
          img: "/img/clients/sponsor2.png",
        },
        {
          name: "Cooperation",
          img: "/img/clients/sponsor3.png",
        },
        {
          name: "BusinessX",
          img: "/img/clients/sponsor4.png",
        },
        {
          name: "Pillar",
          img: "/img/clients/sponsor5.png",
        },
        {
          name: "Digital Eagle",
          img: "/img/clients/sponsor6.png",
        },
      ],
      carouselTransition: 0.6,
      carouselTranslate: 0,
      autoplayInterval: null,
    };
  },
  methods: {
    carouselTranslateIncrement() {
      if (this.carouselTranslate >= 0) {
        this.carouselTransition = 0;
        this.carouselTranslate = -2420;
      } else {
        this.carouselTranslate += 220;
        this.carouselTransition = 0.6;
      }
    },
    carouselTranslateDecrement() {
      if (this.carouselTranslate <= -2420) {
        this.carouselTransition = 0;
        this.carouselTranslate = 0;
      } else {
        this.carouselTranslate -= 220;
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
  <div class="team-member-carosel">
    <div class="container">
      <h5 class="mb-3 text-center">Why Anidio studio?</h5>
      <h2 class="mb-1 text-center">We Love Our Clients</h2>
      <p class="mb-3 text-center">
        We are trusted throughout adland and have a wealth of recommendations
        <br />
        from start-ups to renowned global brands.
      </p>
      <div class="clients-slider">
        <div class="row-slider" :style="carouselTranslatefunc()">
          <div class="card-clients" v-for="client in clients">
            <img class="img-clients" :src="client.img" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.team-member-carosel {
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

  .clients-slider {
    height: 300px;
    display: flex;
    overflow: hidden;

    .row-slider {
      display: flex;
      height: 300px;
      width: 3960px;
      margin-top: 50px;
    }
    .card-clients {
      margin: 0 10px;

      .img-clients {
        width: 200px;
      }
    }
  }
}
</style>
