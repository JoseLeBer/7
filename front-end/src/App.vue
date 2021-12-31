<template>
  <Header />
  <div id="nav">
    <router-link to="/">Accueil</router-link> |
    <router-link to="/profile">Profile</router-link>
  </div>
  <router-view />
</template>

<script>
import Header from "../src/components/Header.vue";

export default {
  name: "Home",
  components: {
    Header,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #ff8c8c;
    }
  }
}

.btn-primary {
  background-color: #ff8c8c !important;
  border: 0px !important;
  border-radius: 10px !important;
  transform: scale(1);
  transition: transform 200ms;
  &:hover {
    transform: scale(1.15);
  }
}
</style>
