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
    };
  },
  props: {},
  computed: {
    ...mapGetters(['CART']),
  },
  methods: {
    showCart() {
      this.catalogs = !this.catalogs;
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
