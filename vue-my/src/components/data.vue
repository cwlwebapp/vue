<template>
  <div></div>
</template>

<script>
export default {
  name: "",
  //vue 初始化的data是 Object.defineproperty(obj,key,{属性})
  data() {
    return {
      obj: { name: "zs" }
    };
  },

  components: {},
  methods: {
    //   另外添加
    add() {
      this.$set(obj, "sex", "nv");
    },
    //进行赋值处理
    add1(){
    this.obj.age=18;
    }
  },
  created() {}
};
</script>

<style>
</style>
