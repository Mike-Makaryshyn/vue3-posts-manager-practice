<template>
  <div>
    <div v-if="posts.length > 0">
      <h3>List of posts</h3>
      <transition-group name="posts" class="container list-wrapper" tag="div">
        <post-item
          v-for="post in posts"
          name="post"
          :post="post"
          :key="post.id"
          @delete="(postId) => $emit('delete', postId)"
        />
      </transition-group>
    </div>
    <div class="no-posts" v-if="!posts.length">
      No posts!
    </div>
  </div>
</template>

<script>
import PostItem from "./PostItem.vue";

export default {
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.no-posts {
  text-align: center;
  color: red;
}
.container {
  position: relative;
  padding: 0;
}
.post {
   margin-right: 15px;
}

.posts-enter-active,
.posts-leave-active {
  transition: all 0.5s ease;
}
.posts-enter-from,
.posts-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}
.posts-move {
   transition: transform 0.4s ease-in-out;
}
</style>
