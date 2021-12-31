<template>
  <div class="container container-create-post">
    <div class="row">
      <div class="col-2">
        <img class="create-post-pp" v-bind:src="user.image" />
      </div>

      <div class="col-8">
        <form>
          <div class="form-group">
            <input
              @click="getUserId()"
              v-model="text"
              type="text"
              id="inputText"
              class="form-control"
              placeholder="Quoi de neuf ?"
            />
          </div>

          <div class="div icon">
            <font-awesome-icon
              @click="$refs.file.click()"
              class="fa-header"
              :icon="['far', 'images']"
            />
            <span class="create-post-file-name">{{ fileName }}</span>
            <input
              @change="handleFileUpload()"
              type="file"
              id="inputFile"
              ref="file"
            />
          </div>

          <!-- <div class="row">
            <div class="col-1">
              <font-awesome-icon
                @click="$refs.file.click()"
                class="fa-header"
                :icon="['far', 'images']"
              />
              <input
                @change="handleFileUpload()"
                type="file"
                id="inputFile"
                ref="file"
              />
            </div>
            <div class="col-1 create-post-file-name">{{ fileName }}</div>
            <div class="col-8"></div>
            <div class="col-1"></div>
            <div class="col-1"></div>
          </div> -->
          <button type="button" class="btn btn-primary" @click="sendData()">
            Publier
          </button>
        </form>
      </div>

      <div class="col-2"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

const instance = axios.create({
  baseURL: "http://localhost:3000/api/",
});

export default {
  name: "CreatePost",
  data() {
    return {
      id_user: "",
      text: "",
      file: "",
      fileName: "",
    };
  },
  computed: {
    ...mapState({
      user: "userInfos",
    }),
  },
  methods: {
    getUserId() {
      let user = JSON.parse(localStorage.getItem("user"));
      let userId = user.userId;
      this.id_user = userId;
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      this.fileName = this.file.name;
    },
    sendData() {
      document.getElementById("inputText").value = "";
      this.fileName = "";

      let formData = new FormData();
      formData.append("image", this.file);
      formData.append("id_user", this.id_user);
      formData.append("text", this.text);

      instance
        .post("post/", formData, {
          headers: {
            "Content-Type": "multipart/form-data; boundary=${form._boundary}",
          },
        })
        .then((response) => {
          console.log(response);
          this.$emit("newpost");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped lang="scss">
.container-create-post {
  background-color: #fad8d8;
  border-radius: 20px;
}
.create-post-pp {
  height: 80px;
  width: 80px;
  border-radius: 50%;
  margin-top: 10px;
}
.form-group {
  margin: 50px 0px 0px 0px;
}
.icon {
  float: left;
}
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
.create-post-file-name {
  font-size: 0.8em;
  font-style: italic;
  text-align: start;
  margin-top: 10px;
  padding-left: 7px;
}
#inputFile {
  display: none;
}
.btn-primary {
  float: right;
  margin-top: 10px;
  margin-bottom: 20px;
}
</style>
