<template>
  <div>
    <div>
      <NewPost />
    </div>
    <div>
      <AllPosts />
    </div>
  </div>
</template>

<script>
import NewPost from "./NewPostComponent.vue";
import AllPosts from "./AllPostsComponent.vue";

export default {
  name: "Feed",
  components: {
    NewPost,
    AllPosts,
  },
  data: () => ({}),
};
</script>
