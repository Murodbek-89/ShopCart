<template>
  <header class="header-card">
    <router-link to="/" class="logo">ShooPCard</router-link>
    <div class="menu" :class="{ menus: shows }" @click="shows = !shows">
      <span class="spans1"></span>
      <span class="spans2"></span>
      <span class="spans3"></span>
    </div>
    <nav class="nav-card" :class="{ navacteve: shows }">
      <ul class="nav-menu" @click="shows = false">
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
        <li class="reg-card">
          <router-link to="contact"><button>KIRISH</button></router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderCard',
  created() {},
  data() {
    return {
      shows: false,
    };
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.header-card {
  width: 100%;
  height: 80px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(50, 50, 50);
  position: fixed;
  z-index: 999;
}

.header-card > a {
  text-decoration: none;
  color: rgb(200, 200, 200);
  font-size: 2rem;
}

.logo {
  margin-top: 10px;
  margin-left: 30px;
  font-family: 'Josefin Sans', sans-serif;
}

.logo:hover {
  color: aqua;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 50px;
  margin-right: 50px;
  align-items: flex-end;
}
.nav-menu > li > a {
  font-size: 1.5rem;
  text-decoration: none;
  font-family: 'Josefin Sans', sans-serif;
  color: rgb(200, 200, 200);
}

.nav-menu > li > a:hover {
  color: aqua;
}

@media screen and (max-width: 900px) {
  .nav-menu {
    gap: 20px;
    margin-right: 30px;
  }
  .nav-menu > li > a {
    font-size: 1.1rem;
  }
}

@media screen and (max-width: 650px) {
  .nav-card {
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
  .nav-menu > li {
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
.reg-card button {
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
