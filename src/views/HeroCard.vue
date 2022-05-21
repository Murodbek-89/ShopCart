<template>
  <div class="herocard">
    <div class="slidecard" v-for="sliders of autoslider" :key="sliders.id">
      <div
        class="caruselcard"
        :style="{ 'margin-left': '-' + 100 * slideindex + '%' }"
      >
        <img alt="" :src="require('@/img/' + sliders.img)" />
        <h1>{{ sliders.names }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroCard',
  created() {},
  data() {
    return {
      autoslider: [
        { id: 1, names: 'XUSH KELIBSIZ', img: '11.jpg' },
        { id: 2, names: 'WELCOME', img: '12.jpg' },
        { id: 3, names: 'DOBRO POJALOVAT', img: '14.jpg' },
      ],
      slideindex: 0,
      names: '',
    };
  },
  props: {},
  methods: {
    slider() {
      if (this.slideindex >= this.autoslider.length - 1) {
        this.slideindex = 0;
      } else {
        this.slideindex++;
      }
    },
    carusels() {
      var v = this;
      setInterval(function () {
        v.interval = v.slider();
      }, 3000);
    },
  },
  mounted() {
    this.carusels();
  },

  components: {},
};
</script>

<style scoped>
.herocard {
  margin: auto;
  padding-top: 10%;
  max-width: 90%;
  overflow: hidden;
  display: flex;
}

.slidecard {
  display: flex;
  position: relative;
  text-align: center;
}

.caruselcard {
  display: flex;
}

img {
  width: 100vw;
  height: 80vh;
}

h1 {
  font-family: 'Josefin Sans', sans-serif;
  position: absolute;
  top: 80%;
  color: rgb(200, 200, 200);
  margin-left: 40%;
}

@media screen and (max-width: 768px) {
  h1 {
    margin-left: 30%;
  }
}
</style>
