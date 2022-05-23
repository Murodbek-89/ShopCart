<template>
  <div class="item-card">
    <SelectItem
      :category="categoryes"
      :selects="select"
      @selectOpsi="selectSort"
    />
    <CatalogList
      v-for="producta of filtrProducts"
      :key="producta"
      :product="producta"
      @addCart="addCart"
    />
  </div>
</template>

<script>
import CatalogList from './Catalog-List.vue';
import SelectItem from './Select-Item.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Catalog-Item',
  created() {},
  data() {
    return {
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
  components: { CatalogList, SelectItem },
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
