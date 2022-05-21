<template>
  <div class="card">
    <div class="btn-card" @click="showCart">
      <div class="btn">
        <span v-if="catalogs">CART: {{ CART.length }}</span>
        <span v-else>CATALOG</span>
      </div>
    </div>
    <div class="catalog-card" v-if="catalogs">
      <CatologItem
        v-for="product of filtrProducts"
        :key="product.id"
        :productcard="product"
        :categorys="categoryes"
        :selected="select"
        @selectOpsi="selectSort"
        @addCard="addCard"
      />
    </div>
    <div class="item-card" v-else>
      <h2 v-if="!CART.length">There are no products in cart...</h2>
      <CartItem
        v-for="(carta, i) of CART"
        :key="carta"
        :cartdata="carta"
        @cartDelete="cartDelete(i)"
        :cartd="CART"
        @increment="increMent(i)"
        @decrement="decreMent(i)"
      />
    </div>
  </div>
</template>

<script>
import CatologItem from './catalog/Catolog-Item.vue';
import CartItem from './catalog/Cart-Item.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'CatalogCard',
  created() {},
  data() {
    return {
      catalogs: true,
      total: false,
      categoryes: [
        { names: 'All', value: 'all' },
        { names: 'Nature', value: 'm' },
        { names: 'City', value: 'm' },
      ],
      select: 'FILTERS',
      sortProducts: [],
    };
  },
  props: {},
  computed: {
    ...mapGetters(['PRODUCTS', 'CART']),
    filtrProducts() {
      if (this.sortProducts.length) {
        return this.sortProducts;
      } else {
        return this.PRODUCTS;
      }
    },
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS',
      'ADD_CART',
      'DELETE_CART',
      'INCREMENT_CART',
      'DECREMENT_CART',
    ]),
    addCard(data) {
      this.ADD_CART(data);
    },
    cartDelete(i) {
      this.DELETE_CART(i);
    },
    showCart() {
      this.catalogs = !this.catalogs;
      this.total = !this.total;
    },
    increMent(i) {
      this.INCREMENT_CART(i);
    },
    decreMent(i) {
      this.DECREMENT_CART(i);
    },
    selectSort(category) {
      this.sortProducts = [];
      let vm = this;
      this.PRODUCTS.map(function (item) {
        if (item.category === category.names) {
          vm.sortProducts.push(item);
        }
      });
      this.select = category.names;
    },
  },
  mounted() {
    this.GET_PRODUCTS().then((response) => {
      if (response.data) {
        console.log('Data arrived!');
      }
    });
  },
  components: { CatologItem, CartItem },
};
</script>

<style scoped>
.card {
  width: 100%;
  margin: 0 auto;
}
.catalog-card {
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  background-color: rgb(60, 60, 60);
}
.item-card {
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  background-color: rgb(60, 60, 60);
}

.item-card h2 {
  color: aqua;
  font-family: 'Josefin Sans', sans-serif;
  margin: 50px auto;
  min-height: 100px;
}
</style>
