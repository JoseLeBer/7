<template>
  <div>{{ user.user_firstname }} {{ user.user_lastname }}</div>
</template>

<script>
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/api/",
});

export default {
  name: "UserNameComment",
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
