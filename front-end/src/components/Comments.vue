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
          <PictureComment v-bind:idUser="comment.id_user"></PictureComment>
        </div>
        <div class="col-8">
          <div class="row comment-name">
            <UserNameComment v-bind:idUser="comment.id_user"></UserNameComment>
          </div>
          <div class="row comment-timeago">
            <timeago :datetime="comment.creation_date" />
          </div>
          <div class="row comment-text">{{ comment.text }}</div>
        </div>
        <div class="col-1"></div>
        <div v-if="user.admin" class="col-1">
          <DeleteComment
            v-on:deletecomment="refreshlist"
            v-bind:idComment="comment.id_comment"
          ></DeleteComment>
        </div>
      </div>
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
import UserNameComment from "./UserNameComment.vue";
import PictureComment from "./PictureComment.vue";
import { mapState } from "vuex";

const instance = axios.create({
  baseURL: "http://localhost:3000/api/",
});

export default {
  name: "Comments",
  components: { CreateComment, DeleteComment, UserNameComment, PictureComment },
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
  clear: both;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
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
.comment-pp {
  height: 50px;
  width: 50px;
  border: 1px solid #fad8d8;
  border-radius: 50%;
  margin-top: 10px;
}
.comment-name {
  font-weight: bold;
  text-align: start;
  margin-top: 10px;
}
.comment-timeago {
  font-size: 0.8em;
  font-style: italic;
  text-align: start;
}
.comment-text {
  font-size: 0.9em;
  text-align: start;
}
</style>
