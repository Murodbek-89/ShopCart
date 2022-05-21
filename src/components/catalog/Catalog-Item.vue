<template>
  <div class="item-card">
    <CatalogList
      v-for="producta of PRODUCTS"
      :key="producta"
      :product="producta"
      @addCart="addCart"
    />
  </div>
</template>

<script>
import CatalogList from './Catalog-List.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Catalog-Item',
  created() {},
  data() {
    return {
      openfiltr: false,
    };
  },
  props: {
    productItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    ...mapGetters(['PRODUCTS']),
    filtrProducts() {
      if (this.sortProducts.length) {
        return this.sortProducts;
      } else {
        return this.PRODUCTS;
      }
    },
  },
  emits: ['selectOpsi'],
  methods: {
    ...mapActions(['GET_PRODUCTS', 'ADD_CART']),
    addCart(data) {
      this.ADD_CART(data);
    },
    selectsOpsi(category) {
      this.$emit('selectOpsi', category);
    },
  },
  mounted() {
    this.GET_PRODUCTS().then((response) => {
      if (response.data) {
        console.log('Data arrived!');
      }
    });
  },
  components: { CatalogList },
};
</script>

<style scoped>
.item-card {
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  background-color: rgb(60, 60, 60);
}
</style>
