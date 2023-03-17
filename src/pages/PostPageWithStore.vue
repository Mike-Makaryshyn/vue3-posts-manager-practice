<template>
  <div>
    <h1>Posts page</h1>

    <div style="display: flex; justify-content: end; align-items: center;">
      <h2>{{ $store.state.isAuth ? "Logged in" : "Please, log in" }}</h2>
      <my-button
        style="margin: 10px"
        @click="$store.commit('toggleLogin', true)"
        >Log in</my-button
      >
      <my-button
        style="margin: 10px"
        @click="$store.commit('toggleLogin', false)"
        >Log out</my-button
      >
    </div>

    <my-input
      v-focus
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
      placeholder="Search"
    />

    <div class="app-btns">
      <my-button style="margin: 10px" @click="showDialog"
        >Create post</my-button
      >
      <my-select
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
        :options="sortOptions"
      />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" @deleteAllPosts="deleteAllPosts" />
    </my-dialog>

    <post-list
      :posts="sortedAndSearchedPosts"
      @delete="deletePost"
      v-if="!isPostsLoading"
    />

    <my-loader v-if="isPostsLoading" />

    <div
      v-intersection="{ loadMorePosts, page, totalPages }"
      class="observer"
    ></div>
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import PostForm from "@/components/PostForm.vue";
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

export default {
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    ...mapMutations({
      setPage: "post/setPage",
      setSearchQuery: "post/setSearchQuery",
      setSelectedSort: "post/setSelectedSort",
    }),
    ...mapActions({
      loadMorePosts: "post/loadMorePosts",
      fetchPosts: "post/fetchPosts",
    }),
    showDialog() {
      this.dialogVisible = true;
    },
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    deletePost(postId) {
      this.posts = this.posts.filter((item) => item.id !== postId);
    },
    deleteAllPosts() {
      this.posts = [];
    },
  },

  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isPostsLoading: (state) => state.post.isPostsLoading,
      selectedSort: (state) => state.post.selectedSort,
      searchQuery: (state) => state.post.searchQuery,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages,
      sortOptions: (state) => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: "post/sortedPosts",
      sortedAndSearchedPosts: "post/sortedAndSearchedPosts",
    }),
  },
};
</script>

<style>
.observer {
  min-height: 40px;
}
</style>
