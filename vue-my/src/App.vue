<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app{
  padding-top: 10px;
}
/* //弹出框 */
/* .prompt {
  position: fixed;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  padding: rem(10) rem(30);
  border-radius: rem(10);
  z-index: 5000;
  color: #fff;
  max-width: 85%;
  text-align: center;
  transition: all 0.6s;
  font-size: rem(32);
} */
</style>
