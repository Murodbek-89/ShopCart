<template>
  <div class="cart-item">
    <img class="cart-img" :src="require('@/img/' + cartdata.image)" alt="" />
    <div>
      <p>Name: {{ cartdata.name }}</p>
      <p>₽: {{ cartdata.prics }}</p>
      <p>Art: {{ cartdata.article }}</p>
    </div>
    <div class="cart-id">
      <span @click="incrementCart">+</span>
      <p>Qty: {{ cartdata.id }}</p>
      <span @click="decrementCart">-</span>
    </div>
    <button class="cart-btn" @click="cartDelete">Delete</button>
  </div>
  <div class="cart-total">
    <h2>Total</h2>
    <h2>: {{ totalCart }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Cart-Item',
  created() {},
  data() {
    return {};
  },
  props: {
    cartdata: {
      type: Object,
      default() {
        return {};
      },
    },
    cartd: {
      type: Array,
      default() {
        return [];
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
  computed: {
    totalCart() {
      let result = [];
      for (let item of this.cartd) {
        result.push(item.prics * item.id);
      }

      result = result.reduce(function (sum, el) {
        return sum + el;
      });
      return result;
    },
  },
  mounted() {},
};
</script>

<style scoped>
.cart-item {
  flex-basis: 25%;
  box-shadow: 0 0 10px 0;
  padding: 20px;
  margin: 30px auto;
  text-align: center;
  background-color: rgb(110, 110, 110);
}

.cart-item .cart-img {
  width: 100%;
}

.cart-item p {
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

.cart-item .cart-btn {
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

.cart-item .cart-btn:hover {
  background: linear-gradient(#004463, rgb(0, 255, 145), rgb(0, 50, 99));
  color: rgb(0, 0, 0);
}

.cart-total {
  position: fixed;
  background: linear-gradient(#8004e6, rgb(64, 0, 255), rgb(0, 128, 255));
  padding: 15px;
  color: aqua;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  bottom: 0;
  left: 30%;
  right: 30%;
  cursor: pointer;
}

.cart-total:hover {
  background: linear-gradient(#004463, rgb(0, 255, 145), rgb(0, 50, 99));
  color: rgb(0, 0, 0);
}

.cart-total h2 {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.5rem;
}
</style>
