<template>
   <my-header />
   <div class="app">
      <router-view>
      </router-view>
   </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue';

   export default {
      components: {MyHeader}
   }
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app-btns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}

.app {
  margin: 20px 15px 0px 15px;
}
</style>