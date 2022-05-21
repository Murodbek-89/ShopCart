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
</template>

<script>
export default {
  name: 'Test',
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
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
</style>
