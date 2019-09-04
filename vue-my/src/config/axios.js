//axios的配置
// import Vue from 'vue'
import axios from 'axios'
axios.defaults.baseURL = "https://jm.cctstny.com/jimai";
axios.defaults.headers.common['user_token'] = "fd6d122a190b45439774c430bd0b1e3f";
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    console.log(config,'拦截器')
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    console.log(error,"拦截器错")
    return Promise.reject(error);
  });
  
  // 添加响应拦截器
  axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    console.log(response,"数据过滤")
    return response;
  }, function (error) {
    // 对响应错误做点什么
    console.log(error,"数据过滤错误")
    return Promise.reject(error);
  });
  
export{
    axios
}
  