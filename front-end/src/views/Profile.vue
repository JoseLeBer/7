<template>
  <div class="container">
    <h1>Espace Perso</h1>
    <p>Mon prénom : {{ user.user_firstname }}</p>
    <p>Mon nom : {{ user.user_lastname }}</p>
    <p>Mon adresse mail : {{ user.user_email }}</p>
    <p>Ma photo de profil :</p>
    <img class="profile-img" v-bind:src="user.image" />
    <div class="form-row">
      <button type="button" @click="deleteAccount()" class="btn btn-primary">
        Supprimer votre compte
      </button>
    </div>
  </div>
</template>

<script>
import router from "../router";
import axios from "axios";
import { mapState } from "vuex";

const instance = axios.create({
  baseURL: "http://localhost:3000/api/",
});

export default {
  name: "Profile",
  created() {
    let user = JSON.parse(localStorage.getItem("user"));
    let userId = user.userId;
    this.$store.dispatch("getUserInfos", `${userId}`);
  },
  mounted() {
    if (this.$store.state.user.userId == "") {
      router.push("/");
      return;
    }
  },
  computed: {
    ...mapState({
      user: "userInfos",
    }),
  },
  methods: {
    deleteAccount() {
      let user = JSON.parse(localStorage.getItem("user"));
      let userId = user.userId;
      instance.delete("user/" + userId).then((response) => {
        localStorage.removeItem("user");
        console.log(response);
        router.push("/");
      });
    },
  },
};
</script>

<style scoped lang="scss">
.profile-img {
  height: 200px;
  width: 200px;
  border: 4px solid #ff8c8c;
  border-radius: 50%;
  margin-bottom: 20px;
}
</style>
