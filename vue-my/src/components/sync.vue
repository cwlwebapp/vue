<template>
  <div>
      <button @click="changeValue">你好{{valueChild}}</button>
    <cwsync :show.sync="valueChild"/>
    <button @click="checked">查看数据</button>
    <button @click="increment">map</button>{{num}}
    <button @click="increment1">map</button>{{num}}

  
   
  </div>
</template>

<script>

import cwsync from "@/components/module/sync";
import { mapState, mapGetters, mapMutations,mapActions } from 'Vuex'
// import {  } from "Vuex";
export default {
  name: "",

  data() {
    return {
      valueChild: '好好'
    };
  },

  components: {
    cwsync
  },
  computed: {
    ...mapGetters(['num']),
    ...mapState(['num'])
  },
  methods: {
    ...mapMutations(['increment']),
    ...mapActions(['increment1']),
    changeValue(val) {
      console.log(val,'数据*********')
      this.valueChild = '好好';
    },
    checked(){
      console.log(this.valueChild,'-------------')
    }
  },
  created() {

     console.log(this.num,'mapgetrer')
     console.log(this.num,'====')
  },
  mounted() {
   this.$nextTick(function () {
        console.log(this.$el) // => 'updated'
      })
   

  },

};
</script>

<style>
</style>
