<template>
  <footer class="footer-cart">
    <ul class="social">
      <li
        v-for="(social, i) of socials"
        :key="i"
        @mouseover="showsi(i)"
        @mouseout="hides(i)"
      >
        <img :src="require('@/img/' + social.img)" alt="" v-if="socialshow" />
        <p>{{ social.names }}</p>
      </li>
    </ul>
    <hr />
    <ul class="copy">
      <li>&copy; CoDEC 2022</li>
    </ul>
    <div class="btn-card">
      <div class="btn">
        <span>BACK TO TOP</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooherCart',
  created() {},
  data() {
    return {
      socials: [
        { id: 1, names: 'Whatsapp', img: 'whatsapp.png' },
        { id: 2, names: 'Telegram', img: 'telegram.png' },
        { id: 3, names: 'Instagram', img: 'instagram.png' },
        { id: 4, names: 'YouTube', img: 'youtube.png' },
        { id: 5, names: 'Odnaklassniki', img: 'odnaklassniki.png' },
      ],
      socialshow: {
        type: Boolean,
        default() {
          return {};
        },
      },
    };
  },
  props: {},
  methods: {
    showsi() {
      this.socialshow = !this.socialshow;
    },
    hides() {
      this.socialshow = !this.socialshow;
    },
  },
};
</script>

<style scoped>
/* ---------Foter--------- */

.footer-cart {
  width: 100%;
  padding-top: 60px;
  padding-bottom: 24px;
  position: relative;
  background-color: rgb(50, 50, 50);
}

.footer-cart hr {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  max-width: 800px;
  width: 80%;
}

.footer-cart .copy {
  font: 1.2em 'raleway-medium', sans-serif;
  text-align: center;
  list-style: none;
  padding: 0;
}

.social {
  text-align: center;
  padding: 0;
}

.social li {
  overflow: hidden;
  display: inline-block;
  margin: 20px;
  background: linear-gradient(#8004e6, rgb(64, 0, 255), rgb(0, 128, 255));
  width: 100px;
  height: 40px;
  border: 2px solid rgb(45, 45, 45);
  border-radius: 4px;
  transition: all 0.5s;
  cursor: pointer;
}

.social img {
  width: 40px;
  height: 40px;
  transition: all 0.5s;
}

.social p {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 0.8rem;
  text-align: center;
  margin-top: 12px;
  transition: all 0.5s;
}

@media only screen and (max-width: 700px) {
  .social li {
    width: 100px;
    height: 30px;
  }

  .social img {
    width: 30px;
    height: 30px;
  }
  .social p {
    margin-top: 9px;
  }
}

@media only screen and (max-width: 450px) {
  .social li {
    margin: 10px;
    width: 80px;
    height: 20px;
  }
  .social img {
    width: 20px;
    height: 20px;
  }
  .social p {
    margin-top: 5px;
    font-size: 0.7rem;
  }
}
.btn {
  position: absolute;
  top: -21px;
  left: 50%;
  z-index: 100;
}
</style>
