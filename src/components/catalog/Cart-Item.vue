<template>
  <div class="cart-item">
    <CartList
      v-for="(cartitem, i) of cartdata"
      :key="cartitem"
      :carta="cartitem"
      @cartDelete="cartDelete(i)"
      @increment="increMent(i)"
      @decrement="decreMent(i)"
    />
    <h2 v-if="!cartdata.length">There are no products in cart...</h2>
  </div>
  <div class="cart-total">
    <h2>Total</h2>
    <h2>: {{ totalCart }}</h2>
  </div>
</template>

<script>
import CartList from './Cart-List.vue';
import { mapActions } from 'vuex';
export default {
  name: 'Cart-Item',
  created() {},
  data() {
    return {};
  },
  props: {
    cartdata: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    ...mapActions(['DELETE_CART', 'INCREMENT_CART', 'DECREMENT_CART']),
    cartDelete(i) {
      this.DELETE_CART(i);
    },
    increMent(i) {
      this.INCREMENT_CART(i);
    },
    decreMent(i) {
      this.DECREMENT_CART(i);
    },
  },
  computed: {
    totalCart() {
      let result = [];

      if (this.cartdata.length) {
        for (let item of this.cartdata) {
          result.push(item.prics * item.id);
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        });
        return result;
      } else {
        return 0;
      }
    },
  },
  mounted() {},
  components: { CartList },
};
</script>

<style scoped>
.cart-item {
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  background-color: rgb(60, 60, 60);
}

.cart-item > h2 {
  color: aqua;
  font-family: 'Josefin Sans', sans-serif;
  margin: 50px auto;
  min-height: 100px;
}

.cart-total {
  position: fixed;
  background: linear-gradient(#8004e6, rgb(64, 0, 255), rgb(0, 128, 255));
  padding: 17px;
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
