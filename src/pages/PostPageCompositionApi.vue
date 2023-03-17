<template>
   <div>
     <h1>Posts page</h1>
     <my-input v-focus v-model="searchQuery" placeholder="Search" />
 
     <div class="app-btns">
       <my-select v-model="selectedSort" :options="sortOptions" />
     </div>
 
     <my-dialog v-model:show="dialogVisible">
       <post-form />
     </my-dialog>
     
     <post-list
       :posts="sortedAndSearchedPosts"
       v-if="!isPostsLoading"
     />
     <my-loader v-if="isPostsLoading" />
   </div>
 </template>
 
 <script>
 import PostList from "@/components/PostList.vue";
 import PostForm from "@/components/PostForm.vue";
 import usePosts from "@/hooks/usePosts.js";
 import useSortedPosts from "@/hooks/useSortedPosts.js";
 import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts.js";
 
 export default {
   components: {
     PostList,
     PostForm,
   },
   data() {
     return {
       dialogVisible: false,
       sortOptions: [
         { value: "title", name: "By title" },
         { value: "body", name: "By description" },
       ],
     };
   },
   setup() {
      const { posts, totalPages, isPostsLoading } = usePosts(10)
      const { selectedSort, sortedPosts } = useSortedPosts(posts)
      const { searchQuery, sortedAndSearchedPosts } = useSortedAndSearchedPosts(sortedPosts)

      return {
            posts, 
            totalPages,
            isPostsLoading, 
            selectedSort, 
            sortedPosts,
            searchQuery,
            sortedAndSearchedPosts
         }
   }
 }; 
 </script>
 
 <style>

 .observer {
    min-height: 40px;
 }
 </style>
 