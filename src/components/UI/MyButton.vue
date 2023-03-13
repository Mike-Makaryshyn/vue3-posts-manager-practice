<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
   name: 'my-button'
};
</script>

<style scoped>
.btn {
  border-radius: 10px;
  background: none;
  background-color: teal;
  cursor: pointer;
  color: white;
  border: none;
  padding: 10px 20px;
  transition: all 0.3s ease;
}

.btn:hover {
  font-weight: 500;
  color: rgb(240, 248, 234);
  background-color: rgb(47, 226, 226);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>
