<template>
  <div class="lds-facebook">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
   name: 'my-loader'
};
</script>

<style scoped>

.lds-facebook {
  display: flex;
  position: relative;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 80px;
  height: 80px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: teal;
  animation: lds-facebook 0.6s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 8px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(2) {
  left: 32px;
  animation-delay: -0.06s;
}
.lds-facebook div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
}

</style>
