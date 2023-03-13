<template>
   <div class="dialog" v-if="show" @click="hideDialog">
      <div @click.stop class="dialog-content">
         <slot></slot>
      </div>
   </div>
</template>

<script>
   export default {
      name:  'my-dialog',
      props: {
         show: {
            type: Boolean,
            default: false
         }
      },
      methods:  {
         hideDialog() {
            this.$emit('update:show', false)
         }
      }
   }
</script>

<style scoped>
   .dialog {
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background: rgba(0,0,0,0.5);
      position: fixed;
      z-index: 100;
      display: flex;
   }

   .dialog-content {
      padding: 20px 40px;
      margin: auto;
      background: white;
      border-radius: 15px;
      min-height: 100px;
      min-width: 300px;
   }
</style>