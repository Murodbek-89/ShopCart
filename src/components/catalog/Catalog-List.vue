<template>
  <div class="list-card">
    <img class="img-card" :src="require('@/img/' + product.image)" alt="" />
    <p>Name: {{ product.name }}</p>
    <p>₽: {{ product.prics }}</p>
    <p>Art: {{ product.article }}</p>
    <button class="btns-card" @click="addCart">Add Card</button>
  </div>
</template>

<script>
export default {
  name: 'CatalogList',
  created() {},
  data() {
    return {};
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  emits: ['addCart'],
  methods: {
    addCart() {
      this.$emit('addCart', this.product);
    },
  },
};
</script>

<style lang="scss" scoped>
.list-card {
  flex-basis: 25%;
  box-shadow: 0 0 10px 0;
  padding: 20px;
  margin: 30px auto;
  text-align: center;
  background-color: rgb(150, 150, 150);
}

.list-card > .img-card {
  width: 100%;
}

.list-card > p {
  padding: 5px;
  font-family: 'Josefin Sans', sans-serif;
}

.list-card > .btns-card {
  border: 0 none;
  height: 35px;
  width: 85px;
  background: linear-gradient(#8004e6, rgb(64, 0, 255), rgb(0, 128, 255));
  color: aqua;
  border-radius: 3px;
  font: 12px 'raleway-heavy', sans-serif;
  cursor: pointer;
}

.list-card > .btns-card:hover {
  background: linear-gradient(#004463, rgb(0, 255, 145), rgb(0, 50, 99));
  color: rgb(0, 0, 0);
}
</style>
