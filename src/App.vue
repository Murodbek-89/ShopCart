<template>
  <div>
    <HeaderCart />
    <HeroCart />
    <HomeCart />
    <router-view></router-view>
    <FootherCart />
  </div>
</template>
<script>
import HeaderCart from './views/HeaderCart.vue';
import HomeCart from './views/HomeCart.vue';
import HeroCart from './views/HeroCart.vue';
import FootherCart from './views/FootherCart.vue';
export default {
  components: { HeaderCart, HomeCart, HeroCart, FootherCart },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap');

* {
  margin: 0;
  padding: 0;
}
.btn-cart {
  position: relative;
}

.btn {
  position: absolute;
  top: -21px;
  left: 50%;
  z-index: 100;
  cursor: pointer;
}

.btn span {
  text-decoration: none;
  border: 0 none;
  display: block;
  height: 54px;
  width: 200px;
  margin-left: -100px;
  background: linear-gradient(#8004e6, rgb(64, 0, 255), rgb(0, 128, 255));
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);
  color: aqua;
  text-align: center;
  border-radius: 3px;
  font: 12px/54px 'raleway-heavy', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s ease-in-out;
}

.btn span:hover {
  background: linear-gradient(#004463, rgb(0, 255, 145), rgb(0, 50, 99));
  color: rgb(0, 0, 0);
}
</style>
