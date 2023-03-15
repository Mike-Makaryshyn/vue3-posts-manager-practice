<template>
  <div class="post">
    <div class="post-text">
      <div><strong>{{ post.id }}. Title: </strong>{{ post.title }}</div>
      <div><strong>Description: </strong>{{ post.body }}</div>
    </div>
    <div class="posts__btns">
      <my-button style="margin-right: 10px;" @click="openPostsDetails">Details</my-button>
      <my-button @click="deletePost">Delete</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "./UI/MyButton.vue";

export default {
  components: {
    MyButton,
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deletePost() {
      this.$emit("delete", this.post.id);
    },
    openPostsDetails() {
      this.$router.push(`/posts/${this.post.id}`)
    },
  },
};
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin: 20px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.post-text {
   margin-right: 20px;
}

.posts__btns {
   display: flex;
}

</style>
