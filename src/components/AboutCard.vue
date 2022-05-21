<template>
  <div class="about-card">
    <div class="btn-card">
      <div class="btn" @click="modals = !modals">
        <span>MODALS</span>
      </div>
    </div>
    <div class="about-card">
      <h2>Why Use AppKit?</h2>
      <ul>
        <li v-for="image of images" :key="image">
          <img
            @mouseover="imyashow = !imyashow"
            :src="require('@/assets/' + image.img)"
          />
          <h3 v-show="imyashow">{{ image.imya }}</h3>
        </li>
      </ul>
      <div class="about-item" v-for="about of abouts" :key="about">
        <div class="abaout-figure">
          <img :src="require('@/img/' + about.img)" />
          <h3>{{ about.names }}</h3>
          <p>{{ about.text }}</p>
        </div>
      </div>
    </div>
    <div class="modal-card" v-show="modals">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad modi
        repellendus, optio eveniet eligendi molestiae? Fugiat, temporibus! A
        rerum pariatur neque laborum earum, illum voluptatibus eum voluptatem
        fugiat, porro animi tempora? Sit harum nulla, nesciunt molestias, iusto
        aliquam aperiam est qui possimus reprehenderit ipsam ea aut assumenda
        inventore iste! Animi quaerat facere repudiandae earum quisquam
        accusamus tempora, delectus nesciunt, provident quae aliquam, voluptatum
        beatae quis similique in maiores repellat eligendi voluptas veniam optio
        illum vero! Eius, dignissimos esse eligendi veniam.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutCard',
  created() {},
  data() {
    return {
      abouts: [
        {
          names: 'GRAPIHCS',
          text: 'short messages to and from mobile phones. SMS was originally defined as part of the GSM series of standards in 1985 as a means of sending messages of up to 160 characters, to and from GSM mobile handsets.',
          img: 'figure-1.png',
        },
        {
          names: 'CODE-TIME',
          text: 'Short Message Service (SMS) & Text Messaging (Texting) are the same thing. It is a means of sending short as part of the GSM series of standards in 1985 as a means of sending messages of up to 160 characters, to and from GSM mobile handsets.',
          img: 'figure-2.png',
        },
        {
          names: 'TEXNOLOGIA',
          text: 'Short Message Service (SMS) & Text Messaging (Texting) are the same thing. It is a means of sending short messages to and from mobile phones. SMS was originally defined as part of the GSM series of standards ',
          img: 'figure-3.png',
        },
      ],
      images: [
        { imya: 'HTML', img: 'logo-html5.svg' },
        { imya: 'ANGULR', img: 'logo-angular.svg' },
        { imya: 'JQUERY', img: 'logo-jquery.svg' },
        { imya: 'SASS', img: 'logo-sass.svg' },
        { imya: 'BOOTSTRAP', img: 'logo-bootstrap.svg' },
        { imya: 'CSS3', img: 'logo-css3.svg' },
      ],
      modals: false,
      imyashow: false,
    };
  },
  props: {},
  methods: {},
};
</script>

<style scoped>
.about-card {
  padding: 2em 5%;
  text-align: center;
  background-color: rgb(60, 60, 60);
  position: relative;
}
.about-card h2,
h3,
p {
  line-height: 1.6;
  color: rgb(200, 200, 200);
  font-family: 'Josefin Sans', sans-serif;
}
.about-card ul li {
  padding: 20px;
  display: inline-block;
}

.abaout-figure {
  margin: 50px;
}

.modal-card {
  position: fixed;
  background-color: rgb(60, 60, 60);
  top: 12%;
  left: 0;
  width: 100%;
  height: 100%;
}

.modal-card p {
  color: rgb(200, 200, 200);
  line-height: 1.6;
  margin: 4em;
  font-size: 1.4rem;
}

@media only screen and (max-width: 700px) {
  .modal-card p {
    line-height: 1.6;
    margin: 4em;
    font-size: 1rem;
  }
}
</style>
