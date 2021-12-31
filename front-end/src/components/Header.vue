<template>
  <div class="header">
    <div class="row row-header">
      <div class="col">
        <img src="../assets/icon-left-font.png" alt="" class="header--img" />
        <div v-if="ls" class="icon">
          <font-awesome-icon
            @click="logout()"
            class="fa-header"
            icon="sign-out-alt"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router";

export default {
  name: "Header",
  data() {
    return {
      ls: false,
    };
  },
  created() {
    if (localStorage.getItem("user")) {
      this.ls = true;
    }
  },
  methods: {
    logout() {
      this.ls = false;
      localStorage.removeItem("user");
      this.$store.dispatch("resetUser");
      router.push("/");
    },
  },
};
</script>

<style scoped lang="scss">
.row-header {
  height: 80px;
}
.header--img {
  width: auto;
  max-height: 25%;
}
.icon {
  position: absolute;
  right: 0;
  top: 0;
}
.fa-header {
  font-size: 30px;
  margin-top: 20px;
  cursor: pointer;
  transform: scale(1);
  transition: transform 200ms;
  &:hover {
    transform: scale(1.15);
    color: #fad8d8;
  }
}
</style>
