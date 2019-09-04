<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>  
     <a href>{{$baseUrl}}api功能</a>
    <label>
      <input type="checkbox" v-model="fullPage">Full page?
    </label>
    <button @click.prevent="doAjax">fetch Data</button>
    <div> <div @click="toast">按钮</div>
        <grid ref="tuiGrid" :rowData="rows" :columnData="columns"/></div>
        <timeago :datetime="time" locale="zh-CN"></timeago>
        <!-- <div @click="$store.commit('increment')">vuex的数据集合{{$store.state.num}}</div>
        <div @click="$store.dispatch('increment')">vuex的数据集合{{$store.state.num}}</div> -->

  </div>
</template>

<script>
//全局模式
// Import component
// import Loading from 'vue-loading-overlay';
// Import stylesheet
// import 'vue-loading-overlay/dist/vue-loading.css'
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      isLoading: false,
      fullPage: true,
      rows: [
        // for rowData prop
        {
          name: "Beautiful Lies",
          artist: "Birdy"
        },
        {
          name: "X",
          artist: "Ed Sheeran"
        }
      ],
      columns: [
        // for columnData prop
        {
          title: "Name",
          name: "name"
        },
        {
          title: "Artist",
          name: "artist"
        }
      ],
      //时间
      time:1556350101
    };
  },
  computed: {
    // Loading,
    
  },
  methods: {

    doAjax() {
      this.isLoading = true;
      // simulate AJAX
      setTimeout(() => {
        this.isLoading = false;
      }, 5000);
     
    },
    onCancel() {
      console.log("User cancelled the loader.");
    },
    toast(){
 this.$refs.tuiGrid.invoke('setWidth', 500);
    },
    // get设置
    // log() {
    // //局部headers 统一见main.js
    //   this.axios.get(api,params:{},headers:{}).then(response => {
    //     console.log(response.data);
    //   });
    // }
    //----------------------------------------------
    // log() {
    // //局部headers 统一见main.js
    //   this.axios({
    //     methods:"get",
    //     url:"url",
    //     params:{},
    //     headers:{}
    //   }).then(response => {
    //     console.log(response.data);
    //   });
    // }
    //--------------------------------------------
    //铭片
    // post请求
    // log() {
    //   this.axios
    //     //局部headers 统一见main.js
    //     .post(
    //       "/api/model/card_model_share",
    //       {
    //         pageNo: 1,
    //         pageSize: 15
    //       },
    //       { headers: {} }
    //     )
    //     .then(response => {
    //       console.log(response);
    //     });
    // }
    // --------------------------------------------
    // log() {
    //   this.axios({
    //     method: "POST",
    //     url: "/api/model/card_model_share",
    //     data: {
    //       pageNo: 1,
    //       pageSize: 15
    //     },
    //     //局部headers 统一见main.js
    //     headers: {}
    //   }).then(response => {
    //     console.log(response);
    //   });
    // }
    //  post设置
    // log() {
    //   $http===axios相同的效果
    //   this.$http
    //     .post("/api/model/card_model_share", {
    //       pageNo: 1,
    //       pageSize: 15
    //     })
    //     .then(response => {
    //       console.log(response);
    //     });
    // }

    //寄卖
    log() {
      this.axios({
        url: "/api/order/v1/list_data",
        method: "post",
        data: {
          pageNo: 1,
          pageSize: 5,
          orderStatus: 1201
        }
        // 局部请求头token配置
        // headers: {
        //   user_token:"fd6d122a190b45439774c430bd0b1e3f"
        // }
      }).then(response => {
        console.log(response);
      });
    },
    //时间
       clickDay(data) {
      console.log(data); //选中某天
    },
    changeDate(data) {
      console.log(data); //左右点击切换月份
    },
    clickToday(data) {
      console.log(data); //跳到了本月
    }
  },
  created() {
    this.log();
    // console.log(this.$store.state.num,'state---------------')
    // console.log(this.$store.getters.num,'geter------------')
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
