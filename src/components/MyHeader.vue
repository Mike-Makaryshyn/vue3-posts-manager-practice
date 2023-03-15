<template>
 <header class="header">
   <div class="home-link" @click="$router.push('/')">Vue 3</div>
   <div class="header__btns">
      <my-button style="margin-right: 10px;" @click="$router.push('/posts')">Posts</my-button>
      <my-button @click="$router.push('/About')">About</my-button>
   </div>
  </header>
</template>

<script>
   export default {
      
   }
</script>

<style scoped>
   .header {
      color: white;
      margin-bottom: 50px;
      font-size: 20px;
      min-height: 80px;
      background-color: teal;
      display: flex;
      align-items: center;
      box-shadow: 2px 2px 4px gray;
      justify-content: space-between;
      padding: 0px 30px;
   }
   .header__btns {
      margin-left: auto;
   }

   .home-link {
      cursor: pointer;
      transition: color 0.3s ease;
   }

   .home-link:hover {
      color: rgb(221, 249, 224);
   }
</style>