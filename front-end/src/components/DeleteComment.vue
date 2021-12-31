<template>
  <font-awesome-icon @click="deleteComment" class="fh" icon="trash-alt" />
</template>

<script>
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/api/",
});

export default {
  name: "DeleteComment",
  props: ["idComment"],
  methods: {
    deleteComment() {
      let parameters = this.idComment;
      console.log(parameters);
      instance.delete("comment/" + parameters).then((response) => {
        console.log(response);
        this.$emit("deletecomment");
      });
    },
  },
};
</script>

<style scoped lang="scss">
.fh {
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
