<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <font-awesome-icon
          @click="displayComments()"
          class="fa-header"
          icon="comments"
        />
      </div>
      <div class="col">
        <font-awesome-icon class="fa-header" :icon="['far', 'heart']" />
      </div>
    </div>

    <div v-for="comment in comments" :key="comment" class="row each-comment">
      <div class="row">
        <div class="col-2">
          <img class="post-pp" src="../assets/icon-left-font.png" alt="" />
        </div>
        <div class="col-8">
          <div class="row"></div>
          <div class="row">{{ comment.text }}</div>
        </div>
        <div class="col-1">
          <timeago :datetime="comment.creation_date" />
        </div>
        <div v-if="user.admin" class="col-1">
          <DeleteComment
            v-on:deletecomment="refreshlist"
            v-bind:idComment="comment.id_comment"
          ></DeleteComment>
        </div>
      </div>

      <!-- <div class="col">{{ comment.text }}</div>
      <div class="col">{{ comment.creation_date }}</div> -->
    </div>

    <div class="row no-comment">{{ nocomments }}</div>

    <div v-if="tof">
      <CreateComment
        v-on:newcomment="refreshlist"
        v-bind:idpost="idpost"
      ></CreateComment>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CreateComment from "./CreateComment.vue";
import DeleteComment from "./DeleteComment.vue";
import { mapState } from "vuex";

const instance = axios.create({
  baseURL: "http://localhost:3000/api/",
});

export default {
  name: "Comments",
  components: { CreateComment, DeleteComment },
  props: ["msg"],
  data() {
    return {
      comments: "",
      nocomments: "",
      idpost: this.msg,
      tof: false,
    };
  },
  computed: {
    ...mapState({
      user: "userInfos",
    }),
  },
  methods: {
    displayComments() {
      let parameter = this.msg;
      instance.get("comment/allcomments/" + parameter).then((response) => {
        if (response.data.length == 0) {
          this.nocomments = "Sois le premier à commenter !";
        } else {
          this.comments = response.data;
        }
      });
      this.tof = true;
    },
    refreshlist() {
      let parameter = this.msg;
      instance.get("comment/allcomments/" + parameter).then((response) => {
        this.nocomments = "";
        this.comments = response.data;
      });
    },
  },
};
</script>

<style scoped lang="scss">
.each-comment {
  border: 2px solid #fad8d8;
  border-radius: 10px 10px 0px 10px;
  margin: 10px 18px 10px 18px;
}
.no-comment {
  color: #ff8c8c;
  font-weight: bold;
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
.post-pp {
  height: 50px;
  width: 50px;
  border: 1px solid #fad8d8;
  border-radius: 50%;
  margin-top: 10px;
}
</style>
