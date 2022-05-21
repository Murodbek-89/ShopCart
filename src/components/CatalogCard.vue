<template>
  <div class="catalog-card">
    <div class="btn-card" @click="showCart">
      <div class="btn">
        <span v-if="catalogs">CART: {{ CART.length }}</span>
        <span v-else>CATALOG</span>
      </div>
    </div>
    <CatalogItem v-if="catalogs" />
    <CartItem v-else :cartdata="CART" />
  </div>
</template>

<script>
import CatalogItem from './catalog/Catalog-Item.vue';
import CartItem from './catalog/Cart-Item.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'CatalogCard',
  created() {},
  data() {
    return {
      catalogs: true,
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
    ...mapGetters(['CART']),
  },
  methods: {
    showCart() {
      this.catalogs = !this.catalogs;
      this.total = !this.total;
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
  components: { CatalogItem, CartItem },
};
</script>

<style scoped>
.catalog-card {
  width: 100%;
  margin: 0 auto;
}
</style>
