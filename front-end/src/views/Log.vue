<template>
  <div class="container">
    <h1 class="card__title" v-if="mode == 'login'">Connectez-vous</h1>
    <h1 class="card__title" v-else>Prêt à vous inscrire ?</h1>
    <p class="card__subtitle" v-if="mode == 'login'">
      Vous ne possédez pas encore de compte GroupomaniaBook ?
      <span class="card__action" @click="switchToCreateAccount()"
        >Inscrivez-vous</span
      >
    </p>
    <p class="card__subtitle" v-else>
      Déjà inscrit sur GroupomaniaBook ?
      <span class="card__action" @click="switchToLogin()">Se connecter</span>
    </p>
    <form>
      <div class="row row-form">
        <div class="col-4"></div>
        <div class="form-group col-4">
          <input
            v-model="email"
            type="email"
            class="form-control"
            placeholder="Adresse mail"
          />
        </div>
        <div class="col-4"></div>
      </div>
      <div class="row row-form">
        <div class="col-4"></div>
        <div class="form-group col-4" v-if="mode == 'create'">
          <input
            v-model="firstName"
            type="text"
            class="form-control"
            placeholder="Prénom"
          />
        </div>
        <div class="col-4"></div>
      </div>
      <div class="row row-form">
        <div class="col-4"></div>
        <div class="form-group col-4" v-if="mode == 'create'">
          <input
            v-model="lastName"
            type="text"
            class="form-control"
            placeholder="Nom"
          />
        </div>
        <div class="col-4"></div>
      </div>
      <div class="row row-form">
        <div class="col-4"></div>
        <div class="form-group col-4">
          <input
            v-model="password"
            type="password"
            class="form-control"
            placeholder="Mot de passe"
          />
          <div
            class="form-group"
            v-if="mode == 'login' && status == 'error_login'"
          >
            Invalid email and/or password.
          </div>
          <div
            class="form-group"
            v-if="mode == 'create' && status == 'error_create'"
          >
            An account with that email address already exists. Please login to
            continue.
          </div>
        </div>
        <div class="col-4"></div>
      </div>
      <div class="form-group">
        <button
          type="button"
          class="btn btn-primary"
          @click="login()"
          v-if="mode == 'login'"
        >
          <span v-if="status == 'loading'">Connexion en cours...</span>
          <span v-else>Connexion</span>
        </button>
        <button
          type="button"
          class="btn btn-primary"
          @click="createAccount()"
          v-else
        >
          <span v-if="status == 'loading'">Création en cours...</span>
          <span v-else>Créer un compte</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import router from "../router";
import { mapState } from "vuex";

export default {
  name: "Log",
  data() {
    return {
      mode: "login",
      email: "",
      firstName: "",
      lastName: "",
      password: "",
    };
  },
  mounted() {
    if (this.$store.state.user.userId != "") {
      router.push("/home");
      return;
    }
  },
  computed: {
    ...mapState(["status"]),
  },
  methods: {
    switchToCreateAccount() {
      this.mode = "create";
    },
    switchToLogin() {
      this.mode = "login";
    },
    createAccount() {
      this.$store
        .dispatch("createAccount", {
          user_firstname: this.firstName,
          user_lastname: this.lastName,
          user_email: this.email,
          user_password: this.password,
        })
        .then(
          (response) => {
            console.log(response);
            this.login();
          },
          (error) => {
            console.log(error);
          }
        );
    },
    login() {
      this.$store
        .dispatch("login", {
          user_email: this.email,
          user_password: this.password,
        })
        .then(
          (response) => {
            console.log(response.data);
            router.push("/home");
          },
          (error) => {
            console.log(error);
          }
        );
    },
  },
};
</script>

<style scoped>
.card__action {
  color: #0000ee;
  text-decoration: underline;
}
.row-form {
  margin-bottom: 20px;
}
</style>
