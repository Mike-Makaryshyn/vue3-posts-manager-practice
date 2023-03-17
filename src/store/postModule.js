import axios from "axios";

export const postModule = {
   state: () => ({
      posts: [],
      isPostsLoading: false,
      selectedSort: "",
      searchQuery: "",
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        { value: "title", name: "By title" },
        { value: "body", name: "By description" },
      ],
   }),
   getters: {
      sortedPosts(state) {
         return [...state.posts].sort((a, b) =>
           a[state.selectedSort]?.localeCompare(b[state.selectedSort])
         );
       },
       sortedAndSearchedPosts(state, getters) {
         // if (state.searchQuery) {
           return getters.sortedPosts.filter((post) =>
             post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
           );
         // }
      }
   },
   mutations: {
      setPosts(state, posts) {
         state.posts = posts;
      },
      setLoading(state, bool) {
         state.isPostsLoading = bool;
      },
      setPage(state, page) {
         state.page = page;
      },
      setTotalPages(state, totalPages) {
         state.totalPages = totalPages;
      },
      setSelectedSort(state, selectedSort) {
         state.selectedSort = selectedSort;
      },
      setSearchQuery(state, searchQuery) {
         state.searchQuery = searchQuery;
      },
   },
   actions: {
      async fetchPosts({state, commit}) {
         try {
           commit('setLoading', true);
           const response = await axios.get(
             "https://jsonplaceholder.typicode.com/posts",
             {
               params: {
                 _page: state.page,
                 _limit: state.limit,
               },
             }
           );
   
           commit('setTotalPages', Math.ceil(
            response.headers["x-total-count"] / state.limit
          ));

          commit('setPosts', response.data)
         } catch (e) {
           alert("error");
         } finally {
            commit('setLoading', false);
         }
       },
       async loadMorePosts({state, commit}) {
         try {
           commit("setPage", state.page += 1)
           const response = await axios.get(
             "https://jsonplaceholder.typicode.com/posts",
             {
               params: {
                 _page: state.page,
                 _limit: state.limit,
               },
             }
           );
   
           commit('setTotalPages', Math.ceil(
            response.headers["x-total-count"] / state.limit
          ));

          commit('setPosts', [...state.posts, ...response.data])
         } catch (e) {
           alert("error");
         } 
       },
   },
   namespaced: true
}