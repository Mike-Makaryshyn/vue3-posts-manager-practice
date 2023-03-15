<template>
  <form @submit.prevent="createPost" action="#">
    <h4>Post creation</h4>
    <my-input v-focus v-model="post.title" placeholder="Title" />
    <my-input v-model="post.body" placeholder="Description" />
    <div class="formBtns">
      <my-button class="formBtn" type="submit">Create new post</my-button>
      <my-button @click="deleteAllPosts" class="formBtn" type="button"
        >Delete all posts</my-button
      >
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        body: "",
        title: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        description: "",
      };
    },
    deleteAllPosts() {
      this.$emit("deleteAllPosts");
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

.formBtns {
  align-self: flex-end;
  margin-top: 20px;
}

.formBtn {
  margin-left: 15px;
}
</style>
