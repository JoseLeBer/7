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
      <div class="col-6 col-text">Se déconnecter</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style scoped lang="scss">
a {
  color: #2c3e50;
  text-decoration: none;
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
</style>
