<template>
  <div class="menu-cart">
    <div class="menu">
      <span class="spans1"></span>
      <span class="spans2"></span>
      <span class="spans3"></span>
    </div>
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
        <li>
          <router-link to="contact">Contact</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HeaderHero',
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.menu-cart {
  display: flex;
  position: relative;
  padding: 20px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(100, 100, 100);
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

@media screen and (max-width: 850px) {
  .nav-menu {
    gap: 20px;
    margin-right: 30px;
  }
  .nav-menu > ul > li > a {
    font-size: 1.1rem;
  }
}

@media screen and (max-width: 600px) {
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
    margin-right: 30px;
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
</style>
