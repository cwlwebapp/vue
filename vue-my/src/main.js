import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// webpack 配置第一种
// Vue.prototype.$baseUrl = process.env.api
// webpack第二种配置
Vue.prototype.$baseUrl = process.env.baseUrl
console.log(process.env.NODE_ENV)
//axios的配置
// import axios from 'axios'
// import VueAxios from 'vue-axios'

// // axios.defaults.timeout = 10000 //超时取消请求
// // 基础路径(铭片)
// // axios.defaults.baseURL = 'http://www.99mention.com/card';
// // 基础路径(寄卖)
// axios.defaults.baseURL = "https://jm.cctstny.com/jimai";
// // 配置token
// // axios.defaults.headers.common['Authorization'] = store.getState().session.token;
// axios.defaults.headers.common['user_token'] = "fd6d122a190b45439774c430bd0b1e3f";
// // 配置请求头
// // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// // 添加请求拦截器
// axios.interceptors.request.use(function (config) {
//   console.log(config,'拦截器')
//   // 在发送请求之前做些什么
//   return config;
// }, function (error) {
//   // 对请求错误做些什么
//   console.log(error,"拦截器错")
//   return Promise.reject(error);
// });

// // 添加响应拦截器
// axios.interceptors.response.use(function (response) {
//   // 对响应数据做点什么
//   console.log(response,"数据过滤")
//   return response;
// }, function (error) {
//   // 对响应错误做点什么
//   console.log(error,"数据过滤错误")
//   return Promise.reject(error);
// });

// // 使用 vue axios
// Vue.use(VueAxios, axios)

//loading
// import Loading from 'vue-loading-overlay';
// // Import stylesheet
// import 'vue-loading-overlay/dist/vue-loading.css';
// Vue.use(Loading, {
//   // props
//   color: 'red'
// });
// Vue.component('loading', Loading)

//toast

// import vDialog from 'v-dialogs';
// Vue.use(vDialog,vDialog);
//toast
import 'tui-grid/dist/tui-grid.css'
import { Grid } from '@toast-ui/vue-grid'
Vue.component('grid', Grid)

import VueAxios from 'vue-axios'
import { axios } from '@/config/axios'
// 使用 vue axios
Vue.use(VueAxios, axios)

//常用过滤器
import filter from '@/config/filter'
Vue.use(filter);

//时间
import VueTimeago from 'vue-timeago'

Vue.use(VueTimeago, {
  name: 'Timeago', // Component name, `Timeago` by default
  locale: 'en', // Default locale
  // We use `date-fns` under the hood
  // So you can use all locales from it
  locales: {
    'zh-CN': require('date-fns/locale/zh_cn'),
    ja: require('date-fns/locale/ja')
  }
})

//时间选择器
import Calendar from 'vue2-datepick';

Vue.use(Calendar);

/* eslint-disable no-new */
// @ts-ignore
import Vuex from 'Vuex'
Vue.use(Vuex);
let store = new Vuex.Store({
  state: {
    num: 1
  },
  getters: {
    num: state => {
      return state.num*2
    }
  },
  mutations: {
    increment (state) {
      // mutate state
      state.num++
    }
  },
  actions:{
    increment1 ({ commit }) {
      setTimeout(()=>{
        commit('increment')
      },3000)
    },
    // increment (context) {
    //   context.commit('increment')
    // }
  }
})

//300s数据延迟
// 防止缩放
// import FastClick from 'fastclick'
// if ('addEventListener' in document) {
//   document.addEventListener('DOMContentLoaded', function() {
//       FastClick.attach(document.body);
//   }, false);
// }

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
