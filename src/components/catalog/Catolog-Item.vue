<template>
  <div class="filtr" :class="{ activefiltr: openfiltr }">
    <div class="filtr-cart">
      <p
        v-for="categore of categorys"
        :key="categore.value"
        @click="selectsOpsi(categore), (openfiltr = false)"
      >
        {{ categore.names }}
      </p>
    </div>
    <div
      class="open-filtr"
      @click="openfiltr = !openfiltr"
      :class="{ opens: openfiltr }"
    >
      <span class="spans"></span>
      <span class="spansi"></span>
      <h2>{{ selected }}</h2>
    </div>
  </div>
  <div class="catalog-item">
    <img class="img-card" :src="require('@/img/' + productcard.image)" alt="" />
    <p>Name: {{ productcard.name }}</p>
    <p>₽: {{ productcard.prics }}</p>
    <p>Art: {{ productcard.article }}</p>
    <button class="btn-card" @click="addCard">Add Card</button>
  </div>
</template>

<script>
export default {
  name: 'Catalog-Item',
  created() {},
  data() {
    return {
      openfiltr: false,
    };
  },
  props: {
    productcard: {
      type: Object,
      default() {
        return {};
      },
    },
    selected: {
      type: String,
      default: '',
    },
    categorys: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  emits: ['addCard', 'selectOpsi'],
  methods: {
    addCard() {
      this.$emit('addCard', this.productcard);
    },
    selectsOpsi(category) {
      this.$emit('selectOpsi', category);
    },
  },
};
</script>

<style scoped>
.filtr {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 0.9;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
  overflow-x: hidden;
  transition: 0.5s;
}
.activefiltr {
  width: 20%;
}
.open-filtr {
  font-size: 25px;
  cursor: pointer;
  position: fixed;
  background: linear-gradient(#8004e6, rgb(64, 0, 255), rgb(0, 128, 255));
  padding: 10px;
  color: aqua;
  font-family: 'Josefin Sans', sans-serif;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  bottom: 0;
  left: 30%;
  right: 30%;
}
.open-filtr span {
  z-index: 100;
  width: 35px;
  height: 7px;
  background-color: aqua;
  transition: all 0.5s;
  border-radius: 3px;
  position: relative;
}
.open-filtr .spans {
  transform: rotate(-45deg);
  top: 25px;
}
.open-filtr .spansi {
  transform: rotate(45deg);
  right: 35px;
  bottom: -5px;
}

.opens .spans {
  top: 16px;
  transition: all 0.5s ease;
}
.opens .spansi {
  bottom: -16px;
  transition: all 0.5s ease;
}

.filtr-cart {
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}

.filtr-cart p {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block;
  transition: 0.3s;
  cursor: pointer;
}

.filtr-cart p:hover,
.filtr-cart p:focus {
  color: #f1f1f1;
}

.catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 10px 0;
  padding: 20px;
  margin: 30px auto;
  text-align: center;
  background-color: rgb(150, 150, 150);
}

.catalog-item .img-card {
  width: 100%;
}

.catalog-item p {
  padding: 5px;
  font-family: 'Josefin Sans', sans-serif;
}

.catalog-item .btn-card {
  border: 0 none;
  height: 35px;
  width: 85px;
  background: linear-gradient(#8004e6, rgb(64, 0, 255), rgb(0, 128, 255));
  color: aqua;
  border-radius: 3px;
  font: 12px 'raleway-heavy', sans-serif;
  cursor: pointer;
}

.catalog-item .btn-card:hover {
  background: linear-gradient(#004463, rgb(0, 255, 145), rgb(0, 50, 99));
  color: rgb(0, 0, 0);
}
</style>
