<template>
  <div class="coment-card">
    <div class="btn-card">
      <div class="btn" @click="showComent = !showComent">
        <span v-if="showComent">COMENTS</span>
        <span v-else>ADD COMENTS</span>
      </div>
    </div>
    <ComentItem @addComent="addComents" v-show="showComent" />
    <div class="coment-section">
      <div class="item item-reversed" v-for="coment of coments" :key="coment">
        <div class="profile-holder">
          <img
            class="profile-image"
            :src="require('@/img/11.jpg')"
            alt="profile"
          />
          <h6 class="name">{{ coment.name }}</h6>
        </div>
        <div class="coment-body">
          <p>{{ coment.body }}</p>
          <p class="email">{{ coment.email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ComentItem from './coment/Coment-Item.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'ComentCart',
  created() {},
  data() {
    return {
      showComent: false,
      coments: [
        { id: 1, img: '', name: 'Murodbek', body: 'Hello World' },
        { id: 2, img: '', name: 'Murodbek', body: 'Hello World' },
      ],
    };
  },
  props: {},
  methods: {
    ...mapActions(['GET_COMENT']),
    addComents(comet) {
      this.coments.push(comet);
    },
  },
  computed: {
    ...mapGetters(['COMENT']),
  },
  mounted() {
    this.GET_COMENT();
  },
  components: { ComentItem },
};
</script>

<style scoped>
.coment-card {
  background: #40babd url('../img/hero-3.jpg') no-repeat center center;
  background-attachment: fixed;
  font-family: 'Josefin Sans', sans-serif;
  background-size: cover;
  padding-bottom: 90px;
}
.coment-section .item {
  position: relative;
  max-width: 800px;
  padding: 50px;
  margin: auto;
}
.coment-section .item.item-reversed .profile-holder {
  left: inherit;
  right: 30px;
}
.coment-section .item.item-reversed .coment-body {
  margin-left: 0;
  margin-right: 105px;
}
.coment-section .item .profile-holder {
  position: absolute;
  left: 30px;
  text-align: center;
}
.name {
  width: 80px;
}
.coment-section .item .profile-image {
  display: inline-block;
  margin: 0 auto;
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.coment-section .item .coment-body {
  background: rgba(0, 0, 0, 0.2);
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
}
.coment-section .item .coment-body .email {
  color: rgba(0, 0, 0, 0.6);
  width: 30px;
}
</style>
