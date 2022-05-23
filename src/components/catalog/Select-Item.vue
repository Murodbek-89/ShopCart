<template>
  <div class="filtr" :class="{ activefiltr: openfiltr }">
    <div class="filtr-card">
      <p
        v-for="categore of category"
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
      <h2>{{ selects }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectItem',
  created() {},
  data() {
    return {
      openfiltr: false,
      options: '',
    };
  },
  props: {
    category: {
      type: Array,
      default() {
        return [];
      },
    },
    selects: {
      type: String,
      default: '',
    },
  },
  methods: {
    selectsOpsi(category) {
      this.$emit('selectOpsi', category);
      this.options = false;
    },
  },
};
</script>

<style lang="scss" scoped>
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
  font-family: 'Josefin Sans', sans-serif;
}
.activefiltr {
  width: 20%;
}
.open-filtr {
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
.open-filtr h2 {
  margin-top: 5px;
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
  top: 20px;
}
.open-filtr .spansi {
  transform: rotate(45deg);
  right: 35px;
  bottom: 0;
}

.opens .spans {
  top: 10px;
  transition: all 0.5s ease;
}
.opens .spansi {
  bottom: -10px;
  transition: all 0.5s ease;
}

.filtr-card {
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}

.filtr-card p {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block;
  transition: 0.3s;
  cursor: pointer;
}

.filtr-card p:hover {
  color: #f1f1f1;
}
</style>
