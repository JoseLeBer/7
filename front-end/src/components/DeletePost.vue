<template>
  <font-awesome-icon @click="deletePost" class="fa-header" icon="trash-alt" />
</template>

<script>
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/api/",
});

export default {
  name: "DeletePost",
  props: ["idPost"],
  methods: {
    deletePost() {
      let parameters = this.idPost;
      instance.delete("post/" + parameters).then((response) => {
        console.log(response);
        this.$emit("deletepost");
      });
    },
  },
};
</script>

<style scoped lang="scss">
.fa-header {
  cursor: pointer;
  margin-top: 10px;
  transform: scale(1);
  transition: transform 200ms;
  &:hover {
    transform: scale(1.15);
    color: #ff8c8c;
  }
}
</style>
