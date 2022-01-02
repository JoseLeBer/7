<template>
  <div class="container">
    <div class="row">
      <div class="col-2">
        <Menu></Menu>
      </div>
      <div class="col-7">
        <h1>Espace Perso</h1>
        <p>Mon prénom : {{ user.user_firstname }}</p>
        <p>Mon nom : {{ user.user_lastname }}</p>
        <p>Mon adresse mail : {{ user.user_email }}</p>
        <p>Ma photo de profil :</p>
        <img class="profile-img" v-bind:src="user.image" />
        <div class="form-row">
          <button
            type="button"
            @click="deleteAccount()"
            class="btn btn-primary"
          >
            Supprimer votre compte
          </button>
        </div>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
import router from "../router";
import axios from "axios";
import { mapState } from "vuex";
import Menu from "../components/Menu.vue";

const instance = axios.create({
  baseURL: "http://localhost:3000/api/",
});

export default {
  name: "Profile",
  components: { Menu },
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
