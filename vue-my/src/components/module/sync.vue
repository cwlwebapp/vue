<template>
  <div>
    <p>默认初始值是{{show}}，所以是显示的</p>
    <button @click.stop="closeDiv">关闭</button>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
      show:{
          type:String,
          default(){
              return ""
          }
      }
  },

  data() {
    return {};
  },

  components: {},
  methods: {
      closeDiv() {
          this.$emit('update:show', '你好'); //触发 input 事件，并传入新值
        }
  },
  created() {}
};
</script>

<style>
</style>
