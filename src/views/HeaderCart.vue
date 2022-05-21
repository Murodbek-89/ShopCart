<template>
  <div class="header-cart">
    <div class="logo-cart">SHOPCART</div>
    <nav class="nav-menu">
      <ul>
        <li>
          <router-link to="about">About</router-link>
        </li>
        <li>
          <router-link to="photo">Photo</router-link>
        </li>
        <li>
          <router-link to="catalog">Catalog</router-link>
        </li>
        <li>
          <router-link to="coment">Coments</router-link>
        </li>
      </ul>
    </nav>
    <div class="reg-cart">
      <a href=""><button>KIRISH</button></a>
    </div>
    <div class="menu">
      <span class="spans1"></span>
      <span class="spans2"></span>
      <span class="spans3"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderCart',
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.header-cart {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(50, 50, 50);

  z-index: 999;
  padding: 30px;
  font-family: 'Josefin Sans', sans-serif;
}
.logo-cart {
  cursor: pointer;
  font-size: 2rem;
}
.reg-cart {
  margin-left: 200px;
}
.nav-menu {
  margin-left: 200px;
}
.nav-menu > ul {
  display: flex;
  list-style: none;
  gap: 50px;
}
.nav-menu > ul > li > a {
  font-size: 1.5rem;
  text-decoration: none;
  font-family: 'Josefin Sans', sans-serif;
  color: rgb(200, 200, 200);
}
.nav-menu > ul > li > a:hover {
  border-bottom: solid 3px aqua;
  color: aqua;
}

@media screen and (max-width: 1024px) {
  .reg-cart {
    margin-left: 0;
  }
  .nav-menu {
    margin-left: 0;
  }
  .nav-menu > ul > li > a {
    font-size: 1.2rem;
  }
}

@media screen and (max-width: 768px) {
  .logo-cart {
    font-size: 1.5rem;
  }
  .nav-menu > ul {
    gap: 30px;
  }
  .nav-menu > ul > li > a {
    font-size: 1.1rem;
  }
  .nav-menu > ul {
    margin-top: 80px;
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgb(56, 56, 56);
    overflow-x: hidden;
    transition: 0.5s;
    border-top: solid 2px rgb(200, 200, 200);
  }
  .navacteve {
    height: 100%;
    width: 100%;
    display: block;
    opacity: 1;
  }
  .nav-menu {
    display: block;
    margin-top: 30px;
  }
  .nav-menu > ul > li {
    display: block;
    padding: 10px 0 0 100px;
    margin: 30px;
    text-decoration: none;
    font-family: Josefin Sans;
  }

  .menu {
    cursor: pointer;
  }
  .menu > span {
    display: block;
    width: 30px;
    height: 3px;
    background-color: rgb(200, 200, 200);
  }
  .menu > span:not(:last-child) {
    margin-bottom: 7px;
  }
  .menu,
  .menu > span {
    transition: all 0.4s ease-in-out;
  }
  .menus > .spans1 {
    transform: rotate(-45deg) translate(-7px, 10px);
  }
  .menus > .spans2 {
    opacity: 0;
  }
  .menus > .spans3 {
    transform: rotate(45deg) translate(-5px, -7px);
  }
}
@media screen and (max-width: 425px) {
  .reg-cart {
    display: none;
  }
}
.reg-cart button {
  background: rgb(200, 200, 200);
  font-family: 'Josefin Sans', sans-serif;
  border: 0 none;
  height: 30px;
  width: 100px;
  padding: 10px 20px;
  display: inline-block;
  cursor: pointer;
  transform: skew(-21deg);
  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 100%;
    left: 0;
    background: rgb(100, 100, 100);
    opacity: 0;
    z-index: -1;
    transition: all 0.5s;
  }
  &:hover {
    &:before {
      left: 0;
      right: 0;
      opacity: 1;
    }
  }
}
</style>
