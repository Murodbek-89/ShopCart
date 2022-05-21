<template>
  <div class="cart-list">
    <img class="cart-img" :src="require('@/img/' + carta.image)" />
    <div class="carta">
      <p>Name: {{ carta.name }}</p>
      <p>₽: {{ carta.prics }}</p>
      <p>Art: {{ carta.article }}</p>
    </div>
    <div class="cart-id">
      <span @click="incrementCart">+</span>
      <p>Qty: {{ carta.id }}</p>
      <span @click="decrementCart">-</span>
    </div>
    <button class="cart-btn" @click="cartDelete">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'CartList',
  created() {},
  data() {
    return {};
  },
  props: {
    carta: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  emits: ['cartDelete', 'increment', 'decrement'],
  methods: {
    cartDelete() {
      this.$emit('cartDelete');
    },
    incrementCart() {
      this.$emit('increment');
    },
    decrementCart() {
      this.$emit('decrement');
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-list {
  flex-basis: 25%;
  box-shadow: 0 0 10px 0;
  padding: 20px;
  margin: 30px auto;
  text-align: center;
  background-color: rgb(110, 110, 110);
}

.cart-list > .cart-img {
  width: 100%;
}

.cart-list p {
  padding: 5px;
  font-family: 'Josefin Sans', sans-serif;
}
.cart-id span {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 2rem;
  display: inline-block;
  cursor: pointer;
  height: 32px;
  width: 50px;
  background-color: rgb(140, 140, 140);
  border-radius: 2px;
  box-shadow: 0 0 5px 0;
}

.cart-list .cart-btn {
  border: 0 none;
  height: 35px;
  width: 85px;
  background: linear-gradient(#8004e6, rgb(64, 0, 255), rgb(0, 128, 255));
  color: aqua;
  border-radius: 3px;
  font: 12px 'raleway-heavy', sans-serif;
  cursor: pointer;
  margin-top: 10px;
}

.cart-list .cart-btn:hover {
  background: linear-gradient(#004463, rgb(0, 255, 145), rgb(0, 50, 99));
  color: rgb(0, 0, 0);
}
</style>
