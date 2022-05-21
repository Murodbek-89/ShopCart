<template>
  <div class="coment-cart">
    <div class="btn-cart">
      <div class="btn" @click="showComent = !showComent">
        <span v-if="showComent">COMENTS</span>
        <span v-else>ADD COMENTS</span>
      </div>
    </div>
    <ComentItem @addComent="addComents" v-show="showComent" />
    <div class="coments-cart" v-for="coment of coments" :key="coment">
      <div class="profil-cart">
        <img class="profil-img" src="@/img/20.jpg" alt="profile" />
        <span class="names">{{ coment.names }}</span>
      </div>
      <div class="coment-holder">
        <p>{{ coment.comenta }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ComentItem from './coment/Coment-Item.vue';
export default {
  name: 'ComentCart',
  created() {},
  data() {
    return {
      coments: [
        { id: 1, img: '', names: 'Murodbek', comenta: 'Hello World' },
        { id: 1, img: '', names: 'Murodbek', comenta: 'Hello World' },
      ],
      showComent: false,
    };
  },
  props: {},
  methods: {
    addComents(comet) {
      this.coments.push(comet);
    },
  },
  components: { ComentItem },
};
</script>

<style scoped>
.coment-cart {
  background-color: rgb(60, 60, 60);
}

.coments-cart {
  position: relative;
  max-width: 800px;
  padding: 50px;
  margin: auto;
}

.coments-cart .profil-cart {
  position: absolute;
  left: 30px;
  text-align: center;
  left: inherit;
  right: 30px;
}
.coments-cart .profil-img {
  display: inline-block;
  margin: 0 auto;
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.coments-cart .profil-cart .names {
  display: block;
  color: #fff;
  font-family: 'Josefin Sans', sans-serif;
}

.coments-cart .coment-holder {
  font-family: 'Josefin Sans', sans-serif;
  background-color: rgb(90, 90, 90);
  box-shadow: 0 0 10px 0;
  color: #fff;
  margin-left: 105px;
  border-left: none;
  margin-bottom: 0;
  font-size: 14px;
  min-height: 80px;
  border-radius: 4px;
  background-clip: padding-box;
  position: relative;
  padding: 30px;
  margin-left: 0;
  margin-right: 105px;
}
</style>
