<template>
  <v-container class="allPosts">
    <v-row v-for="post in posts" v-bind:key="post.id" class="postCenter">
      <v-col cols="8" class="postBlock">
        <v-row class="postContent">
          <v-col cols="10" class="authorInfo">
            <v-row class="authorName">
              <v-col cols="2">
                <img
                  :src="post.author.imageUrl ?post.author.imageUrl : 'https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg'"
                  class="authorPicture"
                />
              </v-col>
              <v-col cols="4" class="authorName">
                {{ post.author.firstname }} {{ post.author.lastname }}
              </v-col>
            </v-row>
            <v-row class="createdAt">
              <v-col cols="6"> Créé {{ post.createdAt }} </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="postText">
          <v-col cols="10" class="text">{{ post.text }}</v-col>
          <img v-if="post.imageUrl" :src="post.imageUrl" class="postImg" />
        </v-row>
        <v-row class="border">
          <v-col cols="2">
            <v-btn
              v-if="post.author.id == userId || admin == 1"
              @click="deletePost"
              :data-id="post.id"
              class="deleteBtn"
              title="delete"
              dark
              >Supprimer</v-btn
            >
          </v-col>
          <v-col cols="2" class="likeBtn">
            <v-btn @click="like(post.id)" :data-id="post.id" dark class="thumbBtn">
              <span :data-id="post.id">{{ post.liked }}</span>
              <v-icon :data-id="post.id" class="thumbIcon">mdi-thumb-up</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row v-bind:id="post.id">
          <v-col cols="10">
            <v-textarea
              v-model.trim="comments[post.id]"
              id="comment"
              :name="'comments' + post.id"
              class="commentsText"
              placeholder="Écrire un commentaire"
              required
            ></v-textarea>
            <v-btn
              @click="postComment(post.id)"
              :data-id="post.id"
              class="sendBtn"
              dark
            >
              <span :data-id="post.id">Envoyer</span>
              <v-icon :data-id="post.id" class="commentIcon"
                >mdi-message-arrow-right</v-icon
              >
            </v-btn>
          </v-col>
        </v-row>
        <v-col cols="12" :id="'comment-' + post.id" class="commentBlock">
          <v-row
            v-for="comment in commentaries.comments"
            v-bind:key="comment.id"
            class="commentRow whiteText"
          >
            <v-col cols="11" v-if="comment.postId == post.id">
              <v-row class="commentsAuthor" v-if="comment.postId == post.id">
                <v-col cols="4" class="contentMargin"
                  >{{ comment.author.firstname }}
                  {{ comment.author.lastname }}</v-col
                >
              </v-row>
              <v-row class="commentsDate" v-if="comment.postId == post.id">
                <v-col cols="4" class="contentMargin">{{
                  comment.createdAt
                }}</v-col>
              </v-row>
              <v-row class="commentContent" v-if="comment.postId == post.id">
                <v-col cols="11" class="contentMargin">
                  {{ comment.content }}
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <v-row class="commentsBtn">
          <v-col cols="3" v-bind:id="post.id">
            <v-btn
              :data-id="post.id"
              @click="showComments(post.id)"
              class="commentBtn"
              dark
              ><v-icon :data-id="post.id" class="commentIcon2"
                >mdi-comment-eye</v-icon
              ><span :data-id="post.id">Voir les commentaires</span></v-btn
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/api/";

export default {
  name: "AllPosts",
  props: {
    msg: String,
  },
  data() {
    return {
      posts: [],
      comments: [],
      description: "",
      content: "",
      liked: 0,
      currentPost: "",
      admin: JSON.parse(localStorage.getItem("userInfo")).admin,
      userId: JSON.parse(localStorage.getItem("userInfo")).id,
      commentaries: {
        comments: [],
      },
    };
  },
  methods: {
    showAllPosts() {
      axios
        .get("auth/post", {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        })
        .then((response) => {
          this.posts = localStorage.setItem(
            "postInfo",
            JSON.stringify(response.data)
          );
          this.posts = response.data;
          console.log(this.posts);
        });
    },
    deletePost() {
      let id = event.target.getAttribute("data-id");
      axios
        .delete("auth/post/" + id, {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        })
        .then((response) => {
          console.log(response.data);
          window.location.reload();
        });
    },
    like() {
      let id = event.target.getAttribute("data-id");

      if (this.liked == 0) {
        this.liked = 1;
        document.querySelector("span[data-id='" + id + "']").textContent =
          parseInt(
            document.querySelector("span[data-id='" + id + "']").textContent
          ) + 1;
      } else {
        console.log(this.liked);
        this.liked = 0;
        document.querySelector("span[data-id='" + id + "']").textContent =
          parseInt(
            document.querySelector("span[data-id='" + id + "']").textContent
          ) - 1;
      }
      console.log(this.liked);
      axios
        .put(
          "auth/post/" + id + "/like",
          { like: this.liked },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          console.log(response.data);
        });
    },
    postComment(postId) {
      axios
        .post(
          "auth/post/" + postId + "/comments",
          {
            content: this.comments[postId],
            userId: this.userId,
            postId: postId,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          console.log(response);
          this.comments[postId] = "";
          this.getComments(postId);
        });
    },

    getComments(postId) {
      axios
        .get("auth/post/" + postId + "/comments", {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        })
        .then((response) => {
          console.log(response);
          this.commentaries.comments = response.data;
        });
    },

    showComments(postId) {
      let visibility = document.getElementById("comment-" + postId).style
        .display;
      console.log(visibility);
      if (visibility == "none") {
        this.getComments(postId);
        document.getElementById("comment-" + postId).style.display = "flex";
      } else {
        document.getElementById("comment-" + postId).style.display = "none";
      }
    },
  },
  beforeMount() {
    this.showAllPosts();
  },
};
</script>

<style>
.allPosts {
  margin-top: 50px;
  margin-bottom: 150px;
  display: flex;
  flex-direction: column;
}

.postText {
    display: flex;
}

.postCenter {
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 30px;
}

.postBlock {
  border: solid;
  margin-top: 10px;
}

.createdAt {
  border-bottom: solid 0.3px;
}

.text {
  margin-top: 5px;
}

.commentBlock {
  display: none;
  flex-direction: column;
  margin-top: 15px;
}

.border {
  border-bottom: solid 0.5px;
  display: flex;
    justify-content: space-between;
}

.commentRow {
  margin: 10px 5px 5px 5px;
  background-color: #091f43;
  margin-bottom: 20px;
  border-radius: 0 1rem 1rem 1rem;
}

.commentsBtn {
  margin-top: 10px;
}

.whiteText {
  color: white;
  word-wrap: break-word;
}

.commentContent {
  display: flex;
}

.contentMargin {
  margin-left: 15px;
}

.postImg {
  width: 100%;
  height: 30rem;
  margin: 20px 20px 0 20px;
}

.deleteBtn {
  background-color: #091f43 !important;
}

.thumbBtn {
  background-color: #091f43 !important;
}

.sendBtn {
  background-color: #091f43 !important;
}

.commentBtn {
  background-color: #091f43 !important;
}

.authorPicture {
  width: 5rem;
  height: 5rem;
  border-radius: 10rem 10rem;
  object-fit: cover;
  margin: 0 0 30px 0;
}

.authorName {
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 20px 20px;
}

.likeBtn {
  display: flex;
  justify-content: flex-end;
}

@media screen and (max-width: 1360px) {
   .postImg {
       width: 90%;
       height: 25rem;
   }
}

@media screen and (max-width: 760px) {
   .postImg {
       width: 90%;
       height: 20rem;
   }
}
</style>
