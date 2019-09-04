<template>
  <form @submit.prevent="submit" class="vld-parent" ref="formContainer">
    <!-- your form inputs goes here-->
    <label>
      <input type="checkbox" v-model="fullPage">Full page?
    </label>
    <button type="submit">Login</button>
    <div @click="toast">toast</div>
    <div @click="toast1">我是弹框1</div>
  </form>
</template>

<script>
import Vue from "vue";
// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";
Vue.use(Loading);

// before start
import Toast from "vue-easy-toast";

// Init plugin
Vue.use(Toast);

export default {
  data() {
    return {
      fullPage: false
    };
  },
  methods: {
    toast1(){
    this.prompt("你好")
    },
    toast() {
      this.$toast("你好", {
      mode: 'override',
        parent: "#app",
      
        horizontalPosition: "center",
        verticalPosition: "center",
        duration: 1500
      });
    },
    submit() {
      let loader = this.$loading.show({
        // Optional parameters
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: true,
        onCancel: this.onCancel,

        container: this.$refs.loadingContainer,

        color: "#000000",
        loader: "bars", //"dots" 点, //'spinner'loading,
        width: 64,
        height: 64,
        backgroundColor: "#ffffff",
        opacity: 0.5,
        zIndex: 999
      });
      // simulate AJAX
      setTimeout(() => {
        loader.hide();
      }, 5000);
    },
    onCancel() {
      console.log("User cancelled the loader.");
    }
  }
};
</script>