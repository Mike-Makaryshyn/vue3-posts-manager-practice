<template>
   <div>
     <h1>Posts page</h1>
 
     <my-input v-focus v-model="searchQuery" placeholder="Search" />
 
     <div class="app-btns">
       <my-button style="margin: 10px" @click="showDialog"
         >Create post</my-button
       >
       <my-select v-model="selectedSort" :options="sortOptions" />
     </div>
 
     <my-dialog v-model:show="dialogVisible">
       <post-form @create="createPost" @deleteAllPosts="deleteAllPosts" />
     </my-dialog>
     
     <post-list
       :posts="sortedAndSearchedPosts"
       @delete="deletePost"
       v-if="!isPostLoading"
     />
     <my-loader v-if="isPostLoading" />
 
     <div v-intersection="{loadMorePosts, page, totalPages}" class="observer"></div>
   </div>
 </template>
 
 <script>
 import PostList from "@/components/PostList.vue";
 import PostForm from "@/components/PostForm.vue";
 import axios from "axios";
 
 export default {
   components: {
     PostList,
     PostForm,
   },
   data() {
     return {
       posts: [],
       dialogVisible: false,
       modificatorValue: "",
       isPostLoading: false,
       selectedSort: "",
       searchQuery: "",
       page: 1,
       limit: 10,
       totalPages: 0,
       sortOptions: [
         { value: "title", name: "By title" },
         { value: "body", name: "By description" },
       ],
     };
   },
   methods: {
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
     async fetchPosts() {
       try {
         this.isPostLoading = true;
         const response = await axios.get(
           "https://jsonplaceholder.typicode.com/posts",
           {
             params: {
               _page: this.page,
               _limit: this.limit,
             },
           }
         );
 
         this.totalPages = Math.ceil(
           response.headers["x-total-count"] / this.limit
         );
         this.posts = response.data;
       } catch (e) {
         alert("error");
       } finally {
         this.isPostLoading = false;
       }
     },
     async loadMorePosts() {
       try {
         this.page += 1;
         const response = await axios.get(
           "https://jsonplaceholder.typicode.com/posts",
           {
             params: {
               _page: this.page,
               _limit: this.limit,
             },
           }
         );
 
         this.totalPages = Math.ceil(
           response.headers["x-total-count"] / this.limit
         );
 
         this.posts = [...this.posts, ...response.data];
       } catch (e) {
         alert("error");
       } 
     },
   },
 
   mounted() {
     this.fetchPosts();
   },
   computed: {
     sortedPosts() {
       return [...this.posts].sort((a, b) =>
         a[this.selectedSort]?.localeCompare(b[this.selectedSort])
       );
     },
     sortedAndSearchedPosts() {
       if (this.searchQuery) {
         return this.sortedPosts.filter((post) =>
           post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
         );
       }
 
       return this.sortedPosts;
     },
   },
 };
 </script>
 
 <style>

 .observer {
    min-height: 40px;
 }
 </style>
 