<template>
  <div></div>
</template>

<script>
export default {
  name: "",
  //  wathch 只能是在data声明的的属性 才能监听
  data() {
    return {
      obj: {
        a: 123
      }
    };
  },
//监听
  watch: {
    //   基本用法
    //   obj(new,old){
    //       console.log(new,old)

    //   }
    //监听已有的属性
    // obj: {
    //   handler(newName, oldName) {
    //     console.log("obj.a changed");
    //   },
    //   immediate: true
    // }
    //可以监听添加的属性
//      obj: {
//     handler(newName, oldName) {
//       console.log('obj.a changed');
//     },
//     immediate: true,
//     deep: true
//   },
   ' obj.a' : {
 
        handler:function() {   //特别注意，不能用箭头函数，箭头函数，this指向全局
 
            处理函数
 
        },
 
        deep: true    //深度监听
 
    }

  },

  components: {},
  methods: {},
  created() {},

  mounted() {
    this.obj = {
      b: "456"
    };
  }
};
</script>

<style>
</style>
