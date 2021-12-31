<template>
  <div class="container container-create-comment">
    <form>
      <div class="row">
        <div class="form-group">
          <input
            @click="getUserId()"
            v-model="text"
            type="text"
            id="inputIDC"
            class="form-control"
            placeholder="Votre commentaire..."
          />
        </div>
      </div>
      <div class="row">
        <div class="col-1"></div>
        <div class="col-8"></div>
        <div class="col-1">
          <button type="button" class="btn btn-primary" @click="sendData()">
            Publier
          </button>
        </div>
        <div class="col-1"></div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/api/",
});

export default {
  name: "CreateComment",
  data() {
    return {
      id_user: "",
      text: "",
    };
  },
  props: ["idpost"],
  methods: {
    getUserId() {
      let user = JSON.parse(localStorage.getItem("user"));
      let userId = user.userId;
      this.id_user = userId;
    },
    sendData() {
      document.getElementById("inputIDC").value = "";
      instance
        .post("comment", {
          id_user: this.id_user,
          text: this.text,
          id_post: this.idpost,
        })
        .then((response) => {
          console.log(response);
          this.$emit("newcomment");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
