<template>
  <div class="container">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-7">
        <div class="thread">
          <CreatePost v-on:newpost="refreshList" />

          <div
            v-for="post in posts"
            :key="post"
            class="container container-post"
          >
            <div class="row">
              <div class="col-2">
                <img class="post-pp" v-bind:src="user.image" alt="" />
              </div>

              <div class="col-8 post-name">
                <UserNamePost v-bind:idUser="post.id_user"></UserNamePost>
              </div>

              <div class="col-1 post-timeago">
                <timeago :datetime="post.creation_date" />
              </div>

              <div v-if="user.admin" class="col-1">
                <DeletePost
                  v-on:deletepost="refreshList"
                  v-bind:idPost="post.id_post"
                ></DeletePost>
              </div>
            </div>

            <div class="row">
              <div class="post-message">
                {{ post.text }}
              </div>
            </div>

            <div class="row">
              <div class="post-image-c" v-if="post.image">
                <img class="post-image" v-bind:src="post.image" />
              </div>
            </div>

            <Comments v-bind:msg="post.id_post"></Comments>
          </div>

          <!-- <div
            v-for="comment in comments"
            :key="comment"
            class="container container-comment"
          >
            <div class="post-commentaire">
              {{ comment.text }}exemple de commentaire
            </div>
          </div> -->
        </div>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
import router from "../router";
import axios from "axios";
import CreatePost from "../components/CreatePost.vue";
import Comments from "../components/Comments.vue";
import UserNamePost from "../components/UserNamePost.vue";
import DeletePost from "../components/DeletePost.vue";
import { mapState } from "vuex";

const instance = axios.create({
  baseURL: "http://localhost:3000/api/",
});

export default {
  name: "Home",
  components: { CreatePost, Comments, UserNamePost, DeletePost },
  data() {
    return {
      posts: "",
      comments: "",
      admin: "",
    };
  },
  computed: {
    ...mapState({
      user: "userInfos",
    }),
  },
  mounted() {
    if (this.$store.state.user.userId == "") {
      router.push("/");
      return;
    }
    instance.get("post").then((response) => {
      this.posts = response.data;
    });
  },
  methods: {
    refreshList() {
      instance.get("post").then((response) => {
        this.posts = response.data;
      });
    },
  },
};
</script>

<style scoped lang="scss">
.container-post {
  border: 1px solid #fad8d8;
  border-radius: 20px;
  margin: 25px 0 25px 0;
}
.post-pp {
  height: 80px;
  width: 80px;
  border: 1px solid #fad8d8;
  border-radius: 50%;
  margin-top: 10px;
}
.post-name {
  font-weight: bold;
  text-align: start;
  margin-top: 10px;
}
.post-timeago {
  font-size: 0.8em;
  font-style: italic;
  text-align: end;
  margin-top: 10px;
}
.post-image-c {
  border-radius: 20px;
}
.post-image {
  height: 100%;
  width: 100%;
  object-fit: contain;
  border-radius: 20px;
}
</style>
