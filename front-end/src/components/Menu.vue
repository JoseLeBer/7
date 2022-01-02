<template>
  <div class="container-menu">
    <div class="row">
      <div class="col-6">
        <font-awesome-icon class="fa-header" icon="home" />
      </div>
      <div class="col-6 col-text">
        <router-link to="/">Accueil</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <font-awesome-icon class="fa-header" icon="user-circle" />
      </div>
      <div class="col-6 col-text">
        <router-link to="/profile">Profil</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <font-awesome-icon class="fa-header" icon="sign-out-alt" />
      </div>
      <div @click="logout()" class="col-6 col-text logout">Se déconnecter</div>
    </div>
  </div>
</template>

<script>
import router from "../router";

export default {
  name: "Menu",
  methods: {
    logout() {
      localStorage.removeItem("user");
      this.$store.dispatch("resetUser");
      router.push("/");
    },
  },
};
</script>

<style scoped lang="scss">
a {
  color: #2c3e50;
  text-decoration: none;
  &:hover {
    color: #ff8c8c;
  }
}
.container-menu {
  position: fixed;
  white-space: nowrap;
  font-weight: bold;
}
.row {
  margin-bottom: 20px;
}
.col-text {
  text-align: left;
}
.logout {
  cursor: pointer;
}
</style>
