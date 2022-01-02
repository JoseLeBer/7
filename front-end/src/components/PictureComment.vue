<template>
  <img class="comment-pp" v-bind:src="user.image" alt="" />
</template>

<script>
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/api/",
});

export default {
  name: "PictureComment",
  props: ["idUser"],
  data() {
    return {
      user: "",
    };
  },
  mounted() {
    let parameters = this.idUser;
    instance.get("/user/" + parameters).then((response) => {
      this.user = response.data[0];
    });
  },
};
</script>
